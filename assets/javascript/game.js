var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
                
var wins = 0;
var losses = 0;
var guessCount = 9;
var guessChoices = [];

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossText = document.getElementById("loss-text");
var remainingText = document.getElementById("remaining-text");
var currentGuessText = document.getElementById("currentguess-text");

document.onkeyup = function(event) {

  var userGuess = event.key;
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
 
  directionsText.textContent = "";
  winsText.textContent = "Wins: " + wins;
  lossText.textContent = "Losses: " + losses;
  remainingText.textContent = "Guesses remaining: " + guessCount;
  currentGuessText.textContent = "Your guesses so far: " + guessChoices;

  if (alphabet.indexOf(userGuess) > -1) {
    if (userGuess === computerGuess) {
      wins++;
      guessCount = 9;
      guessChoices = [];
    } 
    if (userGuess != computerGuess) {
        guessCount --;
        guessChoices.push(userGuess);
    }
    if (guessCount === 0) {
        guessCount = 9;
        losses ++;
        guessChoices = [];
    }

    directionsText.textContent = "";
    winsText.textContent = "Wins: " + wins;
    lossText.textContent = "Losses: " + losses;
    remainingText.textContent = "Guesses remaining: " + guessCount;
    currentGuessText.textContent = "Your guesses so far: " + guessChoices;

  }
};