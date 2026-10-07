// --- DOM Elements ---
const winScore = document.querySelector('.js-score-wins');
const loseScore = document.querySelector('.js-score-losses');
const tieScore = document.querySelector('.js-score-ties');
const resultText = document.querySelector('.js-result');
const movesText = document.querySelector('.js-moves');
const autoPlayBtn = document.querySelector('.js-auto-play-button');
const soundBtn = document.querySelector('.js-sound-button');
const soundLabel = document.querySelector('.js-sound-label');
const resetConfirmContainer = document.querySelector('.js-reset-confirmation');

// --- State Management ---
let score = JSON.parse(localStorage.getItem('cosmicRPSScore')) || { wins: 0, losses: 0, ties: 0 };
let isAutoPlaying = false;
let intervalId;
let soundOn = localStorage.getItem("cosmicRPSSound") !== "off";
let audioContext = null;

const emojis = { rock: '✊', paper: '✋', scissors: '✌️' };

// Initialize UI
updateScoreElement();
updateSoundButton();

// --- Audio Engine (Web Audio API) ---
function ensureAudio() {
  if (!soundOn) return;
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioCtx();
  }
  if (audioContext.state === "suspended") audioContext.resume();
}

function playTone(kind) {
  if (!soundOn) return;
  ensureAudio();
  if (!audioContext) return;

  const now = audioContext.currentTime;
  const patterns = {
    click: [{ freq: 420, dur: 0.06, type: "square", gain: 0.05 }],
    win: [
      { freq: 523.25, dur: 0.12, type: "sine", gain: 0.09 },
      { freq: 659.25, dur: 0.16, type: "sine", gain: 0.08, delay: 0.08 },
      { freq: 1046.5, dur: 0.28, type: "triangle", gain: 0.07, delay: 0.24 },
    ],
    lose: [
      { freq: 180, dur: 0.2, type: "sawtooth", gain: 0.06 },
      { freq: 150, dur: 0.3, type: "sawtooth", gain: 0.06, delay: 0.15 }
    ],
    tie: [
      { freq: 330, dur: 0.15, type: "triangle", gain: 0.05 },
      { freq: 330, dur: 0.15, type: "triangle", gain: 0.05, delay: 0.2 }
    ]
  };

  (patterns[kind] || []).forEach((note) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = note.type;
    oscillator.frequency.setValueAtTime(note.freq, now + (note.delay || 0));
    gain.gain.setValueAtTime(0.0001, now + (note.delay || 0));
    gain.gain.exponentialRampToValueAtTime(note.gain, now + (note.delay || 0) + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + (note.delay || 0) + note.dur);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(now + (note.delay || 0));
    oscillator.stop(now + (note.delay || 0) + note.dur + 0.02);
  });
}

function toggleSound() {
  soundOn = !soundOn;
  localStorage.setItem("cosmicRPSSound", soundOn ? "on" : "off");
  updateSoundButton();
  if (soundOn) {
    ensureAudio();
    playTone("click");
  }
}

function updateSoundButton() {
  soundLabel.textContent = soundOn ? "Sound On" : "Sound Off";
  soundBtn.setAttribute("aria-pressed", String(soundOn));
}

// --- Game Logic ---
function pickComputerMove() {
  const rand = Math.random();
  if (rand < 1 / 3) return 'rock';
  if (rand < 2 / 3) return 'paper';
  return 'scissors';
}

function playGame(playerMove) {
  playTone('click');
  const computerMove = pickComputerMove();
  let result = '';
  let statusClass = '';
  let sound = '';

  if (playerMove === computerMove) {
    result = 'Tie.';
    statusClass = 'pulse-tie';
    sound = 'tie';
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result = 'You win!';
    statusClass = 'pulse-win';
    sound = 'win';
  } else {
    result = 'You lose.';
    statusClass = 'pulse-lose';
    sound = 'lose';
  }

  // Delay the result sound slightly so it doesn't clip the click
  setTimeout(() => playTone(sound), 100);

  // Update State
  if (result === 'You win!') score.wins++;
  else if (result === 'You lose.') score.losses++;
  else if (result === 'Tie.') score.ties++;

  localStorage.setItem('cosmicRPSScore', JSON.stringify(score));
  updateScoreElement();

  // Update UI & Animate
  resultText.textContent = result;
  resultText.className = `status js-result ${statusClass}`;
  
  // Re-trigger CSS animation
  resultText.style.animation = 'none';
  resultText.offsetHeight; 
  resultText.style.animation = null;

  movesText.innerHTML = `
    You <span class="move-icon-small">${emojis[playerMove]}</span> 
    vs 
    <span class="move-icon-small">${emojis[computerMove]}</span> CPU
  `;
}

function updateScoreElement() {
  winScore.textContent = score.wins;
  loseScore.textContent = score.losses;
  tieScore.textContent = score.ties;
}

function autoPlay() {
  playTone("click");
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      playGame(pickComputerMove());
    }, 1200);
    isAutoPlaying = true;
    autoPlayBtn.textContent = 'Stop Auto';
    autoPlayBtn.classList.add('active-auto');
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    autoPlayBtn.textContent = 'Auto Play';
    autoPlayBtn.classList.remove('active-auto');
  }
}

// --- Reset Flow ---
function showResetConfirmation() {
  playTone('click');
  resetConfirmContainer.hidden = false;
  resetConfirmContainer.innerHTML = `
    <p style="margin: 0 0 10px; font-weight: bold; color: var(--ink);">Wipe cosmic memory?</p>
    <button class="js-reset-confirm-yes reset-confirm-button">Yes, Reset</button>
    <button class="js-reset-confirm-no reset-confirm-button no">Cancel</button>
  `;

  document.querySelector('.js-reset-confirm-yes').addEventListener('click', () => {
    score = { wins: 0, losses: 0, ties: 0 };
    localStorage.removeItem('cosmicRPSScore');
    updateScoreElement();
    resultText.textContent = 'Score reset';
    resultText.className = 'status js-result';
    movesText.innerHTML = '';
    resetConfirmContainer.hidden = true;
    playTone('lose'); // Fun little feedback
  });

  document.querySelector('.js-reset-confirm-no').addEventListener('click', () => {
    playTone('click');
    resetConfirmContainer.hidden = true;
  });
}

// --- Event Listeners ---
document.querySelector('.js-rock-button').addEventListener('click', () => playGame('rock'));
document.querySelector('.js-paper-button').addEventListener('click', () => playGame('paper'));
document.querySelector('.js-scissors-button').addEventListener('click', () => playGame('scissors'));

autoPlayBtn.addEventListener('click', autoPlay);
soundBtn.addEventListener('click', toggleSound);
document.querySelector('.js-reset-score-button').addEventListener('click', showResetConfirmation);

document.body.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'r') {
    document.querySelector('.js-rock-button').focus();
    playGame('rock');
  }
  else if (event.key.toLowerCase() === 'p') {
    document.querySelector('.js-paper-button').focus();
    playGame('paper');
  }
  else if (event.key.toLowerCase() === 's') {
    document.querySelector('.js-scissors-button').focus();
    playGame('scissors');
  }
  else if (event.key.toLowerCase() === 'a') autoPlay();
  else if (event.key === 'Backspace') showResetConfirmation();
});