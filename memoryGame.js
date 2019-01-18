



var numClick= 0 ;
var first;
var second;
var match = 0;

// An array with images
var cards = [
    {
        img: 'img/gris.png',
        id: 'A'
    },
    {
        img: 'img/hast.png',
        id: 'B'
    },
    {
        img: 'img/kalkon.png',
        id: 'C'
    },
    {
        img: 'img/ko.png',
        id: 'D'
    },
    {
        img: 'img/lamm.png',
        id: 'E'
    },
    {
        img: 'img/tupp.png',
        id: 'F'
    },
    {
        img: 'img/gris.png',
        id: 'A'
    },
    {
        img: 'img/hast.png',
        id: 'B'
    },
    {
        img: 'img/kalkon',
        id: 'C'
    },
    {
        img: 'img/ko.png',
        id: 'D'
    },
    {
        img: 'img/lamm.png',
        id: 'E'
    },
    {
        img: 'img/tupp.png',
        id: 'F'
    }
];                   




// shuffel cards
/*
var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

*/
var container = document.getElementById('container');
var cardContainer = document.createElement('section');
container.appendChild(cardContainer);

cards.forEach(obj => {
    var cardImg = document.createElement('img');
    cardImg.id = obj.id;
    cardImg.src = obj.img;
    cardContainer.appendChild(cardImg);
});

