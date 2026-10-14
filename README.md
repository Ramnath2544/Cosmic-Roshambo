# 🌌 Cosmic Roshambo

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Cosmic Roshambo** is an immersive, space-themed take on the classic Rock, Paper, Scissors game. Built completely with vanilla web technologies, it features a glassmorphic user interface, dynamic particle backgrounds, and synthesized sound effects generated entirely via the Web Audio API.

---

## ✨ Features

*   **Glassmorphic UI:** A sleek, modern interface with blurred backdrops, glowing orbs, and animated twinkling stars.
*   **Web Audio Synths:** Custom-generated sound effects for clicks, wins, losses, and ties (no external audio files required).
*   **Persistent Memory:** Your cosmic score (Wins, Losses, Ties) and sound preferences are automatically saved to `localStorage`.
*   **Auto Play Mode:** Sit back and let the computer battle against itself at 1.2-second intervals.
*   **Keyboard Accessibility:** Full keyboard support for blazing-fast gameplay.
*   **Responsive Design:** Flawlessly adapts to desktop, tablet, and mobile screens.

---

## 🎮 How to Play

Choose your weapon to defeat the CPU. 
*   ✊ **Rock** beats Scissors
*   ✋ **Paper** beats Rock
*   ✌️ **Scissors** beats Paper

### ⌨️ Keyboard Shortcuts
For the fastest response times, use your keyboard:
*   <kbd>R</kbd> - Play **Rock**
*   <kbd>P</kbd> - Play **Paper**
*   <kbd>S</kbd> - Play **Scissors**
*   <kbd>A</kbd> - Toggle **Auto Play**
*   <kbd>Backspace</kbd> - Trigger **Reset** confirmation

---

## 🚀 Quick Start

Since this project uses pure HTML, CSS, and JavaScript with no build tools or dependencies, getting started is instant.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/cosmic-roshambo.git](https://github.com/yourusername/cosmic-roshambo.git)

2. **Navigate to the directory:**
   cd cosmic-roshambo

3. **Run the game:**
   Simply double-click index.html to open it in your default web browser. Alternatively, use a local server like VS Code's Live Server extension for hot reloading.

##📁 Project Structure
cosmic-roshambo/
├── index.html    # Layout, game board, and SVG structural elements
├── style.css     # Glassmorphism, animations, and responsive layout
└── script.js     # Game logic, Web Audio API engine, and state management

##🛠️ Technical Highlights
CSS Animations: Utilizes @keyframes for the drifting background orbs, twinkling star layers, and responsive UI feedback (pulses, shakes, and pops based on match results).

AudioContext API: Instead of loading .mp3 or .wav files, the game generates geometric waveforms (sine, square, sawtooth, triangle) on the fly for retro-futuristic sound effects.

##📄 License
This project is open-source and available under the MIT License. Feel free to fork, modify, and use it in your own cosmic creations!
