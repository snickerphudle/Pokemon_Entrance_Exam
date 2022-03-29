// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence
const basic = [
  "",
  "bulbasaur",
  "squirtle",
  "clefairy",
  "pikachu",
  "gastly",
  "charmander",
];
const evolved = [
  "",
  "venasaur",
  "blastoise",
  "clefable",
  "raichu",
  "gengar",
  "charizard",
];

//Global Variables
var pattern = [5, 5, 5, 5, 5, 4, 2, 1, 1, 5, 5, 4, 3, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var lives = 3;
var time = 140; //total amount of time the player starts with
var clueHoldTime = 500; //how long to hold each clue's light/sound
var interval;

function startGame() {
  //initialize game variables
  progress = 0;
  lives = 3;
  clueHoldTime = 1000;
  gamePlaying = true;
  document.getElementById("life" + 1).classList.remove("hidden");
  document.getElementById("life" + 2).classList.remove("hidden");
  document.getElementById("life" + 3).classList.remove("hidden");
  document.getElementById("win").classList.add("hidden");
  document.getElementById("lose").classList.add("hidden");
  document.getElementById("gameButtonArea").classList.remove("hidden");

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  startCountdown();
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  clearTimeout(interval);

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function loseGame() {
  stopGame();
  document.getElementById("lose").classList.remove("hidden");
  document.getElementById("gameButtonArea").classList.add("hidden");
}

function winGame() {
  stopGame();
  document.getElementById("win").classList.remove("hidden");
  document.getElementById("gameButtonArea").classList.add("hidden");
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!
        winGame();
      } else {
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
        document.getElementById("Progress").innerHTML = "Progress: " + progress + " / 13"
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    //Guess was incorrect
    //GAME OVER: LOSE!
    document.getElementById("life" + lives).classList.add("hidden");
    lives--;
  }

  if (lives == 0) {
    loseGame();
  }
}

function playClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    clueHoldTime -= 9;
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 349.23,
  2: 440.0,
  3: 466.16,
  4: 523.25,
  5: 587.33,
  6: 622.25,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function showImg(btn) {
  document.getElementById(evolved[btn]).classList.remove("hidden");
  document.getElementById(basic[btn]).classList.add("hidden");
}

function hideImg(btn) {
  document.getElementById(basic[btn]).classList.remove("hidden");
  document.getElementById(evolved[btn]).classList.add("hidden");
}

function mouseDownEvents(btn) {
  startTone(btn);
  showImg(btn);
}

function mouseUpEvents(btn) {
  stopTone(btn);
  hideImg(btn);
}

function startCountdown() {
  time = 140;

  interval = setInterval(() => {
    document.getElementById("timeDisplay").innerHTML =
      "Time Remaining: " + time;
    time--;

    if (time < 0) {
      clearInterval(interval);
      loseGame();
    }
  }, 1000);
}
