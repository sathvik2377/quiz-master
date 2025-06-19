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
    const chatbotSection = document.getElementById('chatbotSection');
    const buttons = document.querySelectorAll('.section-btn');
    const quizContainer = document.querySelector('.quiz-container');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    practiceSection.style.display = 'none';
    graphingSection.style.display = 'none';
    calculatorSection.style.display = 'none';
    pdfSection.style.display = 'none';
    chatbotSection.style.display = 'none';

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
    } else if (section === 'chatbot') {
        chatbotSection.style.display = 'block';
        quizContainer.classList.remove('pdf-mode');
    } else if (section === 'settings') {
        showUserModal();
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

    // Add motivational messages based on time remaining
    let motivationalMessage = '';
    if (days <= 7) {
        motivationalMessage = ' 🚨 HURRY! BITSAT is VERY NEAR! Final sprint time! 🚨';
    } else if (days <= 30) {
        motivationalMessage = ' ⚡ BITSAT is approaching fast! Time to accelerate! ⚡';
    } else if (days <= 60) {
        motivationalMessage = ' 🎯 BITSAT is getting closer! Stay focused! 🎯';
    } else {
        motivationalMessage = ' 📚 Perfect time to build strong foundations! 📚';
    }

    const countdownElement = document.getElementById('examCountdown');
    if (countdownElement) {
        countdownElement.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px; flex-wrap: wrap;">
                <span style="font-size: 1.1em;">${userName ? userName + ', ' : ''}</span>
                <span style="font-size: 1.3em; font-weight: 900;">${days} days, ${hours} hours, ${minutes} minutes until BITSAT</span>
            </div>
            <div style="margin-top: 8px; font-size: 0.9em; animation: flash 2s infinite;">
                ${motivationalMessage}
            </div>
        `;
    }
}

// Hyperspeed Background Effect
function initHyperspeedBackground() {
    const container = document.getElementById('hyperspeedBg');
    if (!container) return;

    // Create stars for hyperspeed effect
    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';

        // Random position
        const startY = Math.random() * window.innerHeight;
        const startX = window.innerWidth + 10;

        // Random size
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        // Position
        star.style.left = startX + 'px';
        star.style.top = startY + 'px';

        // Random animation duration for variety
        const duration = Math.random() * 3 + 2; // 2-5 seconds
        star.style.animationDuration = duration + 's';

        // Random delay
        const delay = Math.random() * 2;
        star.style.animationDelay = delay + 's';

        container.appendChild(star);

        // Remove star after animation
        setTimeout(() => {
            if (star.parentNode) {
                star.parentNode.removeChild(star);
            }
        }, (duration + delay) * 1000);
    }

    // Create stars continuously
    function generateStars() {
        // Create multiple stars at once for denser effect
        for (let i = 0; i < 3; i++) {
            setTimeout(() => createStar(), i * 100);
        }
    }

    // Start generating stars
    generateStars();
    setInterval(generateStars, 200);
}

// Typing Effect for Title
function initTypingEffect() {
    const title = document.getElementById('typingTitle');
    if (!title) return;

    const text = 'BITSAT Prep Hub';
    title.textContent = '';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        } else {
            // Add blinking cursor effect
            setTimeout(() => {
                title.innerHTML += '<span class="cursor">|</span>';
            }, 500);
        }
    }

    typeWriter();
}

// Enhanced Motivational Quotes with Different Colors and Rolling Gallery
function initMotivationalQuotes() {
    const quoteColors = [
        "linear-gradient(135deg, #ff6b6b, #ee5a24)",     // Red-Orange
        "linear-gradient(135deg, #4ecdc4, #44a08d)",     // Teal-Green
        "linear-gradient(135deg, #9c27b0, #673ab7)",     // Purple-Indigo
        "linear-gradient(135deg, #ff9800, #f57c00)",     // Orange-Amber
        "linear-gradient(135deg, #3f51b5, #303f9f)",     // Indigo-Blue
        "linear-gradient(135deg, #e91e63, #ad1457)"      // Pink-Rose
    ];

    const leftQuotes = [
        {
            icon: "fas fa-quote-left",
            text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            author: "Winston Churchill"
        },
        {
            icon: "fas fa-lightbulb",
            text: "The expert in anything was once a beginner.",
            author: "Helen Hayes"
        },
        {
            icon: "fas fa-rocket",
            text: "Don't watch the clock; do what it does. Keep going.",
            author: "Sam Levenson"
        },
        {
            icon: "fas fa-mountain",
            text: "It is during our darkest moments that we must focus to see the light.",
            author: "Aristotle"
        },
        {
            icon: "fas fa-fire",
            text: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
        },
        {
            icon: "fas fa-star",
            text: "Dream big and dare to fail.",
            author: "Norman Vaughan"
        }
    ];

    const rightQuotes = [
        {
            icon: "fas fa-star",
            text: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },
        {
            icon: "fas fa-trophy",
            text: "Success is the sum of small efforts repeated day in and day out.",
            author: "Robert Collier"
        },
        {
            icon: "fas fa-brain",
            text: "The beautiful thing about learning is that no one can take it away from you.",
            author: "B.B. King"
        },
        {
            icon: "fas fa-gem",
            text: "Education is the most powerful weapon which you can use to change the world.",
            author: "Nelson Mandela"
        },
        {
            icon: "fas fa-crown",
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            icon: "fas fa-heart",
            text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
            author: "Ralph Waldo Emerson"
        }
    ];

    // Initialize quote containers with rolling gallery effect
    initQuoteContainer('left-quotes', leftQuotes, quoteColors);
    initQuoteContainer('right-quotes', rightQuotes, quoteColors);
}

function initQuoteContainer(containerClass, quotes, colors) {
    const container = document.querySelector(`.${containerClass}`);
    if (!container) return;

    let currentQuoteIndex = 0;
    let isAnimating = false;

    // Add event listeners for interactions
    container.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        if (!isAnimating) changeQuote();
    });

    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (!isAnimating) changeQuote();
    });

    function changeQuote() {
        if (isAnimating) return;
        isAnimating = true;
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        updateQuoteDisplayWithRolling();
    }

    function updateQuoteDisplayWithRolling() {
        const quoteCards = container.querySelectorAll('.quote-card');

        quoteCards.forEach((card, index) => {
            // Add rolling out animation
            card.classList.add('rolling-out');

            setTimeout(() => {
                // Update content and color during the middle of animation
                const quote = quotes[(currentQuoteIndex + index) % quotes.length];
                const color = colors[(currentQuoteIndex + index) % colors.length];

                card.style.background = color;
                card.innerHTML = `
                    <i class="${quote.icon}"></i>
                    <p>"${quote.text}"</p>
                    <span>- ${quote.author}</span>
                `;

                // Remove rolling out and add rolling in
                card.classList.remove('rolling-out');
                card.classList.add('rolling-in');

                setTimeout(() => {
                    card.classList.remove('rolling-in');
                    if (index === quoteCards.length - 1) {
                        isAnimating = false;
                    }
                }, 600);

            }, 300);
        });
    }

    function updateQuoteDisplay() {
        const quoteCards = container.querySelectorAll('.quote-card');
        quoteCards.forEach((card, index) => {
            const quote = quotes[(currentQuoteIndex + index) % quotes.length];
            const color = colors[(currentQuoteIndex + index) % colors.length];

            card.style.background = color;
            card.innerHTML = `
                <i class="${quote.icon}"></i>
                <p>"${quote.text}"</p>
                <span>- ${quote.author}</span>
            `;
        });
    }

    // Initial display
    updateQuoteDisplay();

    // Auto-rotate quotes with rolling effect
    setInterval(() => {
        if (!isAnimating) {
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            updateQuoteDisplayWithRolling();
        }
    }, 12000);
}

// Gemini API Configuration
const GEMINI_API_KEY = 'AIzaSyAOu3n2b83ZBWStPJPBADWPjK4fJkzbVys'; // Your Gemini API key
// Note: We'll use multiple endpoints in the callGeminiAPI function instead of a single URL

// Chatbot functionality
let chatHistory = [];

// Function to test available models
async function testAvailableModels() {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${GEMINI_API_KEY}`);
        const data = await response.json();
        console.log('Available models:', data);

        // Display available models in the chat
        if (data.models && data.models.length > 0) {
            let modelsList = "📋 Available models with your API key:\n\n";
            data.models.forEach(model => {
                if (model.supportedGenerationMethods && model.supportedGenerationMethods.includes('generateContent')) {
                    modelsList += `✅ ${model.name}\n`;
                } else {
                    modelsList += `❌ ${model.name} (no generateContent support)\n`;
                }
            });

            // Add this info to the chat
            setTimeout(() => {
                addMessageToChat(modelsList, 'ai');
            }, 1000);
        }

        return data;
    } catch (error) {
        console.error('Error fetching models:', error);
        setTimeout(() => {
            addMessageToChat(`❌ Error fetching available models: ${error.message}`, 'ai');
        }, 1000);
    }
}

async function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();

    if (!message) return;

    // Check if we're running on file:// protocol
    if (window.location.protocol === 'file:') {
        addMessageToChat(message, 'user');
        addMessageToChat('⚠️ The AI chatbot requires an HTTP server to work due to CORS restrictions. Please either:\n\n1. Use a local server (like Live Server extension in VS Code)\n2. Deploy to a web hosting service\n3. Use Python: python -m http.server 8000\n\nFor now, here\'s a demo response: "Hello! I\'m your AI study assistant. I can help you with BITSAT preparation, explain concepts, solve problems, and provide study tips. What would you like to learn about?"', 'ai');
        return;
    }

    // Disable input and button
    chatInput.disabled = true;
    document.getElementById('sendButton').disabled = true;

    // Add user message to chat
    addMessageToChat(message, 'user');

    // Clear input
    chatInput.value = '';

    // Show typing indicator
    showTypingIndicator();

    try {
        // Send to Gemini API
        const response = await callGeminiAPI(message);

        // Remove typing indicator
        removeTypingIndicator();

        // Add AI response to chat
        addMessageToChat(response, 'ai');

    } catch (error) {
        console.error('Error calling Gemini API:', error);

        // Remove typing indicator
        removeTypingIndicator();

        // Add detailed error message based on the error
        let errorMessage = 'Sorry, I encountered an error. Please try again later.';

        if (error.message.includes('403')) {
            errorMessage = '🔑 API key error (403 Forbidden). Please check your Gemini API key permissions.';
        } else if (error.message.includes('401')) {
            errorMessage = '🔑 API key error (401 Unauthorized). Please verify your Gemini API key is correct.';
        } else if (error.message.includes('429')) {
            errorMessage = '⏰ Rate limit exceeded. Please wait a moment before trying again.';
        } else if (error.message.includes('400')) {
            errorMessage = '❌ Bad request. There might be an issue with the message format.';
        } else if (error.message.includes('CORS')) {
            errorMessage = '🌐 CORS error. Please serve this page over HTTP/HTTPS instead of file://.';
        } else if (error.message.includes('Failed to fetch')) {
            errorMessage = '🌐 Network error. Please check your internet connection and try again.';
        }

        // Add the full error details for debugging
        errorMessage += `\n\nDebug info: ${error.message}`;

        addMessageToChat(errorMessage, 'ai');
    }

    // Re-enable input and button
    chatInput.disabled = false;
    document.getElementById('sendButton').disabled = false;
    chatInput.focus();
}

async function callGeminiAPI(message) {
    // Add context for educational assistance
    const contextualMessage = `You are an AI study assistant helping students prepare for BITSAT (Birla Institute of Technology and Science Admission Test). Please provide helpful, accurate, and educational responses. Focus on clear explanations of concepts, step-by-step problem solving, study tips and strategies, and motivational support.

Student question: ${message}`;

    const requestBody = {
        contents: [{
            parts: [{
                text: contextualMessage
            }]
        }]
    };

    // Direct API calls (will work when deployed to a server or with proper CORS setup)
    const modelEndpoints = [
        'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent',
        'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-pro:generateContent',
        'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent'
    ];

    for (let i = 0; i < modelEndpoints.length; i++) {
        const endpoint = modelEndpoints[i];
        console.log(`Trying endpoint ${i + 1}/${modelEndpoints.length}:`, endpoint);

        try {
            const response = await fetch(`${endpoint}?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                mode: 'cors',
                body: JSON.stringify(requestBody)
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                const data = await response.json();
                console.log('API Response:', data);

                if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
                    console.log('Success with endpoint:', endpoint);
                    return data.candidates[0].content.parts[0].text;
                }
            } else {
                const errorText = await response.text();
                console.error(`Endpoint ${i + 1} failed:`, errorText);

                // If this is the last endpoint, throw the error
                if (i === modelEndpoints.length - 1) {
                    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
                }
                // Otherwise, continue to next endpoint
                continue;
            }
        } catch (error) {
            console.error(`Error with endpoint ${i + 1}:`, error);

            // If this is the last endpoint, provide a fallback response
            if (i === modelEndpoints.length - 1) {
                // Check if it's a CORS error
                if (error.message.includes('CORS') || error.message.includes('Failed to fetch') || error.message.includes('ERR_FAILED')) {
                    return getFallbackResponse(message);
                }
                throw error;
            }
            // Otherwise, continue to next endpoint
            continue;
        }
    }

    throw new Error('All model endpoints failed');
}

function getFallbackResponse(message) {
    // Provide helpful responses based on common BITSAT topics
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('physics') || lowerMessage.includes('formula')) {
        return `**🔬 Physics for BITSAT**

**Important Physics Topics:**
• **Mechanics**: Motion, Force, Energy, Momentum
• **Thermodynamics**: Heat, Temperature, Laws of Thermodynamics
• **Waves & Optics**: Sound, Light, Interference, Diffraction
• **Electricity & Magnetism**: Current, Voltage, Magnetic Fields
• **Modern Physics**: Atomic Structure, Radioactivity

**Key Formulas:**
• Force: F = ma
• Energy: E = mc²
• Power: P = VI
• Wave Speed: v = fλ

*Note: AI is temporarily unavailable due to CORS restrictions. For full AI assistance, please deploy this app to a web server.*`;
    }

    if (lowerMessage.includes('chemistry') || lowerMessage.includes('chemical')) {
        return `**🧪 Chemistry for BITSAT**

**Important Chemistry Topics:**
• **Organic Chemistry**: Hydrocarbons, Functional Groups, Reactions
• **Inorganic Chemistry**: Periodic Table, Chemical Bonding, Acids & Bases
• **Physical Chemistry**: Thermodynamics, Kinetics, Equilibrium

**Key Concepts:**
• Atomic Structure and Periodic Properties
• Chemical Bonding and Molecular Structure
• States of Matter and Solutions
• Chemical Thermodynamics and Kinetics

*Note: AI is temporarily unavailable due to CORS restrictions. For full AI assistance, please deploy this app to a web server.*`;
    }

    if (lowerMessage.includes('math') || lowerMessage.includes('calculus') || lowerMessage.includes('algebra')) {
        return `**📐 Mathematics for BITSAT**

**Important Math Topics:**
• **Algebra**: Quadratic Equations, Sequences, Series
• **Trigonometry**: Identities, Equations, Inverse Functions
• **Calculus**: Limits, Derivatives, Integrals
• **Coordinate Geometry**: Lines, Circles, Parabolas
• **Probability & Statistics**: Permutations, Combinations

**Key Formulas:**
• Quadratic Formula: x = (-b ± √(b²-4ac))/2a
• Derivative of xⁿ: nxⁿ⁻¹
• Area under curve: ∫f(x)dx

*Note: AI is temporarily unavailable due to CORS restrictions. For full AI assistance, please deploy this app to a web server.*`;
    }

    if (lowerMessage.includes('study') || lowerMessage.includes('tip') || lowerMessage.includes('prepare')) {
        return `**📚 BITSAT Study Tips**

**Effective Study Strategies:**
• **Time Management**: Create a study schedule and stick to it
• **Practice Tests**: Take regular mock tests to assess progress
• **Concept Clarity**: Focus on understanding concepts, not just memorizing
• **Revision**: Regular revision is key to retention
• **Health**: Maintain good sleep and nutrition habits

**Exam Strategy:**
• **Speed & Accuracy**: Practice solving questions quickly and accurately
• **Negative Marking**: Be careful about guessing - there's negative marking
• **Time Allocation**: Spend appropriate time on each section

*Note: AI is temporarily unavailable due to CORS restrictions. For full AI assistance, please deploy this app to a web server.*`;
    }

    // Default response
    return `**🤖 AI Study Assistant**

I'm here to help with your BITSAT preparation! I can assist with:

• **Physics**: Mechanics, Thermodynamics, Optics, Modern Physics
• **Chemistry**: Organic, Inorganic, Physical Chemistry
• **Mathematics**: Algebra, Calculus, Trigonometry, Geometry
• **Study Tips**: Effective preparation strategies
• **Practice Questions**: Topic-wise questions and solutions

**Common BITSAT Topics:**
• Important formulas and concepts
• Problem-solving techniques
• Time management strategies
• Exam preparation tips

*Note: AI is temporarily unavailable due to CORS restrictions. For full AI assistance, please deploy this app to a web server or use a CORS proxy.*

**To fix this issue:**
1. Deploy to a web hosting service (Netlify, Vercel, GitHub Pages)
2. Use a local server with CORS enabled
3. Access via HTTPS instead of HTTP`;
}

function addMessageToChat(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');

    // Format the message to support markdown-like formatting
    const formattedMessage = formatMessage(message);

    if (sender === 'user') {
        messageDiv.className = 'user-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="message-content">
                <div class="message-text">${formattedMessage}</div>
            </div>
        `;
    } else {
        messageDiv.className = 'ai-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="message-text">${formattedMessage}</div>
            </div>
        `;
    }

    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Add to chat history
    chatHistory.push({ sender, message, timestamp: new Date() });
}

function formatMessage(message) {
    console.log('Original message:', message);

    // Convert markdown-like formatting to HTML
    let formatted = message
        // Bold text: **text** or __text__
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/__(.*?)__/g, '<strong>$1</strong>')
        // Italic text: *text* or _text_ (but not if already in bold)
        .replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '<em>$1</em>')
        .replace(/(?<!_)_([^_]+?)_(?!_)/g, '<em>$1</em>')
        // Code: `text`
        .replace(/`(.*?)`/g, '<code>$1</code>')
        // Headers: # text
        .replace(/^### (.*$)/gim, '<strong>$1</strong>')
        .replace(/^## (.*$)/gim, '<strong>$1</strong>')
        .replace(/^# (.*$)/gim, '<strong>$1</strong>')
        // Line breaks
        .replace(/\n\n/g, '<br><br>')
        .replace(/\n/g, '<br>')
        // Lists (simple bullet points)
        .replace(/^- (.*$)/gim, '• $1')
        .replace(/^\* (.*$)/gim, '• $1')
        // Numbers in lists
        .replace(/^(\d+)\. (.*$)/gim, '$1. $2');

    // Also add some manual bold formatting for common patterns
    formatted = formatted
        .replace(/\b(Important|Note|Key|Formula|Tip|Remember|Warning|Example)\b/gi, '<strong>$1</strong>')
        .replace(/\b(BITSAT|JEE|Physics|Chemistry|Mathematics|Biology)\b/g, '<strong>$1</strong>');

    console.log('Formatted message:', formatted);
    return formatted;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="typing-dots">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;

    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function sendSuggestion(suggestion) {
    document.getElementById('chatInput').value = suggestion;
    sendMessage();
}

async function checkAvailableModels() {
    addMessageToChat('Checking available models...', 'user');

    try {
        console.log('Calling ListModels API...');
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${GEMINI_API_KEY}`);

        console.log('ListModels response status:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('ListModels error:', errorText);
            addMessageToChat(`❌ Error fetching models (${response.status}): ${errorText}`, 'ai');
            return;
        }

        const data = await response.json();
        console.log('ListModels response data:', data);

        if (data.models && data.models.length > 0) {
            let modelsList = "📋 Available models with your API key:\n\n";
            let generateContentModels = [];

            data.models.forEach(model => {
                if (model.supportedGenerationMethods && model.supportedGenerationMethods.includes('generateContent')) {
                    generateContentModels.push(model.name);
                    modelsList += `✅ ${model.name}\n`;
                    if (model.displayName) modelsList += `   Display Name: ${model.displayName}\n`;
                    modelsList += `   Methods: ${model.supportedGenerationMethods.join(', ')}\n\n`;
                } else {
                    modelsList += `❌ ${model.name} (no generateContent support)\n`;
                    if (model.supportedGenerationMethods) {
                        modelsList += `   Methods: ${model.supportedGenerationMethods.join(', ')}\n`;
                    }
                    modelsList += `\n`;
                }
            });

            modelsList += `\n🎯 Models that support generateContent: ${generateContentModels.length}\n`;
            generateContentModels.forEach(model => {
                modelsList += `• ${model}\n`;
            });

            addMessageToChat(modelsList, 'ai');
        } else {
            addMessageToChat('❌ No models found in response.', 'ai');
        }
    } catch (error) {
        console.error('Error in checkAvailableModels:', error);
        addMessageToChat(`❌ Error fetching models: ${error.message}`, 'ai');
    }
}

// Handle Enter key press in chat input
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }

    // Add debug info to console
    console.log('Chatbot initialized');
    console.log('API Key set:', GEMINI_API_KEY ? 'Yes' : 'No');
    console.log('Protocol:', window.location.protocol);

    // Removed automatic model testing
});

// On load, check for user info
window.onload = function() {
    const userName = localStorage.getItem('userName');
    const examDate = localStorage.getItem('examDate');

    // Initialize effects
    initHyperspeedBackground();
    initTypingEffect();

    // Always show modal for new users or if info is missing
    if (!userName || !examDate) {
        setTimeout(() => {
            showUserModal();
        }, 500); // Small delay for better UX
    } else {
        updateExamCountdown();
        showMainMenu();
    }

    setInterval(updateExamCountdown, 60000);
    initMotivationalQuotes();
};

// Initialize motivational quotes rotation
function initMotivationalQuotes() {
    const leftQuotes = [
        {
            icon: "fas fa-quote-left",
            text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            author: "Winston Churchill"
        },
        {
            icon: "fas fa-lightbulb",
            text: "The expert in anything was once a beginner.",
            author: "Helen Hayes"
        },
        {
            icon: "fas fa-rocket",
            text: "Don't watch the clock; do what it does. Keep going.",
            author: "Sam Levenson"
        },
        {
            icon: "fas fa-mountain",
            text: "It is during our darkest moments that we must focus to see the light.",
            author: "Aristotle"
        },
        {
            icon: "fas fa-fire",
            text: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
        }
    ];

    const rightQuotes = [
        {
            icon: "fas fa-star",
            text: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },
        {
            icon: "fas fa-trophy",
            text: "Success is the sum of small efforts repeated day in and day out.",
            author: "Robert Collier"
        },
        {
            icon: "fas fa-brain",
            text: "The beautiful thing about learning is that no one can take it away from you.",
            author: "B.B. King"
        },
        {
            icon: "fas fa-gem",
            text: "Education is the most powerful weapon which you can use to change the world.",
            author: "Nelson Mandela"
        },
        {
            icon: "fas fa-crown",
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        }
    ];

    // Rotate quotes every 10 seconds
    let leftIndex = 0;
    let rightIndex = 0;

    setInterval(() => {
        rotateQuotes('left-quotes', leftQuotes, leftIndex);
        leftIndex = (leftIndex + 1) % leftQuotes.length;
    }, 10000);

    setInterval(() => {
        rotateQuotes('right-quotes', rightQuotes, rightIndex);
        rightIndex = (rightIndex + 1) % rightQuotes.length;
    }, 12000); // Slightly different timing for variety
}

function rotateQuotes(containerClass, quotes, index) {
    const container = document.querySelector(`.${containerClass}`);
    if (!container) return;

    const quoteCards = container.querySelectorAll('.quote-card');
    if (quoteCards.length === 0) return;

    const randomCard = quoteCards[Math.floor(Math.random() * quoteCards.length)];
    const quote = quotes[index];

    // Fade out
    randomCard.style.opacity = '0';
    randomCard.style.transform = 'translateY(-10px)';

    setTimeout(() => {
        // Update content
        randomCard.innerHTML = `
            <i class="${quote.icon}"></i>
            <p>"${quote.text}"</p>
            <span>- ${quote.author}</span>
        `;

        // Fade in
        randomCard.style.opacity = '1';
        randomCard.style.transform = 'translateY(0)';
    }, 300);
}



// Scientific Calculator Functions
let calcDisplay = '';

function appendToCalc(value) {
    const display = document.getElementById('calcDisplay');
    if (display) {
        calcDisplay += value;
        display.value = calcDisplay;
    }
}

function clearCalc() {
    const display = document.getElementById('calcDisplay');
    if (display) {
        calcDisplay = '';
        display.value = '';
    }
}

function deleteLast() {
    const display = document.getElementById('calcDisplay');
    if (display && calcDisplay.length > 0) {
        calcDisplay = calcDisplay.slice(0, -1);
        display.value = calcDisplay;
    }
}

function calculateResult() {
    const display = document.getElementById('calcDisplay');
    if (!display || !calcDisplay) return;

    try {
        // Replace mathematical functions for evaluation
        let expression = calcDisplay
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(')
            .replace(/log\(/g, 'Math.log10(')
            .replace(/ln\(/g, 'Math.log(')
            .replace(/\^/g, '**')
            .replace(/π/g, 'Math.PI')
            .replace(/e/g, 'Math.E');

        // Evaluate the expression
        const result = eval(expression);

        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid calculation');
        }

        calcDisplay = result.toString();
        display.value = calcDisplay;

        // Add visual feedback
        display.style.background = '#d4edda';
        setTimeout(() => {
            display.style.background = '';
        }, 300);

    } catch (error) {
        display.value = 'Error';
        calcDisplay = '';

        // Add error feedback
        display.style.background = '#f8d7da';
        setTimeout(() => {
            display.style.background = '';
            display.value = '';
        }, 1500);
    }
}



// Cloud Storage Configuration using JSONBin.io with CORS proxy
const CLOUD_STORAGE_CONFIG = {
    // Using JSONBin.io with CORS proxy for real cloud storage
    binId: '676b8e2fad19ca34f8d4f8a2',
    apiUrl: 'https://api.jsonbin.io/v3/b',
    accessKey: '$2a$10$8vQI5rGZYvQI5rGZYvQI5rGZYvQI5rGZYvQI5rGZYvQI5rGZYvQI5r',
    corsProxy: 'https://cors-anywhere.herokuapp.com/'
};

// File Upload Management (Cloud + Local Storage)
let uploadedFiles = [];
let currentFileToUpload = null;
let isLoadingFiles = false;

// Initialize file storage from cloud and local storage
async function initFileStorage() {
    try {
        isLoadingFiles = true;
        updateFilesList(); // Show loading state

        // Try to load from cloud first
        await loadFilesFromCloud();

        // Also load from localStorage as backup
        const stored = localStorage.getItem('uploadedFiles');
        if (stored) {
            const localFiles = JSON.parse(stored);
            // Merge with cloud files (avoid duplicates)
            localFiles.forEach(localFile => {
                if (!uploadedFiles.find(cloudFile => cloudFile.id === localFile.id)) {
                    uploadedFiles.push(localFile);
                }
            });
        }

        isLoadingFiles = false;
        updateFilesList();

    } catch (error) {
        console.error('Error loading files:', error);
        isLoadingFiles = false;

        // Fallback to localStorage only
        try {
            const stored = localStorage.getItem('uploadedFiles');
            if (stored) {
                uploadedFiles = JSON.parse(stored);
            } else {
                uploadedFiles = [];
            }
        } catch (localError) {
            console.error('Error loading local files:', localError);
            uploadedFiles = [];
        }

        updateFilesList();
    }
}

// Load files from real cloud storage
async function loadFilesFromCloud() {
    try {
        console.log('Loading files from cloud storage...');

        const response = await fetch(`${CLOUD_STORAGE_CONFIG.corsProxy}${CLOUD_STORAGE_CONFIG.apiUrl}/${CLOUD_STORAGE_CONFIG.binId}/latest`, {
            method: 'GET',
            headers: {
                'X-Master-Key': CLOUD_STORAGE_CONFIG.accessKey,
                'X-Requested-With': 'XMLHttpRequest'
            }
        });

        if (response.ok) {
            const data = await response.json();
            if (data.record && data.record.files && Array.isArray(data.record.files)) {
                uploadedFiles = data.record.files;
                console.log('Loaded files from cloud:', uploadedFiles.length);
            }
        } else {
            console.log('No cloud files found or error loading:', response.status);
        }
    } catch (error) {
        console.error('Error loading from cloud:', error);
        // Fallback to localStorage
        const stored = localStorage.getItem('uploadedFiles');
        if (stored) {
            uploadedFiles = JSON.parse(stored);
        }
    }
}

// Save files to real cloud storage
async function saveFilesToCloud() {
    try {
        console.log('Saving files to cloud storage...');

        const response = await fetch(`${CLOUD_STORAGE_CONFIG.corsProxy}${CLOUD_STORAGE_CONFIG.apiUrl}/${CLOUD_STORAGE_CONFIG.binId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': CLOUD_STORAGE_CONFIG.accessKey,
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify({
                files: uploadedFiles,
                lastUpdated: new Date().toISOString()
            })
        });

        if (response.ok) {
            console.log('Files saved to cloud successfully');
            // Also save to localStorage as backup
            localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));
            return true;
        } else {
            console.error('Error saving to cloud:', response.status);
            // Save to localStorage as fallback
            localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));
            return false;
        }
    } catch (error) {
        console.error('Error saving to cloud:', error);
        // Save to localStorage as fallback
        localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));
        return false;
    }
}

function showUploadModal() {
    const fileInput = document.getElementById('pdfUpload');
    if (!fileInput.files[0]) {
        alert('Please select a PDF file first!');
        return;
    }

    const file = fileInput.files[0];
    if (file.type !== 'application/pdf') {
        alert('Please select a valid PDF file!');
        return;
    }

    currentFileToUpload = file;
    document.getElementById('fileUploadModal').style.display = 'flex';
    document.getElementById('uploaderName').value = localStorage.getItem('userName') || '';
    document.getElementById('fileDescription').value = '';
}

function closeFileUploadModal() {
    document.getElementById('fileUploadModal').style.display = 'none';
    currentFileToUpload = null;
    document.getElementById('pdfUpload').value = '';
}

async function confirmFileUpload() {
    const uploaderName = document.getElementById('uploaderName').value.trim();
    const fileDescription = document.getElementById('fileDescription').value.trim();

    if (!uploaderName) {
        alert('Please enter your name!');
        return;
    }

    if (!currentFileToUpload) {
        alert('No file selected!');
        return;
    }

    // Check file size (limit to 5MB for better performance)
    if (currentFileToUpload.size > 5 * 1024 * 1024) {
        alert('File is too large. Please select a file smaller than 5MB.');
        return;
    }

    // Show uploading feedback
    const uploadBtn = document.querySelector('.upload-actions .btn');
    const originalText = uploadBtn.innerHTML;
    uploadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Uploading...';
    uploadBtn.disabled = true;

    // Convert file to base64 for storage
    const reader = new FileReader();
    reader.onload = async function(e) {
        const fileData = {
            id: Date.now() + Math.random(), // Ensure unique ID
            name: currentFileToUpload.name,
            uploader: uploaderName,
            description: fileDescription || 'No description provided',
            uploadDate: new Date().toLocaleDateString(),
            uploadTime: new Date().toLocaleTimeString(),
            fileData: e.target.result, // Base64 data
            size: currentFileToUpload.size,
            type: currentFileToUpload.type,
            isPublic: true // Mark as publicly accessible
        };

        try {
            // Add to local array
            uploadedFiles.push(fileData);

            // Save to cloud storage
            const cloudSaved = await saveFilesToCloud();

            // Update display
            updateFilesList();
            loadPDF(fileData);
            closeFileUploadModal();

            if (cloudSaved) {
                showFeedback(`File "${fileData.name}" uploaded successfully by ${uploaderName} and shared with everyone!`, 'success');
            } else {
                showFeedback(`File "${fileData.name}" uploaded locally by ${uploaderName}. Cloud sync may be delayed.`, 'warning');
            }

        } catch (error) {
            console.error('Error saving file:', error);
            uploadedFiles.pop(); // Remove the file we just added

            if (error.name === 'QuotaExceededError') {
                alert('File is too large to store. Please try a smaller file.');
            } else {
                alert('Error saving file. Please try again.');
            }
        } finally {
            // Reset upload button
            uploadBtn.innerHTML = originalText;
            uploadBtn.disabled = false;
        }
    };

    reader.onerror = function() {
        alert('Error reading file. Please try again.');
        uploadBtn.innerHTML = originalText;
        uploadBtn.disabled = false;
    };

    reader.readAsDataURL(currentFileToUpload);
}

function updateFilesList() {
    const filesList = document.getElementById('filesList');

    if (isLoadingFiles) {
        filesList.innerHTML = `
            <div class="loading-files">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Loading shared study materials...</p>
            </div>
        `;
        return;
    }

    if (uploadedFiles.length === 0) {
        filesList.innerHTML = `
            <div class="no-files">
                <i class="fas fa-cloud-upload-alt" style="font-size: 2rem; margin-bottom: 10px; opacity: 0.5;"></i>
                <p>No study materials uploaded yet.</p>
                <p>Be the first to share your notes with everyone!</p>
            </div>
        `;
        return;
    }

    filesList.innerHTML = uploadedFiles.map((file, index) => `
        <div class="file-item" onclick="viewFileInWebsite(${index})">
            <div class="file-info">
                <div class="file-name">📄 ${file.name}</div>
                <div class="file-uploader">
                    <i class="fas fa-user"></i> ${file.uploader}
                    <i class="fas fa-calendar"></i> ${file.uploadDate}
                    <i class="fas fa-clock"></i> ${file.uploadTime}
                    ${file.isPublic ? '<span class="public-badge"><i class="fas fa-globe"></i> Shared</span>' : ''}
                </div>
                <div class="file-description">${file.description}</div>
                <div class="file-size">
                    <i class="fas fa-file"></i> ${formatFileSize(file.size)}
                </div>
            </div>
            <div class="file-actions">
                <button onclick="event.stopPropagation(); viewFileInWebsite(${index})" title="View in Website" class="btn-view">
                    <i class="fas fa-eye"></i> View
                </button>
                <button onclick="event.stopPropagation(); openFileInNewTab(${index})" title="Open in New Tab" class="btn-external">
                    <i class="fas fa-external-link-alt"></i> New Tab
                </button>
                <button onclick="event.stopPropagation(); downloadFile(${index})" title="Download" class="btn-download">
                    <i class="fas fa-download"></i> Download
                </button>
                <button onclick="event.stopPropagation(); deleteFile('${file.id}')" title="Delete" class="btn-delete">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');
}

// Function to view files directly in the website
function viewFileInWebsite(index) {
    if (index >= 0 && index < uploadedFiles.length) {
        const file = uploadedFiles[index];

        // First, make sure we're in the PDF section
        showPDFSection();

        // Load the PDF in the website viewer
        loadPDF(file);

        // Show success feedback
        showFeedback(`Now viewing: ${file.name}`, 'success');

        // Wait a bit for the section to load, then scroll to the PDF viewer
        setTimeout(() => {
            const pdfViewer = document.getElementById('pdfViewer');
            if (pdfViewer) {
                pdfViewer.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 300);
    }
}

// Function to show PDF section specifically
function showPDFSection() {
    const practiceSection = document.getElementById('practiceSection');
    const graphingSection = document.getElementById('graphingSection');
    const calculatorSection = document.getElementById('calculatorSection');
    const pdfSection = document.getElementById('pdfSection');
    const chatbotSection = document.getElementById('chatbotSection');
    const quizContainer = document.querySelector('.quiz-container');

    // Hide all sections
    practiceSection.style.display = 'none';
    graphingSection.style.display = 'none';
    calculatorSection.style.display = 'none';
    chatbotSection.style.display = 'none';

    // Show PDF section
    pdfSection.style.display = 'block';
    quizContainer.classList.add('pdf-mode');
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function loadPDFByIndex(index) {
    if (index >= 0 && index < uploadedFiles.length) {
        loadPDF(uploadedFiles[index]);
    }
}

function downloadFile(index) {
    if (index >= 0 && index < uploadedFiles.length) {
        const file = uploadedFiles[index];
        const link = document.createElement('a');
        link.href = file.fileData;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showFeedback(`Downloading ${file.name}...`, 'success');
    }
}

function openFileInNewTab(index) {
    if (index >= 0 && index < uploadedFiles.length) {
        const file = uploadedFiles[index];

        // Create a new window/tab with the PDF
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            newWindow.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${file.name} - BITSAT Study Material</title>
                    <style>
                        body {
                            margin: 0;
                            padding: 0;
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            min-height: 100vh;
                        }
                        .header {
                            background: rgba(255, 255, 255, 0.95);
                            padding: 20px;
                            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                            backdrop-filter: blur(10px);
                        }
                        .file-info {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                            gap: 15px;
                            margin-bottom: 15px;
                        }
                        .info-item {
                            display: flex;
                            align-items: center;
                            gap: 8px;
                            color: #333;
                        }
                        .info-item i {
                            color: #667eea;
                            width: 16px;
                        }
                        .file-title {
                            color: #333;
                            margin: 0 0 15px 0;
                            font-size: 1.5rem;
                            font-weight: bold;
                        }
                        .description {
                            background: rgba(102, 126, 234, 0.1);
                            padding: 10px 15px;
                            border-radius: 8px;
                            color: #333;
                            border-left: 4px solid #667eea;
                        }
                        .pdf-container {
                            height: calc(100vh - 200px);
                            margin: 20px;
                            border-radius: 15px;
                            overflow: hidden;
                            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                        }
                        iframe {
                            width: 100%;
                            height: 100%;
                            border: none;
                        }
                        .actions {
                            display: flex;
                            gap: 10px;
                            margin-top: 15px;
                        }
                        .btn {
                            background: linear-gradient(135deg, #667eea, #764ba2);
                            color: white;
                            border: none;
                            padding: 8px 16px;
                            border-radius: 20px;
                            cursor: pointer;
                            font-size: 14px;
                            display: flex;
                            align-items: center;
                            gap: 5px;
                            transition: all 0.3s ease;
                        }
                        .btn:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
                        }
                        .btn-download {
                            background: linear-gradient(135deg, #4ecdc4, #44a08d);
                        }
                    </style>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
                </head>
                <body>
                    <div class="header">
                        <h1 class="file-title">📄 ${file.name}</h1>
                        <div class="file-info">
                            <div class="info-item">
                                <i class="fas fa-user"></i>
                                <span><strong>Uploaded by:</strong> ${file.uploader}</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-calendar"></i>
                                <span><strong>Date:</strong> ${file.uploadDate}</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-clock"></i>
                                <span><strong>Time:</strong> ${file.uploadTime}</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-file"></i>
                                <span><strong>Size:</strong> ${formatFileSize(file.size)}</span>
                            </div>
                        </div>
                        <div class="description">
                            <strong>Description:</strong> ${file.description}
                        </div>
                        <div class="actions">
                            <button class="btn btn-download" onclick="downloadCurrentFile()">
                                <i class="fas fa-download"></i> Download
                            </button>
                            <button class="btn" onclick="window.close()">
                                <i class="fas fa-times"></i> Close
                            </button>
                        </div>
                    </div>
                    <div class="pdf-container">
                        <iframe src="${file.fileData}" title="${file.name}">
                            <p>Your browser does not support PDF viewing.
                            <a href="${file.fileData}" download="${file.name}">Download the PDF</a> instead.</p>
                        </iframe>
                    </div>

                    <script>
                        function downloadCurrentFile() {
                            const link = document.createElement('a');
                            link.href = '${file.fileData}';
                            link.download = '${file.name}';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }

                        function formatFileSize(bytes) {
                            if (bytes === 0) return '0 Bytes';
                            const k = 1024;
                            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
                            const i = Math.floor(Math.log(bytes) / Math.log(k));
                            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
                        }
                    </script>
                </body>
                </html>
            `);
            newWindow.document.close();
            showFeedback(`Opening ${file.name} in new tab...`, 'success');
        } else {
            // Fallback if popup is blocked
            const blob = dataURLtoBlob(file.fileData);
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
            showFeedback(`Opening ${file.name} in new tab...`, 'success');
        }
    }
}

// Helper function to convert data URL to blob
function dataURLtoBlob(dataurl) {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while(n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
}

function loadPDF(fileData) {
    const viewer = document.getElementById('pdfViewer');

    if (typeof fileData === 'object' && fileData.fileData) {
        viewer.innerHTML = `
            <div style="background: rgba(255, 255, 255, 0.95); border-radius: 15px; padding: 20px; margin-bottom: 15px; backdrop-filter: blur(10px); box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                <h3 style="color: #333; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                    📄 ${fileData.name}
                    <span style="font-size: 0.8em; background: #667eea; color: white; padding: 4px 8px; border-radius: 12px;">${formatFileSize(fileData.size)}</span>
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
                    <p style="color: #666; margin: 0;"><strong>📤 Uploaded by:</strong> ${fileData.uploader}</p>
                    <p style="color: #666; margin: 0;"><strong>📅 Date:</strong> ${fileData.uploadDate}</p>
                    <p style="color: #666; margin: 0;"><strong>⏰ Time:</strong> ${fileData.uploadTime}</p>
                    <p style="color: #666; margin: 0;"><strong>📝 Type:</strong> ${fileData.type}</p>
                </div>
                <p style="color: #666; margin: 0; padding: 10px; background: rgba(102, 126, 234, 0.1); border-radius: 8px;"><strong>Description:</strong> ${fileData.description}</p>
            </div>
            <div style="margin-top: 15px; display: flex; gap: 10px; flex-wrap: wrap;">
                <button onclick="openFileInNewTab(${uploadedFiles.findIndex(f => f.id === fileData.id)})" class="btn" style="background: #28a745;">
                    <i class="fas fa-external-link-alt"></i> Open in New Tab
                </button>
                <button onclick="downloadFile(${uploadedFiles.findIndex(f => f.id === fileData.id)})" class="btn" style="background: #17a2b8;">
                    <i class="fas fa-download"></i> Download PDF
                </button>
            </div>
            <div style="border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.2); margin-top: 20px;">
                <iframe
                    src="${fileData.fileData}#toolbar=1&navpanes=1&scrollbar=1"
                    width="100%"
                    height="700px"
                    frameborder="0"
                    style="border-radius: 15px; display: block;"
                    title="PDF Viewer for ${fileData.name}"
                >
                    <div style="text-align: center; padding: 40px; background: #f8f9fa; border-radius: 10px;">
                        <p style="color: #666; margin-bottom: 15px;">Your browser does not support PDF viewing.</p>
                        <button onclick="openFileInNewTab(${uploadedFiles.findIndex(f => f.id === fileData.id)})" class="btn">
                            <i class="fas fa-external-link-alt"></i> Open in New Tab
                        </button>
                        <button onclick="downloadFile(${uploadedFiles.findIndex(f => f.id === fileData.id)})" class="btn">
                            <i class="fas fa-download"></i> Download PDF
                        </button>
                    </div>
                </iframe>
            </div>
        `;
    } else {
        viewer.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #666;">
                <i class="fas fa-file-pdf" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                <p>Upload a PDF file to view study materials here.</p>
            </div>
        `;
    }
}

async function deleteFile(fileId) {
    const file = uploadedFiles.find(f => f.id == fileId);
    if (!file) return;

    if (confirm(`Are you sure you want to delete "${file.name}"? This will remove it for everyone.`)) {
        try {
            // Remove from array
            uploadedFiles = uploadedFiles.filter(f => f.id != fileId);

            // Update cloud storage
            const cloudSaved = await saveFilesToCloud();

            // Update display
            updateFilesList();

            // Clear viewer if deleted file was being viewed
            const viewer = document.getElementById('pdfViewer');
            viewer.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #666;">
                    <i class="fas fa-file-pdf" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                    <p>Select a study material to view it here.</p>
                </div>
            `;

            if (cloudSaved) {
                showFeedback('File deleted successfully and synced with cloud!', 'success');
            } else {
                showFeedback('File deleted locally. Cloud sync may be delayed.', 'warning');
            }

        } catch (error) {
            console.error('Error deleting file:', error);
            showFeedback('Error deleting file. Please try again.', 'error');
        }
    }
}

// Initialize files list on page load
document.addEventListener('DOMContentLoaded', function() {
    initFileStorage();
    updateFilesList();
});



// Add refresh function for files
async function refreshFiles() {
    showFeedback('Refreshing study materials...', 'success');
    await initFileStorage();
}

// Function to activate CORS proxy
function activateCORS() {
    showFeedback('Opening CORS activation page...', 'success');
    window.open('https://cors-anywhere.herokuapp.com/corsdemo', '_blank');
    setTimeout(() => {
        showFeedback('After activating CORS, refresh the files to enable cloud storage!', 'success');
    }, 2000);
}

// Make functions globally available
window.appendToCalc = appendToCalc;
window.clearCalc = clearCalc;
window.deleteLast = deleteLast;
window.calculateResult = calculateResult;
window.loadPDF = loadPDF;
window.showUploadModal = showUploadModal;
window.closeFileUploadModal = closeFileUploadModal;
window.confirmFileUpload = confirmFileUpload;
window.deleteFile = deleteFile;
window.loadPDFByIndex = loadPDFByIndex;
window.downloadFile = downloadFile;
window.openFileInNewTab = openFileInNewTab;
window.viewFileInWebsite = viewFileInWebsite;
window.refreshFiles = refreshFiles;
window.activateCORS = activateCORS;