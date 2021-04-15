const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const streakEl = document.getElementById('streak');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const userSelection = document.getElementById('userSelection');
const computerSelection = document.getElementById('computerSelection')
;
var pokemusic = document.getElementById("pokesong");
const winner = document.getElementById('winner');
const ruleswindow = document.getElementById('ruleswindow');
ruleswindow.style.display = 'none';
const mpbutton = document.getElementById("mp");

const choices = ['water', 'fire', 'grass'];

let streak = 0;
let score = 0;
let userChoice = undefined;


buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

        
        checkWinner();
    });
});

reset.addEventListener('click', () => {
    //show the main and hides the screen with the choices
    main.style.display = 'flex';
    selection.style.display = 'none';
    ruleswindow.style.display = 'none';
})


function checkWinner(){
    const computerChoice = pickRandomChoice();

    //update the screen
    updateSelection(userSelection, userChoice);
    updateSelection(computerSelection, computerChoice);


    if(userChoice === computerChoice){
        //draw
        winner.innerText = 'draw';
    } else if(
        (userChoice === 'water' && computerChoice === 'fire') ||
    (userChoice === 'fire' && computerChoice === 'grass') ||
    (userChoice === 'grass' && computerChoice === 'water')
      

    ) {
        //user won
        updateScore();
        winner.innerText = 'win';
        streak += 1;
      streakEl.innerText = streak;
    } else{
        //user lost
        winner.innerText = 'lose';
        streak = 0;
        streakEl.innerText = streak;
    }
    //shows the selection and hides the main
    main.style.display = 'none';
    selection.style.display = 'flex';
}

function updateScore(value) {
    score += 1;

    scoreEl.innerText = score;
}

function pickRandomChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice){
    //class reset
    selectionEl.classList.remove('button-water');
    selectionEl.classList.remove('button-grass');
    selectionEl.classList.remove('button-fire');

    //update the image
    const img = selectionEl.querySelector('img');
    selectionEl.classList.add(`button-${choice}`);
    img.src = `./images/${choice}.svg`;
    img.alt = choice;
}

function rules(){
  selection.style.display = 'none';
  main.style.display = 'none';
  ruleswindow.style.display = 'block';
}

function returnwindow(){
   selection.style.display = 'none';
    ruleswindow.style.display = 'none';
    main.style.display = 'flex';
}

function playPoke(){
  mpbutton.innerHTML = "mute";
  pokemusic.play();
  mpbutton.setAttribute("onclick", "stopPoke()");
}

function stopPoke(){
  mpbutton.innerHTML = "play";
  pokemusic.pause();
  mpbutton.setAttribute("onclick", "playPoke()");
}