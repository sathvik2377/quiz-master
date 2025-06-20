# Theory Section File Structure

## Overview
The theory section has been reorganized into separate HTML files for better code organization, maintainability, and performance. Each subject now has its own dedicated page with subject-specific content and functionality.

## File Structure

### Main Theory Page
- **theory.html** - Subject selection page that redirects to individual theory pages
- **theory.js** - Contains navigation function and original theory data (kept for compatibility)

### Individual Subject Pages
1. **theory-maths.html** - Mathematics theory content
2. **theory-physics.html** - Physics theory content  
3. **theory-chemistry.html** - Chemistry theory with organic reactions and quiz
4. **theory-english.html** - English theory content
5. **theory-logical-reasoning.html** - Logical reasoning theory content

### Shared JavaScript Files
- **theory-common.js** - Common functionality shared across all theory pages
- **chemistry-reactions.js** - Chemistry-specific reactions and quiz functionality

### Existing Files (Unchanged)
- **styles.css** - All styling (enhanced with new components)
- **main.js** - Main application functionality

## Features by Subject

### Mathematics (theory-maths.html)
- **Content Areas:**
  - Algebra (Quadratic equations, sequences, series)
  - Trigonometry (Basic ratios, compound angles, multiple angles)
  - Coordinate Geometry (Lines, circles)
  - Calculus (Differentiation, integration)
  - Probability and Statistics
  - Matrices and Determinants

### Physics (theory-physics.html)
- **Content Areas:**
  - Mechanics (Kinematics, laws of motion, work-energy)
  - Thermodynamics (Laws, heat transfer, kinetic theory)
  - Waves and Oscillations (SHM, wave motion, sound)
  - Electricity and Magnetism (Electrostatics, current, magnetism)
  - Optics (Geometric and wave optics)
  - Modern Physics (Quantum, atomic, nuclear)

### Chemistry (theory-chemistry.html)
- **Content Areas:**
  - Atomic Structure
  - Chemical Bonding
  - Thermodynamics
  - Chemical Equilibrium
  - Electrochemistry
  - Organic Chemistry Basics
- **Special Features:**
  - Organic Reactions tab (16 reagents, 26+ named reactions)
  - Organic Quiz tab (30 questions with timer)
  - Navigation system for reaction categories

### English (theory-english.html)
- **Content Areas:**
  - Grammar Fundamentals
  - Sentence Structure
  - Vocabulary Building
  - Reading Comprehension
  - Writing Skills
  - Literary Devices

### Logical Reasoning (theory-logical-reasoning.html)
- **Content Areas:**
  - Verbal Reasoning
  - Non-Verbal Reasoning
  - Logical Deduction
  - Critical Reasoning
  - Problem Solving
  - Strategy and Tips

## Common Features (All Pages)

### Navigation
- **Tabs:** Theory Content, PDF Reference
- **Chemistry Extra:** Organic Reactions, Organic Quiz (chemistry only)
- **Back Navigation:** Return to subject selection or home

### Interactive Elements
- **Progress Tracking:** Mark sections as complete
- **Bookmarking:** Save important sections
- **Search:** Find content within theory
- **Print:** Print theory content
- **Scroll to Top:** Quick navigation button

### Mobile Features
- **Responsive Design:** Optimized for all screen sizes
- **Mobile Quotes:** Subject-specific motivational quotes
- **Touch-Friendly:** Large buttons and easy navigation

## Technical Implementation

### JavaScript Architecture
```javascript
// theory-common.js - Shared functionality
- showTheoryTab() - Tab switching
- Progress tracking
- Bookmarking system
- Search functionality
- Animations and effects

// chemistry-reactions.js - Chemistry specific
- Organic reactions content
- Quiz functionality with timers
- Reaction navigation system
```

### CSS Organization
- **Existing styles maintained** for compatibility
- **New components added:**
  - Scroll-to-top button
  - Notification system
  - Progress tracking elements
  - Enhanced mobile responsiveness

### Navigation Flow
```
theory.html (Subject Selection)
    ↓ (navigateToTheory function)
theory-[subject].html (Individual Pages)
    ↓ (Back button)
theory.html or index.html
```

## Benefits of New Structure

### Performance
- **Faster Loading:** Only load content for selected subject
- **Reduced Memory:** Smaller JavaScript files per page
- **Better Caching:** Individual files can be cached separately

### Maintainability
- **Modular Code:** Each subject in separate file
- **Easier Updates:** Modify one subject without affecting others
- **Clear Organization:** Logical file structure

### User Experience
- **Subject-Specific Features:** Chemistry gets reactions/quiz, others get standard content
- **Faster Navigation:** Direct links to subjects
- **Better Mobile Performance:** Smaller page sizes

### Development
- **Easier Debugging:** Isolated functionality per subject
- **Team Collaboration:** Multiple developers can work on different subjects
- **Feature Addition:** Add subject-specific features without conflicts

## Usage Instructions

### For Users
1. Visit theory.html to select a subject
2. Click on any subject button to go to dedicated page
3. Use tabs to switch between content types
4. Use back button to return to subject selection

### For Developers
1. **Adding Content:** Edit the specific subject HTML file
2. **Shared Features:** Modify theory-common.js
3. **Chemistry Features:** Modify chemistry-reactions.js
4. **Styling:** Add to styles.css with appropriate selectors

## File Dependencies

### All Theory Pages Depend On:
- styles.css (styling)
- theory-common.js (shared functionality)
- main.js (core application features)

### Chemistry Page Additionally Depends On:
- chemistry-reactions.js (reactions and quiz)

### Main Theory Page Depends On:
- theory.js (navigation and compatibility)

This structure provides a clean, maintainable, and scalable foundation for the theory section while preserving all existing functionality and adding new features.
