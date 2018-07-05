/*
 * Create a list that holds all of your cards
 */
const cards = document.querySelectorAll('.card');
const card = [...cards]; // use of the rest parameter to bundle the cards into an array

const restart = document.getElementById('restart');
const deck = document.querySelector('.deck');
const flipped = document.getElementsByClassName('card show open');
const moves = document.querySelector('.moves');
const stars = document.querySelectorAll('.fa-star');
const modal = document.querySelector('.modal');

let openCards = [];
let count = 0;
let matched = [];
let rating = document.querySelector('.stars');
let close = document.querySelector('.close');
let againBtn = document.getElementById('again');

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

/**
* @description Displays Cards
*/
function displayCard(){
  this.classList.toggle('show');
  this.classList.toggle('open');
}

/**
* @description Open Cards
* adds open cards to a list of openCards
*/
function open(){
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

/**
* @description Matched Cards
* function for cards that are matched
*/
function match(){
  openCards[0].classList.add('match');
  openCards[1].classList.add('match');
  openCards[0].classList.remove('show', 'open');
  openCards[1].classList.remove('show', 'open');
  openCards=[];
  matched.push(card);
  let win = matched.length;
    if(win===8){
    congrats();
    }
}
/**
* @description Nonmatched Cards
* function for cards that nonmatched
*/
function nonmatch(){
  openCards[0].classList.add('nonmatch');
  openCards[1].classList.add('nonmatch');
  setTimeout(function(){
  openCards[0].classList.remove('show', 'open', 'nonmatch');
  openCards[1].classList.remove('show', 'open', 'nonmatch');
  openCards=[];
  }, 800);
}

/**
* @description Move Count
* function to count the moves
* @param stars used to monitor rank in correlation to moveCount
*/
function moveCount(){
  count ++;
  moves.innerHTML = count;
  /**
  *@ description starts gameTimer at @param count ==1
  */
  if(count == 1){
      second=0;
      minute=0;
      gameTimer();
  }
  if(count>4 && count<10){
    for(i=0;i<4;i++){
      if(i>3){
        stars[i].style.visibility = 'collapse';
      }
    }
  }else if(count>11 && count<16){
    for(i=0;i<4;i++){
      if(i>2){
        stars[i].style.visibility = 'collapse';
      }
    }
  }else if(count>17 && count<23){
    for(i=0;i<4;i++){
      if(i>1){
        stars[i].style.visibility = 'collapse';
      }
    }
  }else if(count>24){
      for(i=0;i<4;i++){
        if(i>0){
          stars[i].style.visibility = 'collapse';
        }
      }
    }
}

/**
* @description Game timer
* function for the game timer
*/
function gameTimer(){ //http://logicalmoon.com/2015/05/using-javascript-to-create-a-timer/
  let seconds = 0;
  startTimer = setInterval(function(){
    seconds++;
    document.getElementById('seconds').innerText = seconds % 60;
    document.getElementById('minutes').innerText = parseInt(seconds/60);
  }, 1000);
}
/**
* @description Timer Reset
* function to reset the game timer
*/
function resetTimer(){
  clearInterval(startTimer);
  document.getElementById('seconds').innerText = 0;
  document.getElementById('minutes').innerText = 0;
}
/**
* @description Game Reset
* function to reset game
*/
restart.addEventListener('click', restartGame);
function restartGame(){
  for(let i=0;i<stars.length;i++){
    stars[i].style.color= '#000';
    stars[i].style.visibility='visible';
  }
  count=0;
  moves.innerHTML = count;
  location.reload(true); //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_loc_reload
}

/**
* @description Congrats Modal
* function to deploy the congrats modal
*/
function congrats(){
  clearInterval(startTimer);
  modal.classList.add('show');
  document.getElementById('movesFin').innerHTML =  count;
  document.getElementById('starFin').innerHTML = rating.innerHTML;
  let m = document.getElementById('minutes');
  let s = document.getElementById('seconds');
  document.getElementById('timeFin').innerHTML = m.innerHTML+' Minute(s) ' + s.innerHTML+' Seconds.' ;
  againBtn.onclick = function() {again()}; //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_dom
  closed();
}
/**
* @description Close Modal
* function to close modal and restart game
*/
function closed(){
  close.addEventListener('click', function(congrats){
  modal.classList.add('closed');
  again.classList.add('closed');
  restartGame();
  })
}
/**
* @description Play again
* function to allow user to play close modal by clicking play again againBtn
*/
function again(){
  closed();
  restartGame();
}
