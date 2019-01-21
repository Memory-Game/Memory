const play = document.querySelector(".memory-game");
var i;

var playCards = ['hast', 'lamm', 'tupp', 'kalkon', 'ko','gris','hast', 'lamm', 'tupp', 'kalkon', 'ko','gris' ]
/*
for (var i = 0, len = playCards.length; i < len; i++) {
    
    content = ` 
    <div class="memoryCard" data-framework="${this.playCards[i]}">
    <img class="front-face" src="./img/${this.playCards[i]}.png" alt="${this.playCards[i]}">
    <img class="back-face" src="./img/back_side.png" alt="Memory Card">
    </div> 
    `;
}; */

for (i=0;i<playCards.length;i++){
    console.log(playCards[i]);
    
    
    playCards.forEach( function (){
        content = ` 
        <div class="memoryCard" data-framework="${this.playCards[i]}">
        <img class="front-face" src="./img/${this.playCards[i]}.png" alt="${this.playCards[i]}">
        <img class="back-face" src="./img/back_side.png" alt="Memory Card">
        </div> 
        `;
    })
    
    
};
play.innerHTML = content;
 
    