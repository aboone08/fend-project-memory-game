/*
 * Create a list that holds all of your cards
 */

const restart = document.querySelector('.restart');
const card = document.getElementsByClassName('card');
let cards = [...card]; /* https://scotch.io/@sandraisraelo */
// loop to add event listeners to each card, https://scotch.io/@sandraisraelo
let displayCard = function (){
   this.classList.toggle('open');
   this.classList.toggle('show');
   this.classList.toggle('disabled');
}
  for (var i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', displayCard);
};

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(cards) {
    let currentIndex = cards.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }

    return cards;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */





 // Restart Button
 restart.addEventListener('click', function(restart){

   console.log("Hello World!"); });
