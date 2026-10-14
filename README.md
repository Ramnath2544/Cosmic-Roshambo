<div align="center">

# 🌌 Cosmic Roshambo

### *Rock, Paper, Scissors in the Nebula*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Web Audio API](https://img.shields.io/badge/Web_Audio_API-FF6B35?style=for-the-badge&logo=audio-technica&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

**Experience the timeless game of Rock, Paper, Scissors reimagined with a stunning cosmic aesthetic, synthesized audio, and smooth glassmorphic design.**

[🎮 Play Now](#-quick-start) • [✨ Features](#-features) • [⌨️ Controls](#️-keyboard-shortcuts) • [🛠️ Tech Stack](#️-technical-highlights)

---

</div>

## 🌠 Overview

**Cosmic Roshambo** is a modern, immersive take on the classic Rock-Paper-Scissors game, built entirely with vanilla web technologies. No frameworks, no dependencies—just pure HTML, CSS, and JavaScript creating a mesmerizing space-themed gaming experience.

Featuring a **glassmorphic UI**, **dynamic particle animations**, **Web Audio API synthesizers**, and **smooth interactions**, this project showcases what's possible with modern web standards.

---

## ✨ Features

### 🎨 **Visual Excellence**
- **Glassmorphic Design** - Frosted glass panels with backdrop blur effects
- **Dynamic Background** - Animated cosmic orbs drifting through space
- **Twinkling Stars** - Multi-layered star field with breathing animations
- **Gradient Typography** - Stunning text effects with gradient clipping
- **Smooth Animations** - CSS-powered transitions and keyframe animations
- **Responsive Layout** - Flawless experience on desktop, tablet, and mobile

### 🔊 **Audio Experience**
- **Web Audio API Synthesizers** - All sounds generated programmatically (no audio files!)
- **Dynamic Volume Control** - Adjust volume with smooth UI controls or keyboard
- **Multiple Sound Effects** - Unique tones for clicks, wins, losses, and ties
- **Persistent Preferences** - Sound settings saved across sessions
- **Smart Audio Icons** - Volume icon changes based on level (🔇 🔈 🔉 🔊)

### 🎮 **Gameplay Features**
- **Auto Play Mode** - Watch the AI battle itself automatically
- **Tournament Mode** - Best of 5 matches (ready for implementation)
- **Score Tracking** - Persistent wins, losses, and ties statistics
- **Real-time Feedback** - Animated results with color-coded outcomes
- **Reset Confirmation** - Protect your stats from accidental resets

### ⚡ **User Experience**
- **Keyboard Navigation** - Full keyboard support for power users
- **LocalStorage Integration** - All data persists between sessions
- **Accessibility Features** - ARIA labels, semantic HTML, keyboard focus
- **No Dependencies** - Zero build tools, zero npm packages, zero complexity
- **Instant Load** - Lightweight and blazing fast

---

## 🎮 How to Play

Choose your move and challenge the cosmic CPU:

| Move | Beats | Emoji |
|------|-------|-------|
| 🪨 **Rock** | Scissors | ✊ |
| 📄 **Paper** | Rock | ✋ |
| ✂️ **Scissors** | Paper | ✌️ |

### Game Modes

1. **Standard Play** - Click any move button to play against the CPU
2. **Auto Play** - Let the game run automatically at 1.2-second intervals
3. **Tournament** - Best of 5 rounds (feature ready for activation)

---

## ⌨️ Keyboard Shortcuts

Maximize your gameplay speed with keyboard controls:

| Key | Action |
|-----|--------|
| <kbd>R</kbd> | Play **Rock** ✊ |
| <kbd>P</kbd> | Play **Paper** ✋ |
| <kbd>S</kbd> | Play **Scissors** ✌️ |
| <kbd>A</kbd> | Toggle **Auto Play** mode |
| <kbd>↑</kbd> or <kbd>+</kbd> | **Increase Volume** |
| <kbd>↓</kbd> or <kbd>-</kbd> | **Decrease Volume** |
| <kbd>Backspace</kbd> | Trigger **Reset** confirmation |

---

## 🚀 Quick Start

No installation, no build process, no hassle. Get started in seconds:

### Method 1: Direct Open
```bash
# Clone the repository
git clone https://github.com/yourusername/cosmic-roshambo.git

# Navigate to the directory
cd cosmic-roshambo

# Open in browser (double-click or use the command below)
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Method 2: Local Development Server

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (npx):**
```bash
npx serve
```

**Using VS Code:**
- Install the "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

Then visit: `http://localhost:8000` (or the port your server uses)

---

## 📁 Project Structure

```
cosmic-roshambo/
│
├── 📄 index.html          # HTML structure and semantic markup
├── 🎨 style.css           # Glassmorphism, animations, responsive design
├── ⚙️  script.js           # Game logic, Web Audio API, state management
│
├── 🖼️  images/             # Game assets
│   ├── rock-emoji.png
│   ├── paper-emoji.png
│   └── scissors-emoji.png
│
└── 📖 README.md           # You are here!
```

### File Breakdown

| File | Lines | Purpose |
|------|-------|---------|
| `index.html` | ~100 | Semantic structure, accessibility markup |
| `style.css` | ~300 | Glassmorphic styles, animations, responsive grid |
| `script.js` | ~250 | Game engine, audio synthesis, state persistence |

**Total:** ~650 lines of clean, commented, production-ready code.

---

## 🛠️ Technical Highlights

### CSS Mastery
- **Custom Properties** - CSS variables for theming and consistency
- **Backdrop Filter** - Modern glassmorphism effects with `backdrop-filter: blur()`
- **Grid & Flexbox** - Responsive layouts without media query overload
- **CSS Animations** - Smooth `@keyframes` for drifting orbs and twinkling stars
- **Gradient Text** - Background-clip technique for rainbow gradients
- **CSS Transitions** - Buttery-smooth hover and active states

### JavaScript Excellence
- **Web Audio API** - Real-time audio synthesis using OscillatorNode
- **LocalStorage** - Client-side persistence for scores and preferences
- **Event Delegation** - Efficient keyboard and click event handling
- **State Management** - Clean separation of game state and UI updates
- **Modular Functions** - Readable, maintainable, DRY code
- **ES6+ Features** - Template literals, arrow functions, destructuring

### Audio Engineering
```javascript
// Example: Generating a "win" sound
win: [
  { freq: 523.25, dur: 0.12, type: "sine", gain: 0.25 * volume },
  { freq: 659.25, dur: 0.16, type: "sine", gain: 0.23 * volume, delay: 0.08 },
  { freq: 1046.5, dur: 0.28, type: "triangle", gain: 0.20 * volume, delay: 0.24 },
]
```
- **Oscillator Types**: Sine, Square, Sawtooth, Triangle waves
- **Dynamic Gain**: Volume controlled via exponential ramping
- **Chord Progressions**: Delayed notes for melodic sequences
- **Zero Dependencies**: No external audio files required

### Performance Optimizations
- **CSS Containment** - Optimized paint and layout calculations
- **RequestAnimationFrame** - Smooth animations at 60fps
- **Event Throttling** - Efficient keyboard input handling
- **Minimal Reflows** - Batched DOM updates
- **Asset Preloading** - Font preconnect for faster initial render

---

## 🎨 Design Philosophy

### Color Palette
```css
--bg:      #070714      /* Deep space black */
--panel:   rgba(12, 16, 40, 0.72)  /* Glassmorphic panel */
--ink:     #f4f6ff      /* Bright white text */
--muted:   #9aa4d6      /* Subdued purple-gray */
--gold:    #f6c945      /* Tie highlight */
--cyan:    #5ce1ff      /* Primary accent */
--magenta: #c084fc      /* Secondary accent */
--success: #4ade80      /* Win state */
--danger:  #fb7185      /* Loss state */
```

### Typography
- **Primary Font**: [Outfit](https://fonts.google.com/specimen/Outfit) - Clean, modern sans-serif
- **Accent Font**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) - Tech-inspired headings

---

## 🌟 Future Enhancements

- [ ] **Tournament Mode** - Complete Best of 5 implementation
- [ ] **Multiplayer** - Local 2-player mode
- [ ] **Leaderboard** - Track high scores and win streaks
- [ ] **Themes** - Additional color schemes (Neon, Retro, Minimal)
- [ ] **Advanced Stats** - Win rate percentages, streak tracking
- [ ] **Sound Packs** - Alternative audio themes
- [ ] **Achievements** - Unlock badges and milestones
- [ ] **PWA Support** - Install as a desktop/mobile app
- [ ] **Online Mode** - WebSocket multiplayer battles

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Ideas
- 🐛 Bug fixes and improvements
- 🎨 UI/UX enhancements
- 🔊 New sound effects or audio modes
- ♿ Accessibility improvements
- 📱 Mobile experience optimization
- 🌍 Internationalization (i18n)

---

## 📜 License

This project is licensed under the **MIT License** - see below for details:

```
MIT License

Copyright (c) 2024 Cosmic Roshambo Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

- **Web Audio API** - For enabling zero-dependency audio synthesis
- **Modern CSS** - For making glassmorphism and animations possible
- **Open Source Community** - For inspiring clean, accessible web experiences
- **You** - For checking out this project! ⭐

---

<div align="center">

### 🌌 Built with Passion in the Cosmic Void

**Made with ❤️ using vanilla HTML, CSS, and JavaScript**

[⭐ Star this repo](https://github.com/yourusername/cosmic-roshambo) • [🐛 Report Bug](https://github.com/yourusername/cosmic-roshambo/issues) • [💡 Request Feature](https://github.com/yourusername/cosmic-roshambo/issues)

---

*"In space, no one can hear you throw scissors."* 🚀✌️

</div>
