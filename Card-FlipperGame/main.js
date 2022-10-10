let game;

function Card(num) {
    this.num = num;
    this.htmlElement = null;
}

Card.prototype.handleClick = function (e) {
    this.htmlElement.classList.toggle('flip');
    if (!game.firstCard) {
        game.firstCard = this.num;
        this.htmlElement.style.pointerEvents = 'none';
        return;
    }

    if (game.firstCard !== this.num) {
        this.lostCard();
        setTimeout(() => {
            game.loose();
        }, 0);
        return;
    }

    this.winnerCard();
    setTimeout(() => {
        game.win();
    }, 0);
};

Card.prototype.create = function () {
    // root
    const root = document.querySelector('#root');

    // card
    const card = document.createElement('div');
    card.classList.add('card');

    // front
    const cardFront = document.createElement('div');
    cardFront.classList.add('front');

    // back
    const cardBack = document.createElement('div');
    cardBack.classList.add('back');
    cardBack.innerHTML = this.num;

    card.appendChild(cardFront);
    card.appendChild(cardBack);

    card.addEventListener('click', this.handleClick.bind(this));
    this.htmlElement = card;
    return card;
};

Card.prototype.lostCard = function () {
    this.htmlElement.classList.add('lost');
};

Card.prototype.winnerCard = function () {
    this.htmlElement.classList.add('win');
};

function renderCard(card) {
    const cardElem = card.create();
    const root = document.querySelector('#root');
    root.appendChild(card.create());
}

function getRandomNumbers(qty, max) {
    const numSet = new Set();
    while (numSet.size < qty) {
        numSet.add(Math.floor(Math.random() * max) + 1);
    }
    return [...numSet];
}

function Game() {
    this.firstCard = null;
}

Game.prototype.restart = function () {
    const root = document.querySelector('#root');
    root.innerHTML = '';
    this.firstCard = null;
    this.start();
};

Game.prototype.start = function () {
    // Get 3 unique numbers
    let numbers = getRandomNumbers(3, 9);
    numbers = [...numbers, ...numbers].sort(() => Math.random() - 0.5);

    numbers.forEach((number) => {
        renderCard(new Card(number));
    });
};

Game.prototype.loose = function () {
    alert('You lost !');
    this.restart();
};

Game.prototype.win = function () {
    alert('congratulations,You win !');
    this.restart();
};

game = new Game();
game.start();
