//Keyboard
const qwerty = document.querySelector('#qwerty');
const ul = document.querySelector('#phrase');
let missed = 0;
const phrase = document.getElementById('#phrase');
const reset = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const overlayH2 = document.querySelector('#overlay h2');
const button = document.getElementsByTagName('BUTTON');
const hasLetter = document.getElementsByClassName('letter');
const hasShow = document.getElementsByClassName('show');
const hearts = document.getElementsByTagName('IMG')

const phrases = ['Love For All, Hatred For None',
  'Change the world by being yourself',
  'Every moment is a fresh beginning',
  'Never regret anything that made you smile',
  'Die with memories, not dreams'
];

reset.addEventListener('click', (event) => {
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
    ul.appendChild(li);
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
  checkWin();
})

function checkWin() {
  const letter = document.querySelectorAll('li.letter');
  const show = document.querySelectorAll('li.show');
  if(letter.length === show.length) {
    overlay.className = 'win';
    overlayH2.textContent = 'You Won';
    overlay.style.display = 'flex';
    reset.textContent ='Try again';
  }
  if(missed > 4) {
    overlay.className = 'lose';
    overlayH2.textContent = 'You lose';
    overlay.style.display = 'flex';
    reset.textContent = 'Try again';
  }

}
const resetGame  = () => {
  // removes phrase
  const ul = document.querySelector('#phrase ul')
   const li = document.querySelectorAll('li');
   for(let i = 0; i< li.length; i++) {
     ul.remove(li[i])
   }
   for(let i = 0; i < button.length; i++) {
       button[i].classList.remove('chosen');
       button[i].disabled = false;
   }
   for(let i = 0; i < hearts.length; i ++) {
     hearts[i].src = 'images/liveHeart.png';
   }
   missed = 0;
   const resetPhrase = getRandomPhraseAsArray(phrases);
   addPhraseToDisplay(resetPhrase);
  
}

reset.addEventListener('click', (event) => {
   overlay.style.display= 'none';
   if(hasLetter.length === hasShow.length || missed > 4) {
     resetGame();
   }
   
});