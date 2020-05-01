const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const missed = 0;
const startOverlay = document.querySelector('#overlay')
const startButton = document.querySelector('.btn__reset');
const ul = phrase.querySelector('ul');


const phrases =
[ 'Love For All, Hatred For None',
  'Change the world by being yourself',
  'Every moment is a fresh beginning',
  'Never regret anything that made you smile',
  'Die with memories, not dreams'
];



  // Start game clicked removes the overlay 
startButton.addEventListener('click', () => {
   startOverlay.style.display = 'none';

 })

  // adds secret phrase to display
 

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

const addPhraseToDisplay = (arrayOfLetters) => {
  // cycle through array of characters 
  for(let i = 0; i < charactersFromArray.length; i++) {
    
    //create li
    const li = document.createElement('li');

    // Sets the text of any given array
    li.textContent = arrayOfLetters[i];

    // Displays the result
    ul.appendChild(li)

    if(arrayOfLetters[i] === ' ') {
      // Adds class of space to empty array
       li.classList.add('space');
    } else {
      // Adds class of letter to array thats NOT empty
      li.classList.add('letter');
    }
  }

  // Call to add phrase to UI and generate random phrase
  const secretPhrase = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(secretPhrase);
  
 
}
const checkLetter = (letterClicked) => {
  // Grabs any class that has letters
  const letters = document.querySelectorAll('.letter')
  letterFound = '';

  //Iterates through array
  for(let i = 0; i < letters.length; i++) {
    // checks if any given character is equal to users click. 
    if(letters[i].textContent.toLowerCase() === letterClicked) {
             
       letterFound = letters[i].classList.add('show');
       return letterFound;
    } else {
      return null;
    }
  }
}

keyboard.addEventListener('click', (event) => {
     if(event.target.tagName === 'button') {
       // Targets text within button
       const button = e.target.textContent;
       checkLetter(button);

       // Adds class of chosen  to clicked button
       button.classList.add('chosen');

       // Cant click button again
       button.setAttribute('disabled', true);


     }
        
     })




