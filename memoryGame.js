const cards = document.querySelectorAll('.memory-card');


 var hasFlippedCard = false;
 var firstCard, secondCard;

  function flipCard() {
           this.classList.toggle('flip');
           this.classList.add('flip');

            if (!hasFlippedCard) {
                   hasFlippedCard = true;
                   firstCard = this;
   }
}

cards.forEach(card => card.addEventListener('click', flipCard));