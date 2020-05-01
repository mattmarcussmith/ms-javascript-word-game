const keyboard = document.querySelector('#qwerty');
const button = document.querySelectorAll('#qwerty button');
const phrase = document.querySelector('#phrase');
let missed = 0;
const startGame = document.querySelector('.btn__reset');
const ul = document.querySelector('#phrase ul');
const image = document.querySelectorAll('.tries img');
const tries = document.querySelectorAll('.tries');
const overlayHeader = document.querySelector('#overlay h2');
const overlay = document.querySelector('#overlay ');


const phrases = ['Love For All, Hatred For None',
  'Change the world by being yourself',
  'Every moment is a fresh beginning',
  'Never regret anything that made you smile',
  'Die with memories, not dreams'
];

startGame.addEventListener('click', () => {
  overlay.style.display = 'none';
});
//Listens for the game button to be pressed


//returns a random phrase from an array
const getRandomPhraseAsArray = (array) => {

  const randomNumber = Math.floor(Math.random() * phrases.length);

  //Grabs the index of chosen array and places it into numberIndex
  const index = array[randomNumber];

  // Grabs characters from chosen index
  const characters = Array.from(index);
  return characters;
}
const secretValue = getRandomPhraseAsArray(phrases);
// Checks if letter is in the phrase
const addPhraseToDisplay = (array) => {
  for (let i = 0; i < array.length; i++) {
    //create li
    const li = document.createElement('li');
    // Sets the text of any given array
    li.textContent = array[i];
    // Displays the result
    ul.appendChild(li)
    if (array[i] === ' ') {
      // Adds class of space to empty array
      li.classList.add('space');
    } else {
      // Adds class of letter to array thats NOT empty
      li.classList.add('letter');
    }

  }

}
addPhraseToDisplay(secretValue);

const checkLetter = (clickedButton) => {

  const li = document.querySelectorAll('.letter');

  for (let i = 0; i < li.length; i++) {
    if (li[i].textContent.toLowerCase() === clickedButton) {

      const match = li[i].classList.add('show');
      return match;
    } else {
      return null;
    }

  }
  
}
//Won or lost
const checkWin = () => {
  const letterLi = document.getElementsByClassName('letter');
  const showLI = document.getElementsByClassName('show');

  if (letterLi.length === showLI.length) {
    startGame.className = 'WINNER';
    overlay.style.display = 'inherit';
    overlayHeader.style.textContent = 'WINNER WINNER CHICKEN DINNER!'
    overlayHeader.style.display = 'flex';
    startGame.textContent = 'Play Again.';
  } else if (missed > 4) {
    startGame.className = 'LOSER';
    overlayHeader.textContent = 'SORRY, YOU LOST!'
    overlayHeader.style.display = 'flex';
    startGame.textContent = 'Play Again.';
  }

}


keyboard.addEventListener('click', (event) => {
    console.log(event.target);
    if(event.target === 'button') {
      button.classList.add('chosen');
      button.setAttribute('disabled', true);
    }
    const letterFound = checkLetter(event.target.textContent);
    if( letterFound === null) {
      missed++;
    
    for(let i = 0; i < missed; i++){
           tries[i].firstElementChild.src = 'images/lostHeart.png';
       
      }
    }
    checkWin();
})



