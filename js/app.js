/*
 * Create a list that holds all of your cards
 */

const restart = document.querySelector('.restart');
const deck = document.querySelector('.deck');
const flipped = document.getElementsByClassName('card show open');
const cards = document.querySelectorAll('.card');
const card = [...cards]; // use of the rest parameter to bundle the cards into an array
const moves = document.querySelector('.moves');
const stars = document.querySelectorAll('.fa-star');
const modal = document.getElementById('congratsModal');

let openCards = [];
let count = 0;



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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


 function displayCard(){
  this.classList.toggle('show');
  this.classList.toggle('open');

/*  let flipped = [].includes(displayCard);
  document.getElementsByClassName('card show open');
  if(flipped){
     displayCard.preventDefault();
  } */
}


function open(){ // function to add cards to a list of openCards
openCards.push(this);
let length = openCards.length;

  if(length===2){
    moveCount();
    if((openCards[0].innerHTML===openCards[1].innerHTML)&&(openCards[0]!=openCards[1])){
      match();
      }else{
        nonmatch();
      }
    }
};

function match(){ // for cards that match
  openCards[0].classList.add('match');
  openCards[1].classList.add('match');
  openCards[0].classList.remove('show', 'open');
  openCards[1].classList.remove('show', 'open');
  openCards=[];
}

function nonmatch(){ // for cards that do not match
    openCards[0].classList.add('nonmatch');
    openCards[1].classList.add('nonmatch');
  setTimeout(function(){
    openCards[0].classList.remove('show', 'open', 'nonmatch');
    openCards[1].classList.remove('show', 'open', 'nonmatch');
    openCards=[];
  }, 1000);
}

function moveCount(){ // move count
  count ++;
  moves.innerHTML = count;
  //start gameTimer
  if(count == 1){
      second=0;
      minute=0;
      gameTimer();
    }
// star count display
  if(count>4 && count<8){
    for(i=0;i<3;i++){
      if(i>2){
        stars[i].style.visibility = 'collapse';
      }
    }
  }else if(count>9 && count<13){
    for(i=0;i<3;i++){
      if(i>1){
        stars[i].style.visibility = 'collapse';
      }
    }
  }else if(count>14 && count<18){
    for(i=0;i<3;i++){
      if(i>0){
        stars[i].style.visibility = 'collapse';
      }
    }
    }else if(count>19){
      for(i=0;i<3;i++){
        if(i>-1){
          stars[i].style.visibility = 'collapse';
        }
      }
    }
  }

// game timer
function gameTimer(){ //http://logicalmoon.com/2015/05/using-javascript-to-create-a-timer/
  let seconds = 0;
startTimer = setInterval(function(){
  seconds++;
  document.getElementById('seconds').innerText = seconds % 60;
  document.getElementById('minutes').innerText = parseInt(seconds/60);
}, 1000);
}

function stopTimer(){
  stopTimer = clearInterval();
  //  second = 0;
  //  minute = 0;
  //  document.getElementById('seconds').innerHTML = '';
  //  document.getElementById('minutes').innerHTML = '';

}

//modal
/*function congrats(){
  if(match.length==16){
    clearInterval(gameTimer);
    finalTime = document.querySelector('.timer-display').innerHTML;
    // display congrats modal
    modal.classList.add('show');
    // display final move, final star rating and final time on modal
    document.getElementById('finalMove').innerHTML = count;
    document.getElementById('finalStar').innerHTML = stars;
    document.getElementById('finalTime').innerHTML = finalTime;
    //close modal
    closeModal();
  };
}

//restart button
function restartGame(){
  restart.addEventListener('click', restartGame);
  clearInterval();
}
