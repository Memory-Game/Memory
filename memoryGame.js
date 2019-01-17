// Jimmy
//Lejla
 var numClick = 0;
 var first ;
 var seconde ;
 var match = 0;
 var card ;

 // skapa en array med bilderna
var cards = [];
cards [1] = './img/gris.png';
cards [2] = './img/hast.png';
cards[3] = './img/kalkon.png';
cards[4] = './img/ko.png';
cards[5] = './img/lamm.png';
cards[6]= './img/tupp.png';
cards[7]= './img/gris.png';
cards[8]= './img/hast.png';
cards[9]= './img/kalkon.png';
cards[10]= './img/ko.png';
cards[11]= './img/lamm.png';
cards[12]='./img/tupp.png';

function shuffle(array) // shuffla arrayen
{
    var currentIndex = array.length, temporaryValue, randomIndex; 
    while ( 0 !== currentIndex) ;
{
    randomIndex = Math.floor(Math.random()* currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex]= array[randomIndex];
    array[randomeIndex] = temporaryValue;
 }
 return array ;
}
var s;  // here is the actual shuffle
s = shiffle(cards);

// here we call the function whene we click at a card
function choose(card)
{
    if(numClick == 0)
{
    first = card; // here we set the image we click on
    document,images[card].src = cards[card];
    numClick = 1;
}
else if (numClick == 1)
{
 numClick = 2;
 second = card;
 document.images[cards].src = cards[card];
 timer = setInterval(control, 800);
}
else
{
    alert('You can only click on one'); // 2 images will be shown until flipped
    }
}

function control()
{
    clearInterval(timer);
    numClick = 0;
    if(cards[second] == cards[first])
{
match++;
if(match == 6)
{
    alert('You have match all the images');
    location.reload();
   }
};