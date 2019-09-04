var letters = ["a", "b", "c", "d", "e,", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userGuess = ["Guess 1", "Guess 2", "Guess 3", "Guess 4", "Guess 5", "Guess 6", "Guess 7", "Guess 8", "Guess 9"]


var wins = 0;
var losses = 0;

var guesses = 10;
var guessesLeft = 9;
var allGuesses = "";


var computerChoice; 


var updateCompChoice = function () {
    computerChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerChoice);
};

var clear = function () {
    document.getElementById("userGuess").innerHTML = "Your guesses so far: " + "";
};

updateCompChoice();

document.onkeypress = function (event) {
    var userGuess = event.key;

    console.log(computerChoice + " " + userGuess);

    if (allGuesses.indexOf(userGuess) >= 0) {
        alert("Try Again! You've already guessed that letter.");
    } else {
        allGuesses = allGuesses + userGuess + ", ";

        if (userGuess === computerChoice) {
            wins++;
            allGuesses = "";
            guesses = 9;
            updateCompChoice();
            clear();
        } else {
            guesses--;
        }

        if (guesses === 0) {
            losses++;
            allGuesses = "";
            guesses += 9;
            updateCompChoice();
            clear();
        }

        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guesses;
        document.getElementById("userGuess").innerHTML = "Your guesses so far: " + allGuesses;
    }
}

