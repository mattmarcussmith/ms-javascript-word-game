//Keyboard
const qwerty = document.querySelector('#qwerty');
const ul = document.querySelector('#phrase');
let missed = 0;

const startGame = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const button = document.getElementsByTagName('button');


const phrases = ['Love For All, Hatred For None',
  'Change the world by being yourself',
  'Every moment is a fresh beginning',
  'Never regret anything that made you smile',
  'Die with memories, not dreams'
];

startGame.addEventListener('click', (event) => {
  overlay.style.display = 'none';

})

function getRandomPhraseAsArray(array) {
  const randomPhrase = Math.floor(Math.random() * phrases.length)
  const indexPhrase = array[randomPhrase];
  const characters = Array.from(indexPhrase);

  return characters;
}



function addPhraseToDisplay(arrayOfCharacters) {
  for (let i = 0; i < arrayOfCharacters.length; i++) {
    let li = document.createElement('li');
    let ul = document.querySelector('#phrase ul ')
    ul.append(li);
    li.textContent = arrayOfCharacters[i];
    if (arrayOfCharacters[i] === ' ') {
      li.classList.add('space')
    } else {
      li.classList.add('letter');
    }


  }
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

function checkLetter(guess) {
  let match = null;
  const letters = document.getElementsByClassName('letter');
  for (let i = 0; i < letters.length; i++) {
    if (guess.textContent === letters[i].textContent.toLowerCase()) {
      letters[i].classList.add('show');
      match = guess.textContent;
    }
    
  }
  return match;
}

qwerty.addEventListener('click', (event) => {
  console.log(event.target)
  const letterClicked = event.target;
  if (letterClicked.tagName === 'BUTTON') {
    letterClicked.classList.add('chosen');
    letterClicked.setAttribute('disabled', true);
    const letterFound = checkLetter(letterClicked);
  if(!letterFound && missed < 5) {
    const hearts = document.querySelectorAll('li img')
       hearts[missed].src = 'images/lostHeart.png'
        missed+=1;
    
   }
  }
    checkLetter(event.target);
})

