

/*
const play = document.querySelector(".memory-game");
var i;

var playCards = ['gris', 'ko', 'lamm', 'kalkon', 'tupp', 'hast','gris', 'ko', 'lamm', 'kalkon', 'tupp', 'hast']
  



for (i=0;i<playCards.length;i++){
    console.log(playCards[i]);
 // playCards.forEach( function (){
        let content= document.createElement('div');
         content.innerHTML = ` 

        <img class="front-face" src="./img/${playCards[i]}.png" dataset-framework="${playCards[i]}" alt="${playCards[i]}">
        <img class="back-face" src="./img/back_side.png" alt="Memory Card">
        
        `;
        content.classList.add('memoryCard');
        play.appendChild(content);
   // })
};
    */
    
const play = document.querySelector(".memory-game");
var i;

var playCards = [
    {
        id: 1,
    img: 'ko'
} ,
{
    id: 2,
    img: 'hast'
} ,
{
    id: 3,
    img: 'gris'
} ,
{
    id: 4,
    img: 'lamm'
} ,
{
    id: 5,
    img: 'kalkon'
} ,
{
    id: 6,
    img: 'tupp'
} ,
{
    id: 1,
img: 'ko'
} ,
{
id: 2,
img: 'hast'
} ,
{
id: 3,
img: 'gris'
} ,
{
id: 4,
img: 'lamm'
} ,
{
id: 5,
img: 'kalkon'
} ,
{
id: 6,
img: 'tupp'
} 
]




//for (i=0;i<playCards.length;i++){
  //  console.log(playCards.id);
  playCards.forEach( function (playCards){
        let content= document.createElement('div');
         content.innerHTML = ` 

        <img class="front-face" src="./img/${playCards.img}.png" id='${playCards.id}' alt="${playCards.img}">
        <img class="back-face" src="./img/back_side.png" alt="Memory Card">
        
        `;
        content.classList.add('memoryCard');
        play.appendChild(content);
    })
//};
    
    
    
    
    