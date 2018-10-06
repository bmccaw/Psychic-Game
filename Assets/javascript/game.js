//GLOBAL VARIABLES
//-----------------------------------------------
//Letter array
var alphabet = ['a','b','c',
                'd','e','f','g','h','i',
                'j','k','l','m','n','o',
                'p','q','r','s','t','u',
                'v','w','x','y','z'];
var compGuess = '';
var wrongGuess = [];
//Counters
var wins = 0;
var losses = 0;
var guesses = 10;

//FUNCTIONS
//-----------------------------------------------
function reset () 
{ 
    
    //ComputerGuess is pulled at random from array
    compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log('RESET');

    //RESET
    //-------------------------------------------
    userGuess = 0;
    guesses = 10;
    wrongGuess = []; 

    test=false;
    startGame();

}
function startGame() 
{

    //ComputerGuess is pulled at random from array
    compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log('Computer Guess is ' + compGuess);

    //RESET
    //-------------------------------------------
    guesses = 10;
    wrongGuess = [];
    console.log (wrongGuess);

    //Writes to HTML doc
    document.getElementById('guessesLeft').innerHTML = guesses;
	document.getElementById('wins').innerHTML = wins;
	document.getElementById('losses').innerHTML = losses;
	document.getElementById('wrongGuess').innerHTML = wrongGuess;

}

//Game Process
//--------------------------------------------------
startGame();

//On key-up run this function
document.onkeyup=function(event) 
{

    test=true;
    var userGuess = event.key;
    console.log('User Guess is ' + userGuess);
    console.log('Computer Guess is ' + compGuess);

if (alphabet.includes(event.key)) {

//user win 
if (compGuess === userGuess) {
    wins++;
    document.getElementById('wins').innerHTML = wins;
    //alert('You win!');
    reset();
} 
 //if user guesses the same wrong letter twice, this stops it from adding to the array 
if (wrongGuess.indexOf(userGuess) >= 0) {

}    else {

    wrongGuess.push(userGuess);
    guesses--;
    document.getElementById('guessesLeft').innerHTML = guesses;
    document.getElementById('wrongGuess').innerHTML = wrongGuess;
    //Test
    console.log('Wrong guess is ' + wrongGuess);
    console.log('Guesses left is ' + guesses);
}
}
//user lose
    if (guesses === 0) {
        losses++;
        document.getElementById('losses').innerHTML = losses;
        //alert('You lose!');
        reset();
    }
}
