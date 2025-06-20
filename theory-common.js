// Common JavaScript functions for theory pages

// Show theory tab (content or PDF)
function showTheoryTab(tab) {
    const contentTab = document.getElementById('contentTab');
    const pdfTab = document.getElementById('pdfTab');
    const theoryContent = document.getElementById('theoryContent');
    const theoryPdfViewer = document.getElementById('theoryPdfViewer');

    // Remove active class from all tabs
    contentTab.classList.remove('active');
    pdfTab.classList.remove('active');

    if (tab === 'content') {
        // Show content tab
        contentTab.classList.add('active');
        theoryContent.style.display = 'block';
        theoryPdfViewer.style.display = 'none';
    } else if (tab === 'pdf') {
        // Show PDF tab
        pdfTab.classList.add('active');
        theoryContent.style.display = 'none';
        theoryPdfViewer.style.display = 'block';
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Show content tab by default
    showTheoryTab('content');
    
    // Initialize any animations or effects
    initializeAnimations();
});

// Initialize animations and effects
function initializeAnimations() {
    // Add fade-in animation to theory topics
    const theoryTopics = document.querySelectorAll('.theory-topic');
    theoryTopics.forEach((topic, index) => {
        topic.style.opacity = '0';
        topic.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            topic.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            topic.style.opacity = '1';
            topic.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add hover effects to topic titles
    const topicTitles = document.querySelectorAll('.topic-title');
    topicTitles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.color = '#4fc3f7';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.color = '';
        });
    });
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.className = 'scroll-to-top-btn';
    scrollButton.onclick = scrollToTop;
    document.body.appendChild(scrollButton);
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
});

// Print functionality
function printTheoryContent() {
    window.print();
}

// Search functionality within theory content
function searchTheoryContent(searchTerm) {
    const content = document.getElementById('theoryContent');
    const text = content.textContent || content.innerText;
    
    if (searchTerm && text.toLowerCase().includes(searchTerm.toLowerCase())) {
        // Highlight search term
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        content.innerHTML = content.innerHTML.replace(regex, '<mark>$1</mark>');
        
        // Scroll to first match
        const firstMatch = content.querySelector('mark');
        if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

// Clear search highlights
function clearSearchHighlights() {
    const content = document.getElementById('theoryContent');
    const marks = content.querySelectorAll('mark');
    marks.forEach(mark => {
        mark.outerHTML = mark.innerHTML;
    });
}

// Copy content to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        showNotification('Content copied to clipboard!');
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Bookmark functionality
function bookmarkSection(sectionId) {
    const bookmarks = JSON.parse(localStorage.getItem('theoryBookmarks') || '[]');
    const sectionTitle = document.querySelector(`#${sectionId} .topic-title`).textContent;
    
    if (!bookmarks.find(b => b.id === sectionId)) {
        bookmarks.push({
            id: sectionId,
            title: sectionTitle,
            url: window.location.href,
            timestamp: new Date().toISOString()
        });
        
        localStorage.setItem('theoryBookmarks', JSON.stringify(bookmarks));
        showNotification('Section bookmarked!');
    } else {
        showNotification('Section already bookmarked!');
    }
}

// Load bookmarks
function loadBookmarks() {
    return JSON.parse(localStorage.getItem('theoryBookmarks') || '[]');
}

// Progress tracking
function updateProgress(subject, section) {
    const progress = JSON.parse(localStorage.getItem('theoryProgress') || '{}');
    
    if (!progress[subject]) {
        progress[subject] = {};
    }
    
    progress[subject][section] = {
        completed: true,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('theoryProgress', JSON.stringify(progress));
}

// Get progress
function getProgress(subject) {
    const progress = JSON.parse(localStorage.getItem('theoryProgress') || '{}');
    return progress[subject] || {};
}

// Calculate completion percentage
function calculateCompletionPercentage(subject) {
    const progress = getProgress(subject);
    const totalSections = document.querySelectorAll('.theory-topic').length;
    const completedSections = Object.keys(progress).length;
    
    return totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0;
}

// Add completion tracking to sections
document.addEventListener('DOMContentLoaded', function() {
    const theoryTopics = document.querySelectorAll('.theory-topic');
    theoryTopics.forEach((topic, index) => {
        const sectionId = `section-${index}`;
        topic.id = sectionId;
        
        // Add completion button
        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-section-btn';
        completeBtn.innerHTML = '<i class="fas fa-check"></i> Mark as Complete';
        completeBtn.onclick = () => {
            const subject = document.title.split(' ')[0].toLowerCase();
            updateProgress(subject, sectionId);
            completeBtn.classList.add('completed');
            completeBtn.innerHTML = '<i class="fas fa-check-circle"></i> Completed';
            showNotification('Section marked as complete!');
        };
        
        topic.appendChild(completeBtn);
        
        // Check if already completed
        const subject = document.title.split(' ')[0].toLowerCase();
        const progress = getProgress(subject);
        if (progress[sectionId]) {
            completeBtn.classList.add('completed');
            completeBtn.innerHTML = '<i class="fas fa-check-circle"></i> Completed';
        }
    });
});

// Export functions for use in other files
window.theoryCommon = {
    showTheoryTab,
    searchTheoryContent,
    clearSearchHighlights,
    copyToClipboard,
    bookmarkSection,
    loadBookmarks,
    updateProgress,
    getProgress,
    calculateCompletionPercentage
};
