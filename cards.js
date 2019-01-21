const play = document.querySelector(".memory-game");
var i;

var playCards = ['hast', 'lamm', 'tupp', 'kalkon', 'ko','gris','hast', 'lamm', 'tupp', 'kalkon', 'ko','gris' ]




for (i=0;i<playCards.length;i++){
    console.log(playCards[i]);
  
        let content= document.createElement('div');
         content.innerHTML = ` 
        <img class="front-face" src="./img/${this.playCards[i]}.png" alt="${this.playCards[i]}">
        <img class="back-face" src="./img/back_side.png" alt="Memory Card">
        
        `;
        content.classList.add('memoryCard');
        content.classList.add(`data-framework="${this.playCards[i]}">`);
        play.appendChild(content);

};
    
    
    