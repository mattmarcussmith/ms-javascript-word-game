const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const missed = 0;
const startOverlay = document.querySelector('#overlay')
const startButton = document.querySelector('.btn__reset');

const phrases =
[ 'Love For All, Hatred For None',
  'Change the world by being yourself',
  'Every moment is a fresh beginning',
  'Never regret anything that made you smile',
  'Die with memories, not dreams'
];


const startGame = () => {
  // Start game clicked removes the overlay 
startButton.addEventListener('click', (event) => {
    startOverlay.style.display = 'none';
 })

 getRandomPhraseAsArray(phrases);
}

const getRandomPhraseAsArray = (array) => {
   // Generate random array
   const randomPhrase = Math.floor(Math.random() * phrases.length);

   // Grabs the random array
   const phrase = array[randomPhrase]
   
   // Grabs individual characters of random array
   const charactersFromArray = Array.from(phrase);

   // returns characters
   return charactersFromArray;
}