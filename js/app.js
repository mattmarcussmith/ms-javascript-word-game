const qwerty = document.querySelector('#qwerty');
const ul = document.querySelector('#phrase');
let missed = 0;

const startGame = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');


const phrases =
['Love For All, Hatred For None',
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
  const characters = split(indexPhrase);

  return characters;
}
getRandomPhraseAsArray(phrases);


function addPhraseToDisplay(arrayOfCharacters) {
  for(let i=0; i< arrayOfCharacters.length; i++) {
    const li = document.createElement('li');
    const ul = document.querySelector('#phrase ul ')
    ul.append(li);
    li.textContent = arrayOfCharacters[i];
    if(arrayOfCharacters[i] === ' ') {
      li.classList('space')
    } else {
      li.classList('letter');
    }
  }
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

function checkLetter(guess) {
  const letters = document.getElementsByClassName('letter');
  for(let i = 0; i < letters.length; i++) {
     if(letters[i].textContent.toLowerCase() === guess){
       let matchingLetter = letters.classList.add('show');
       return matchingLetter;
     } else {
       return null;
     }
   
  }
  
  


}