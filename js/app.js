/*
 * Create a list that holds all of your cards
 */

const restart = document.querySelector('.restart');
const deck = document.querySelector('.deck');
const cards = document.querySelectorAll('.card');
const card = [...cards]; // use of the rest parameter to bundle the cards into an array
let displayCard;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


displayCard = function(){ // loop to add event listeners to each card, https://scotch.io/@sandraisraelo
    this.classList.toggle('open');
    this.classList.toggle('show');

    //this.classList.toggle('disabled');
}

document.body.onload = start();
function start(){
  let shuffleCards = shuffle(card);
   for (let i = 0; i < cards.length; i++){
     cards.forEach.call(shuffleCards, function(item){
       deck.appendChild(item);
     });
     cards[i].classList.remove('show', 'open', 'match');
     cards[i].addEventListener('click', displayCard);
 };
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Timer
let secs = 0, mins=0;
let gameTimer;

function setTimer(){
  gameTimer = setInterval(function(){
  document.querySelector('.timer-display').innerHTML = min+'mins'+sec+'secs';
  secs++;
  if(secs==60){
    secs++;
    secs=0;
  }
  if(mins==60){
    mins++;
    mins=0;
  }
}, 1000);
}

function clearTimer(){
  clearInterval(gameTimer);
}

/*restart.addEventListener('click', function(){
  clearTimer();
  function setTimer();
}); */





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
/*restart.addEventListener('click', function(restart){

   console.log(shuffle); }); */
