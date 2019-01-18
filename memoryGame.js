



var numClick= 0 ;
var first;
var second;
var match = 0;

// array med images


var kort = [
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
        i: 'img/back_side.png',
        id: 'C'
    },
    {
        img: 'img/ko.png',
        i: 'img/back_side.png',
        id: 'D'
    },
    {
        img: 'img/lamm.png',
        i: 'img/back_side.png',
        id: 'E'
    },
    {
        img: 'img/tupp.png',
        i: 'img/back_side.png',
        id: 'F'
    },
    {
        img: 'img/gris.png',
        i: 'img/back_side.png',
        id: 'A'
    },
    {
        img: 'img/hast.png',
        i: 'img/back_side.png',
        id: 'B'
    },
    {
        img: 'img/kalkon.png',
        i: 'img/back_side.png',
        id: 'C'
    },
    {
        img: 'img/ko.png',
        i: 'img/back_side.png',
        id: 'D'
    },
    {
        img: 'img/lamm.png',
        i: 'img/back_side.png',
        id: 'E'
    },
    {
        img: 'img/tupp.png',
        i: 'img/back_side.png',
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
shuffle(kort);

var container = document.getElementById('container');
var cardContainer = document.createElement('section');
container.appendChild(cardContainer);

// skriver ut array med bilder


var sheet = document.createElement('style')
sheet.innerHTML = "img {border: 2px solid black;  background-image: url(/img/back_side.png);}";
document.body.appendChild(sheet);


kort.forEach(obj => {
    var cardImg = document.createElement('img');
    cardImg.id = obj.id;
    cardImg.src = obj.img;
    cardContainer.appendChild(cardImg);
});



/*
cards.forEach(obj => {
    var cardImg = document.createElement('img');
    cardImg.id = obj.id;
    cardImg.src = obj.i;
    cardContainer.appendChild(cardImg);
}); */

const cards = document.querySelectorAll('img');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(cards => cards.addEventListener('click', flipCard));

