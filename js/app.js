/*
 * Create a list that holds all of your cards
 */

const restart = document.querySelector('.restart');
const deck = document.querySelector('.deck');
const cards = document.querySelectorAll('.card');
const card = [...cards]; // use of the rest parameter to bundle the cards into an array
let symbols = document.querySelectorAll('i.fas');
let symbol = [...symbols];
let openCards = [];



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


displayCard = function(){
    this.classList.toggle('open');
    this.classList.toggle('show');
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
     cards[i].addEventListener('click', open);
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

function open(){
  openCards.push(this);
  let len = openCards.length;
  if(len===2){
  //  move();
  if(openCards[0].childNodes[1]===openCards[1].childNodes[1]){
    match();
  }else{
    nonmatch();
  }
}
};

function match(){
  openCards[0].classList.add('match');
  openCards[1].classList.add('match');
  openCards[0].classList.remove('show', 'open');
  openCards[1].classList.remove('show', 'open');
  openCards=[];
}

function nonmatch(){
  openCards[0].classList.add('nonmatch');
  openCards[1].classList.add('nonmatch');
  disable();
  setTimeout(function(){
    openCards[0].classList.remove('show', 'open', 'nonmatch');
    openCards[1].classList.remove('show', 'open', 'nonmatch');
    enable();
    openCards=[];
  }, 1100);
}

function disable(){
  Array.prototype.filter.call(card, function(cards){
    cards.classList.add('disabled');
  });
}

function enable(){
  Array.prototype.filter.call(card, function(cards){
    cards.classList.remove('disabled');
    for(let i=0; i<match.length; i++){
      match[i].classList.add('disabled');
    }
  });
}

 // Restart Button
/*restart.addEventListener('click', function(restart){

   console.log(shuffle); }); */
