const playBtn = document.querySelector('.play-btn');
const restartBtn = document.querySelector('.restart-btn');
const exitBtn = document.querySelector('.exit-btn');
const gameEl = document.querySelector('.game');
const userScore = document.querySelector('#user-score span');
const botScore = document.querySelector('#bot-score span');
const gameBoard = document.querySelector('.game-board');
const itemBtn = document.querySelectorAll('.item-btn');

const items = ['Rock', 'Paper', 'Scissors'];
const images = {
    Rock: './images/rock.jpeg',
    Paper: './images/paper.jpeg',
    Scissors: './images/scissors.png'
};


function displayGameBoard (event) {
    if (gameEl.classList.contains('hide')) {
        gameEl.classList.remove('hide');
        gameEl.classList.add('show');
        event.target.disabled = true;
    }
}

function displayImages (user, bot, result) {
    gameBoard.innerHTML = `
    <div class="item">
        <figure>
            <img src='${user}' alt='${user}'/>
        </figure>
    </div>
    <div class="result">
        ${result}
    </div>
    <div class="item">
        <img src='${bot}' alt='${bot}'/>
    </div>
    `
}


function disableItemBtn() {
    itemBtn.forEach(item => item.disabled = true);
}

function enableItemBtn() {
    itemBtn.forEach(item => item.disabled = false);
}

itemBtn.forEach(item => {
    item.addEventListener('click', event => {
        disableItemBtn();
        restartBtn.disabled = false;
        const userChoice = event.target.textContent;
        const botChoice = items[Math.floor(Math.random() * 3)];


        if (userChoice === botChoice) {
            const result = 'Draw'
            displayImages(images[userChoice], images[botChoice], result);
        } else if (userChoice === 'Rock' && botChoice === 'Paper') {
            botScore.textContent = parseInt(botScore.textContent) + 1;
            const result = 'Lost'
            displayImages(images[userChoice], images[botChoice], result);
        } else if (userChoice === 'Paper' && botChoice === 'Rock') {
            userScore.textContent = parseInt(botScore.textContent) + 1;
            const result = 'Won'
            displayImages(images[userChoice], images[botChoice], result);
        } else if (userChoice === 'Rock' && botChoice === 'Scissors') {
            userScore.textContent = parseInt(botScore.textContent) + 1;
            const result = 'Won'
            displayImages(images[userChoice], images[botChoice], result);
        } else if (userChoice === 'Scissors' && botChoice === 'Rock') {
            botScore.textContent = parseInt(botScore.textContent) + 1;
            const result = 'Lost'
            displayImages(images[userChoice], images[botChoice], result);
        } else if (userChoice === 'Scissors' && botChoice === 'Paper') {
            userScore.textContent = parseInt(botScore.textContent) + 1;
            const result = 'Won'
            displayImages(images[userChoice], images[botChoice], result);
        } else if (userChoice === 'Paper' && botChoice === 'Scissors') {
            botScore.textContent = parseInt(botScore.textContent) + 1;
            const result = 'Lost'
            displayImages(images[userChoice], images[botChoice], result);
        }

    })
})



function restart() {
    restartBtn.disabled = true;
    gameBoard.innerHTML = '';
    enableItemBtn();
}

function exit() {
    window.close();
}

playBtn.addEventListener('click', displayGameBoard);
restartBtn.addEventListener('click', restart);
exitBtn.addEventListener('click', exit);