//Keyboard
const qwerty = document.querySelector("#qwerty");
const ul = document.querySelector("#phrase ul");
let missed = 0;

const reset = document.querySelector(".btn__reset");
const overlay = document.querySelector("#overlay");
const overlayH2 = document.querySelector("#overlay h2");
const button = document.getElementsByTagName("button");
const hasLetter = document.getElementsByClassName("letter");
const hasShow = document.getElementsByClassName("show");
const hearts = document.getElementsByTagName("IMG");

const phrases = [
  "Love For All Hatred For None",
  "Change The World By Being Yourself",
  "Every Moment Is A Fresh Beginning",
  "Never Regret Anything That Made You Smile",
  "Die With Memories Not Dreams",
];

// Removes overlay
reset.addEventListener("click", (event) => {
  overlay.style.display = "none";
});

// Returns individual characters
function getRandomPhraseAsArray(array) {
  const randomPhrase = Math.floor(Math.random() * phrases.length);
  const indexPhrase = array[randomPhrase];
  const characters = Array.from(indexPhrase);
  return characters;
}

// Char added to dom
function addPhraseToDisplay(arrayOfCharacters) {
  for (let i = 0; i < arrayOfCharacters.length; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = arrayOfCharacters[i];
    if (arrayOfCharacters[i] === " ") {
      li.classList.add("space");
    } else {
      li.classList.add("letter");
    }
  }
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// check guess
function checkLetter(guess) {
  let match = null;
  const letters = document.getElementsByClassName("letter");
  for (let i = 0; i < letters.length; i++) {
    if (guess.textContent === letters[i].textContent.toLowerCase()) {
      letters[i].classList.add("show");
      match = guess.textContent;
    }
  }
  return match;
}

//overlay screen conditions
function checkWin() {
  const letter = document.querySelectorAll("li.letter");
  const show = document.querySelectorAll("li.show");
  if (letter.length === show.length) {
    overlay.classList.add("win");
    overlayH2.textContent = "You Won";
    overlay.style.display = "flex";
    reset.textContent = "Start Game";
  }
  if (missed > 4) {
    overlay.classList.add("lose");
    overlayH2.textContent = "You lose";
    overlay.style.display = "flex";
    reset.textContent = "Try again";
  }
}
const resetGame = () => {
  // removes phrase
  const listItems = ul.querySelectorAll("li");
  for (let i = 0; i < listItems.length; i++) {
    ul.removeChild(listItems[i]);
  }
  // removes buttons chosen
  const buttons = document.querySelectorAll("button.chosen");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("chosen");
    buttons[i].disabled = false;
  }

  // lost hearts removed
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].src = "images/liveHeart.png";
  }
  //resets misses and phrase
  missed = 0;
  const resetPhrase = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(resetPhrase);
  //removes overlay
  overlay.classList.remove("win", "lose");
};

reset.addEventListener("click", (event) => {
  if (hasLetter.length === hasShow.length || missed > 4) {
    resetGame();
  }
});

//keyboard
qwerty.addEventListener("click", (event) => {
  console.log(event.target);
  const letterClicked = event.target;

  if (letterClicked.tagName === "BUTTON") {
    letterClicked.classList.add("chosen");
    letterClicked.setAttribute("disabled", true);

    const letterFound = checkLetter(letterClicked);
    if (!letterFound && missed < 5) {
      const hearts = document.querySelectorAll("li img");
      hearts[missed].src = "images/lostHeart.png";
      missed++;
    }
  }

  checkWin();
});
