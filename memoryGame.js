



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

var container = document.getElementById('container');
var cardContainer = document.createElement('section');
container.appendChild(cardContainer);


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

