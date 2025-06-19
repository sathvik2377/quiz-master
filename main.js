
// Moved from index.html <script> tag
// ... all JS from index.html ... 

// Quiz data
const quizData = {
    grammar: [
        {
            question: "Which sentence demonstrates correct use of the subjunctive mood?",
            options: [
                "I suggest that he goes to the doctor.",
                "I suggest that he go to the doctor.",
                "I suggest that he will go to the doctor.",
                "I suggest that he went to the doctor."
            ],
            correct: 1,
            explanation: "The subjunctive mood uses the base form of the verb after 'suggest that'."
        },
        {
            question: "Identify the correct use of the past perfect tense:",
            options: [
                "I had finished my homework when my friend called.",
                "I finished my homework when my friend had called.",
                "I have finished my homework when my friend called.",
                "I finished my homework when my friend called."
            ],
            correct: 0,
            explanation: "The past perfect is used for the action that happened first in the past."
        }
    ],
    vocabulary: [
        {
            question: "What is the contextual meaning of 'ubiquitous' in academic writing?",
            options: [
                "Rare and unusual",
                "Present everywhere",
                "Extremely valuable",
                "Temporarily available"
            ],
            correct: 1,
            explanation: "In academic contexts, 'ubiquitous' means present, appearing, or found everywhere."
        },
        {
            question: "Which word is NOT a collocation with 'make'?",
            options: [
                "make a decision",
                "make a mistake",
                "make a homework",
                "make a difference"
            ],
            correct: 2,
            explanation: "The correct collocation is 'do homework', not 'make homework'."
        }
    ],
    phrasalVerbs: [
        {
            question: "What does 'to brush up on' mean?",
            options: [
                "To clean something thoroughly",
                "To improve existing knowledge",
                "To remove something completely",
                "To start learning something new"
            ],
            correct: 1,
            explanation: "'To brush up on' means to improve or refresh one's knowledge of something."
        },
        {
            question: "Which phrasal verb means 'to tolerate'?",
            options: [
                "put up with",
                "put down to",
                "put off by",
                "put on to"
            ],
            correct: 0,
            explanation: "'Put up with' means to tolerate or endure something unpleasant."
        }
    ],
    analogy: [
        {
            question: "Book is to reading as fork is to:",
            options: [
                "eating",
                "cooking",
                "cutting",
                "serving"
            ],
            correct: 0,
            explanation: "A book is a tool for reading, just as a fork is a tool for eating."
        },
        {
            question: "Doctor is to hospital as teacher is to:",
            options: [
                "classroom",
                "student",
                "book",
                "education"
            ],
            correct: 0,
            explanation: "A doctor works in a hospital, just as a teacher works in a classroom."
        }
    ]
}; 

// Game state
let currentCategory = '';
let currentQuestion = null;
let score = 0;
let answered = false;
let questionTimer;
let totalTimer;
let totalSeconds = 0;
let questionSeconds = 30;

// Initialize the game
function init() {
    // Show practice section by default
    document.getElementById('practiceSection').style.display = 'grid';
    document.getElementById('graphingSection').style.display = 'none';
    document.getElementById('calculatorSection').style.display = 'none';
    document.getElementById('pdfSection').style.display = 'none';
    document.getElementById('quizSection').classList.remove('active');
    document.getElementById('backBtn').style.display = 'none';
}

// Show main menu
function showMainMenu() {
    document.getElementById('practiceSection').style.display = 'grid';
    document.getElementById('graphingSection').style.display = 'none';
    document.getElementById('calculatorSection').style.display = 'none';
    document.getElementById('pdfSection').style.display = 'none';
    document.getElementById('quizSection').classList.remove('active');
    document.getElementById('backBtn').style.display = 'none';
    currentCategory = '';
    stopTimers();
}

// Timer functions
function startQuestionTimer() {
    questionSeconds = 30;
    updateQuestionTimer();
    questionTimer = setInterval(() => {
        questionSeconds--;
        updateQuestionTimer();
        if (questionSeconds <= 0) {
            clearInterval(questionTimer);
            handleTimeUp();
        }
    }, 2000);
}

function startTotalTimer() {
    totalTimer = setInterval(() => {
        totalSeconds++;
        updateTotalTimer();
    }, 2000);
}

function stopTimers() {
    clearInterval(questionTimer);
    clearInterval(totalTimer);
}

function updateQuestionTimer() {
    document.getElementById('questionTimer').textContent = questionSeconds;
}

function updateTotalTimer() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    document.getElementById('totalTimer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function handleTimeUp() {
    if (!answered) {
        answered = true;
        score = Math.max(0, score - 1);
        document.getElementById('scoreValue').textContent = score;
        showFeedback('Time\'s up! ' + currentQuestion.explanation, 'error');
        setTimeout(() => {
            generateQuestion();
        }, 3000);
    }
}

// Show section function
function showSection(section) {
    const practiceSection = document.getElementById('practiceSection');
    const graphingSection = document.getElementById('graphingSection');
    const calculatorSection = document.getElementById('calculatorSection');
    const pdfSection = document.getElementById('pdfSection');
    const buttons = document.querySelectorAll('.section-btn');
    const quizContainer = document.querySelector('.quiz-container');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    practiceSection.style.display = 'none';
    graphingSection.style.display = 'none';
    calculatorSection.style.display = 'none';
    pdfSection.style.display = 'none';

    if (section === 'practice') {
        practiceSection.style.display = 'grid';
        quizContainer.classList.remove('pdf-mode');
    } else if (section === 'graphing') {
        graphingSection.style.display = 'block';
        quizContainer.classList.remove('pdf-mode');
        // Initialize graph when section is shown
        setTimeout(() => {
            initGraph();
            initMouseEvents();
        }, 100);
    } else if (section === 'calculator') {
        calculatorSection.style.display = 'block';
        quizContainer.classList.remove('pdf-mode');
    } else {
        pdfSection.style.display = 'block';
        quizContainer.classList.add('pdf-mode');
    }
}

// Start a quiz category
function startQuiz(category) {
    currentCategory = category;
    document.getElementById('practiceSection').style.display = 'none';
    document.getElementById('graphingSection').style.display = 'none';
    document.getElementById('calculatorSection').style.display = 'none';
    document.getElementById('pdfSection').style.display = 'none';
    document.getElementById('quizSection').classList.add('active');
    document.getElementById('backBtn').style.display = 'block';

    // Set category title
    const categoryTitles = {
        grammar: 'Grammar Mastery',
        vocabulary: 'Vocabulary Challenge',
        phrasalVerbs: 'Phrasal Verbs & Idioms',
        analogy: 'Analogical Reasoning'
    };

    document.getElementById('categoryTitle').textContent = categoryTitles[category];
    score = 0;
    totalSeconds = 0;
    document.getElementById('scoreValue').textContent = score;
    startTotalTimer();
    generateQuestion();
}

// Generate a random question
function generateQuestion() {
    if (!currentCategory || !quizData[currentCategory]) return;

    const questions = quizData[currentCategory];
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];
    answered = false;

    // Display question
    document.getElementById('questionText').textContent = currentQuestion.question;

    // Generate options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option;
        optionBtn.onclick = () => selectOption(index, optionBtn);
        optionsContainer.appendChild(optionBtn);
    });

    startQuestionTimer();
}

// Handle option selection
function selectOption(selectedIndex, buttonElement) {
    if (answered) return;

    answered = true;
    clearInterval(questionTimer);
    const isCorrect = selectedIndex === currentQuestion.correct;

    // Show correct/incorrect styling
    const allOptions = document.querySelectorAll('.option-btn');
    allOptions.forEach((btn, index) => {
        if (index === currentQuestion.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
        btn.style.pointerEvents = 'none';
    });

    // Update score
    if (isCorrect) {
        score += 3;
        document.getElementById('scoreValue').textContent = score;
        showFeedback('Correct! ' + currentQuestion.explanation, 'success');
    } else {
        score = Math.max(0, score - 1);
        document.getElementById('scoreValue').textContent = score;
        showFeedback('Incorrect. ' + currentQuestion.explanation, 'error');
    }

    // Auto-generate new question after delay
    setTimeout(() => {
        generateQuestion();
    }, 3000);
}

// Show feedback message
function showFeedback(message, type) {
    // Create feedback element
    const feedback = document.createElement('div');
    feedback.className = `feedback ${type}`;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
        color: ${type === 'success' ? '#155724' : '#721c24'};
        border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
        border-radius: 10px;
        padding: 15px 20px;
        max-width: 300px;
        z-index: 1000;
        animation: slideInRight 0.5s ease-out;
    `;
    feedback.textContent = message;

    document.body.appendChild(feedback);

    // Remove after 3 seconds
    setTimeout(() => {
        feedback.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 500);
    }, 2500);
}

// Back button functionality
document.getElementById('backBtn').onclick = showMainMenu;

// --- User Info Modal and BITSAT Timer Logic ---

function showUserModal() {
    const modal = document.getElementById('userModal');
    modal.style.display = 'flex';
}

function hideUserModal() {
    const modal = document.getElementById('userModal');
    modal.style.display = 'none';
}

function saveUserInfo() {
    const userName = document.getElementById('userNameInput').value.trim();
    const examDate = document.getElementById('examDateSelect').value;
    if (!userName) {
        alert('Please enter your name.');
        return;
    }
    localStorage.setItem('userName', userName);
    localStorage.setItem('examDate', examDate);
    hideUserModal();
    updateExamCountdown();
    sendUserInfoToWebhook(userName, examDate);
    showMainMenu();
}

function sendUserInfoToWebhook(name, date) {
    // Replace with your webhook URL
    const webhookUrl = 'https://webhook.site/your-webhook-url';
    fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, examDate: date, timestamp: new Date().toISOString() })
    });
}

// Override updateExamCountdown to use user's date
function updateExamCountdown() {
    let examDateStr = localStorage.getItem('examDate');
    if (!examDateStr) examDateStr = '2025-06-22';
    const examDate = new Date(examDateStr + 'T00:00:00');
    const now = new Date();
    const diff = examDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const userName = localStorage.getItem('userName');
    document.getElementById('examCountdown').textContent =
        (userName ? userName + ', ' : '') + `${days} days, ${hours} hours, ${minutes} minutes until BITSAT`;
}

// On load, check for user info
window.onload = function() {
    const userName = localStorage.getItem('userName');
    const examDate = localStorage.getItem('examDate');
    if (!userName || !examDate) {
        showUserModal();
    } else {
        updateExamCountdown();
        showMainMenu();
    }
    setInterval(updateExamCountdown, 60000);
};

// --- AI API Integration Instructions ---
// To use a real AI API:
// 1. Sign up for an API key at OpenAI (https://platform.openai.com/) or Gemini (https://aistudio.google.com/app/apikey).
// 2. Replace the setTimeout in askAi() with a fetch() call to your backend or directly to the AI API endpoint.
// 3. For OpenAI, use the /v1/chat/completions endpoint with your API key (never expose your key in frontend code; use a backend proxy if needed).
// 4. See OpenAI docs: https://platform.openai.com/docs/api-reference/chat/create

document.addEventListener('DOMContentLoaded', function() {
    var askAiBtn = document.getElementById('askAiBtn');
    if (askAiBtn) {
        askAiBtn.onclick = function() {
            document.getElementById('aiModal').style.display = 'flex';
            document.getElementById('aiQuestion').value = '';
            document.getElementById('aiAnswer').textContent = '';
        };
    }
});

function askAi() {
    const question = document.getElementById('aiQuestion').value.trim();
    const answerDiv = document.getElementById('aiAnswer');
    if (!question) {
        answerDiv.textContent = 'Please enter a question.';
        return;
    }
    answerDiv.innerHTML = '<span style="color:#667eea;">Thinking <span class="ai-sparkle">✨</span></span>';
    fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAOu3n2b83ZBWStPJPBADWPjK4fJkzbVys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: question }] }]
        })
    })
    .then(res => res.json())
    .then(data => {
        const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No answer from AI.';
        answerDiv.textContent = answer;
    })
    .catch(() => {
        answerDiv.textContent = 'Sorry, there was an error contacting the AI.';
    });
}

function closeAiModal() {
    document.getElementById('aiModal').style.display = 'none';
}

window.closeAiModal = closeAiModal;
window.askAi = askAi;

// ... (rest of the JS code for graphing calculator, scientific calculator, PDF, etc. should be included here) ... 
