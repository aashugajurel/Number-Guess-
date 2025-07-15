// Elements
const range = document.getElementById('range');
const insult = document.getElementById('insult');
const buttonEnter = document.getElementById('buttonEnter');
const remain = document.getElementById('remain');
const inputField = document.getElementById('input');

const modal = document.getElementById('gameOverModal');
const winModal = document.getElementById('winGameModal');

const newGameMain = document.getElementById('newGameButtonMain');
const newGameModal = document.getElementById('newGameButtonModal');
const newGameWin = document.getElementById('newGameButtonWin');

const difficultySection = document.getElementById('difficultySelection');
const gameSection = document.getElementById('gameSection');

const easyBtn = document.getElementById('easyButton');
const normalBtn = document.getElementById('normalButton');
const hardBtn = document.getElementById('hardButton');

const insults = ['Idiot', 'Oops', 'Try harder', 'Come onnn!', 'Stupid?', 'Lol', 'Are you serious?'];

let lives = 0;
let target = 0;

// Start game with difficulty
function startGame(difficulty) {
    lives = difficulty;
    target = Math.floor(Math.random() * 101); // 0–100
    remain.textContent = lives;
    inputField.value = '';
    insult.textContent = "Let's do it!";
    range.textContent = "Range: 0 - 100";

    difficultySection.style.display = 'none';
    gameSection.style.display = 'block';
}

// Handle guess
buttonEnter.addEventListener('click', () => {
    const guess = parseInt(inputField.value);
    const insultText = insults[Math.floor(Math.random() * insults.length)];

    if (isNaN(guess)) {
        insult.textContent = insultText;
        range.textContent = 'Please enter a valid number!';
        return;
    }

    if (lives <= 0) {
        showGameOverModal();
        return;
    }

    if (guess === target) {
        winGame();
    } else {
        insult.textContent = insultText;
        range.textContent = guess > target ? 'Guess lower!' : 'Guess higher!';
        lives--;
        remain.textContent = lives;
        if (lives <= 0) showGameOverModal();
    }

    inputField.value = '';
});

// Show modals
function showGameOverModal() {
    modal.style.display = 'flex';
}

function winGame() {
    winModal.style.display = 'flex';
}

// Reset game
function resetGame() {
    difficultySection.style.display = 'block';
    gameSection.style.display = 'none';
    modal.style.display = 'none';
    winModal.style.display = 'none';
    inputField.value = '';
}

// Button Events
easyBtn.onclick = () => startGame(10);
normalBtn.onclick = () => startGame(5);
hardBtn.onclick = () => startGame(3);

newGameMain.onclick = resetGame;
newGameModal.onclick = resetGame;
newGameWin.onclick = resetGame;
