window.addEventListener('load',init);

let time = 5;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'tiffin',
    'computer',
    'lamborghini',
    'maserati',
    'cupboard',
    'laptop',
    'samsung',
    'tiger',
    'elephant',
    'charger',
    'earphones',
    'nishit',
    'abhimanyu',
    'akshay',
    'ronnie',
    'hritik',
    'ranveer',
    '9137689904'
];
  
//initialize
function init() {
    //loading random word
    showWord(words);
    //start matching on word input
    wordInput.addEventListener('input',startMatch);
    //countdown
    setInterval(countdown, 1000);
    //checking status
    setInterval(checkStatus, 50);
}

//match start
function startMatch() {
    if(matchWords() ) {
        isPlaying = true;
        time = 6;
        showWord(words);
        wordInput.value='';
        score++;
    }
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    }
    else {
        scoreDisplay.innerHTML = score;
    }
}

//matching the words
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct';
        return true;
    }
    else {
        message.innerHTML = 'Wrong';
        return false;
    }
}

//picking a random word
function showWord(words) {
    //generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //output the word
    currentWord.innerHTML = words[randIndex]; 
}

//countdown timer
function countdown() {
    if(time > 0) {
        time--;
    }
    else if(time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

//check game status
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}