# 🚀 BITSAT Prep Hub - Interactive Learning Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> **A comprehensive, interactive web application designed specifically for BITSAT (Birla Institute of Technology and Science Admission Test) preparation. Features a beautiful symmetric design, AI-powered doubt solving, comprehensive theory sections, and advanced calculators.**

## 🌟 Features

### 📚 **Theory Hub**
- **Comprehensive Subject Coverage**: Mathematics, Physics, Chemistry, English, and Logical Reasoning
- **Interactive Content**: Detailed theory with formulas, examples, and explanations
- **PDF Integration**: Google Docs embedded PDF viewers for each subject
- **Tab-based Interface**: Switch between theory content and PDF references seamlessly

### 🧠 **Practice Quiz System**
- **Grammar Mastery**: Advanced grammar concepts and rules
- **Vocabulary Challenge**: Expand your word power with challenging questions
- **Phrasal Verbs & Idioms**: Master expressions and idiomatic usage
- **Analogical Reasoning**: Develop logical thinking skills
- **30+ Questions per section** with detailed explanations

### 🤖 **AI Doubt Solver**
- **Powered by Google Gemini 2.5 Flash**: Advanced AI for instant doubt resolution
- **Interactive Chat Interface**: Real-time conversation with AI assistant
- **Subject-specific Help**: Get assistance with any BITSAT topic
- **Suggestion System**: Quick access to common queries

### 🧮 **Advanced Calculators**
- **Scientific Calculator**: Complete with trigonometric, logarithmic, and statistical functions
- **Graphing Calculator**: Powered by Desmos for equation visualization
- **Memory Functions**: Store and recall calculations
- **Angle Mode Support**: Degree and Radian calculations

### 📄 **Study Materials Manager**
- **File Upload System**: Upload and organize your study materials
- **Cloud Storage Integration**: Share files across users
- **PDF Viewer**: Built-in PDF viewing capabilities
- **File Management**: Organize, view, and download study materials

### ⚙️ **Profile & Settings**
- **Personalized Experience**: Custom user profiles
- **Exam Date Tracking**: Countdown timer to BITSAT exam
- **Progress Tracking**: Monitor your preparation journey

## 🎨 Design Features

### ✨ **Visual Excellence**
- **Hyperspeed Background**: Dynamic animated star field effect
- **Symmetric Layout**: Perfect 2x2+1 button arrangements throughout
- **Gradient Animations**: Beautiful color transitions and hover effects
- **Motivational Quotes**: Inspirational quotes positioned strategically
- **Floating Elements**: Animated educational icons

### 📱 **Responsive Design**
- **Mobile-First Approach**: Optimized for all screen sizes
- **Touch-Friendly Interface**: Large buttons and intuitive navigation
- **Adaptive Layouts**: Content reorganizes beautifully on different devices
- **Cross-Browser Compatibility**: Works seamlessly across all modern browsers

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with advanced animations and gradients
- **AI Integration**: Google Gemini API
- **PDF Viewing**: Google Docs Embed API
- **Graphing**: Desmos Calculator API
- **Icons**: Font Awesome 6.0
- **Storage**: LocalStorage for user data and file management

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for AI features and PDF viewing
- Google Gemini API key (for AI doubt solver)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bitsat-prep-hub.git
   cd bitsat-prep-hub
   ```

2. **Set up the project**
   ```bash
   # No build process required - it's a pure frontend application!
   # Simply open index.html in your browser or serve with a local server
   ```

3. **For local development server (optional)**
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

4. **Configure AI Features**
   - Get your Google Gemini API key from [Google AI Studio](https://makersuite.google.com/)
   - The app will prompt you to enter your API key when using AI features

### 🌐 Live Demo
Visit the live application: [BITSAT Prep Hub](https://your-domain.com)

## 📖 Usage Guide

### 🎯 **Getting Started**
1. **Welcome Setup**: Enter your name and select your BITSAT exam date
2. **Choose Your Path**: Select from the symmetric layout of learning options
3. **Track Progress**: Monitor your preparation with the countdown timer

### 📚 **Using Theory Hub**
1. Click **"Theory Hub"** from the main navigation
2. Select any subject from the symmetric 2x2+1 layout
3. Switch between **"Theory Content"** and **"PDF Reference"** tabs
4. Navigate back using **"Back to Subjects"** or **"Return to Home"**

### 🧠 **Taking Practice Quizzes**
1. Click **"Practice Quiz"** from the main menu
2. Choose from Grammar, Vocabulary, Phrasal Verbs, or Analogical Reasoning
3. Answer questions with instant feedback and explanations
4. Track your score and time with animated displays

### 🤖 **AI Doubt Solving**
1. Access **"AI Doubt Solver"** from the main navigation
2. Type your question or use suggestion buttons
3. Get instant, detailed explanations from Gemini AI
4. Continue the conversation for follow-up questions

### 🧮 **Using Calculators**
- **Scientific Calculator**: Access advanced mathematical functions
- **Graphing Calculator**: Visualize equations and functions
- **Memory Functions**: Store frequently used calculations

## 📁 Project Structure

```
bitsat-prep-hub/
├── index.html              # Main application page
├── theory.html             # Theory hub page
├── styles.css              # Main stylesheet with animations
├── main.js                 # Core application logic
├── theory.js               # Theory section functionality
├── server.js               # Backend server (Node.js/Express)
├── package.json            # Node.js dependencies
├── netlify.toml           # Netlify deployment configuration
├── favicon.ico            # Application icon
└── README.md              # This file
```

## 🎨 Customization

### 🌈 **Color Themes**
The application uses a sophisticated gradient color scheme:
- **Primary**: `#4fc3f7` (Light Blue)
- **Secondary**: `#ff4081` (Pink)
- **Accent**: `#9c27b0` (Purple)
- **Background**: Dynamic gradient with hyperspeed effect

### 🔧 **Configuration Options**
- **Exam Dates**: Modify available BITSAT exam dates in `main.js`
- **Quiz Questions**: Add more questions in the `quizData` object
- **Theory Content**: Expand theory sections in `theory.js`
- **PDF Links**: Update Google Drive PDF links for each subject

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### 🐛 **Bug Reports**
Found a bug? Please create an issue with:
- Detailed description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser and device information

### 💡 **Feature Requests**
Have an idea? We'd love to hear it! Open an issue with:
- Clear description of the feature
- Use case and benefits
- Any implementation ideas

## 📞 Support & Community

### 🆘 **Get Help**
- **Discord Community**: [Join our Discord](https://discord.gg/EQNxSReYMK) for real-time support and discussions
- **Reddit**: Follow updates and discussions on [Reddit](https://www.reddit.com/user/Difficult-Dig7627/)
- **GitHub Issues**: Report bugs and request features

### 💬 **Community Guidelines**
- Be respectful and helpful
- Search existing issues before creating new ones
- Provide detailed information when asking for help
- Share your success stories and tips!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for powering the doubt solver
- **Desmos** for the graphing calculator integration
- **Font Awesome** for the beautiful icons
- **BITSAT aspirants** for inspiration and feedback
- **Open source community** for tools and libraries

## 📊 Project Stats

- **Languages**: HTML, CSS, JavaScript
- **Files**: 8 core files
- **Features**: 15+ major features
- **Responsive**: 100% mobile-friendly
- **Performance**: Optimized for fast loading

---

<div align="center">

**Made with ❤️ for BITSAT aspirants**

[🌟 Star this repo](https://github.com/yourusername/bitsat-prep-hub) | [🐛 Report Bug](https://github.com/yourusername/bitsat-prep-hub/issues) | [💡 Request Feature](https://github.com/yourusername/bitsat-prep-hub/issues)

**Connect with us:**
[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/EQNxSReYMK)
[![Reddit](https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white)](https://www.reddit.com/user/Difficult-Dig7627/)

</div>
