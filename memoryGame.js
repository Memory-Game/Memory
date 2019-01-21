const cards = document.querySelectorAll('.memoryCard');
const counter = document.querySelector(".move");
const hover = document.querySelector(".hoverGameOff");

var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;
var move = 0;
var points = 0;

// starta/ starta om 0-ställer   
function start(){
    cards.forEach(kort => {
        kort.classList.remove("flip");
    });
    counter.innerHTML = move = 0;
    hasFlippedCard = false;
    secondCard = null;
    firstCard = null;
    lockBoard = false;
  hover.classList.toggle('gameOn');

  // räknar antal klick
function moves(){
    move++;
    counter.innerHTML = move;
}
// lägger till css-flip vid klick
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');
  moves();
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;

  checkForMatch();
}
// kollar om dataset matchar, gör dom de tas klick bort från korten med flip aktiv, är det inte match, tas flip bort med 1 sekunds fördröjning. 
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
points++;

// kollar om omgången är klar, startar om (ska ersättas med nåt som visar hur det gick, och val om att starta om)
if (points == 6){
    setTimeout(() => {
    start();
}, 1000);
}
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

<<<<<<< HEAD
var numClick= 0 ;
var first;
var second;
var match = 0;

// An array with images


var cards = [
    {
        img: 'img/gris.png',
        img: 'img/back_side.png',
        id: 'A'
    },
    {
        img: 'img/hast.png',
        img: 'img/back_side.png',
        id: 'B'
    },
    {
        img: 'img/kalkon.png',
        img: 'img/back_side.png',
        id: 'C'
    },
    {
        img: 'img/ko.png',
        img: 'img/back_side.png',
        id: 'D'
    },
    {
        img: 'img/lamm.png',
        img: 'img/back_side.png',
        id: 'E'
    },
    {
        img: 'img/tupp.png',
        img: 'img/back_side.png',
        id: 'F'
    },
    {
        img: 'img/gris.png',
        img: 'img/back_side.png',
        id: 'A'
    },
    {
        img: 'img/hast.png',
        img: 'img/back_side.png',
        id: 'B'
    },
    {
        img: 'img/kalkon.png',
        img: 'img/back_side.png',
        id: 'C'
    },
    {
        img: 'img/ko.png',
        img: 'img/back_side.png',
        id: 'D'
    },
    {
        img: 'img/lamm.png',
        img: 'img/back_side.png',
        id: 'E'
    },
    {
        img: 'img/tupp.png',
        img: 'img/back_side.png',
        id: 'F'
    }
];         

// shuffle

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

shuffle(cards);
=======
    resetBoard();
  }, 1000);
}
>>>>>>> 3fe07e5142df44d0234cda2960ecd7f82011a24d

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  
}

// blandar kortens ordning med Math.random, "()" runt funktionen gör att funktionen körs direkt.

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

// klick funktion på korten

cards.forEach(card => card.addEventListener('click', flipCard));
}


/*
// försök till att se om spelet är klart, fungerar ej nu!

function done(){
    if (classList('flip') == 12){
        hover.classList.toggle('hoverGameOff');
    }}; */

<<<<<<< HEAD
cards.forEach(obj => {
    var cardImg = document.createElement('img');
    cardImg.classList.add('card');
    cardImg.id = obj.id;
    cardImg.src = obj.img;
    cardContainer.appendChild(cardImg);
    cardContainer.addEventListener('click', flipCard);
});


const memoryCards = document.getElementsByClassName('card');
console.log(memoryCards);


function flipCard(e) {
    console.log('i was clicked');
    e.target.classList.toggle('flipCard');
}

=======

// startar spelet vid klick på start-knappen
document.getElementById("replay").addEventListener("click", start);
 
>>>>>>> 3fe07e5142df44d0234cda2960ecd7f82011a24d
