//aggiungere una struttura su html
//aggiungere un bottone che fa comparire i 5 numeri casuali
//dopo che si clicca sul bottone START compariranno i numeri per 30 secondi
//alla fine dei 30 secondi i numeri compariranno
//e comparirà la casella di input
//l'utente inserisce i numeri che si ricorda
//mostriamo il messaggio finale

"use strict";

//random number generator
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let timerCounter = 3; //secondi
const btnStart = document.getElementById('start');
const btnSubmit = document.getElementById('submit');
const data = document.querySelector('input').value;

//Elemento che contiene il timer e i numeri casuali
let boxTimerNumbers = document.querySelector('.box-timer-numbers');

//Elemento su cui verranno stampati i numeri casuali
let boxNumber = document.getElementById('numbers-5');

btnStart.addEventListener('click', function(){
    boxTimerNumbers.classList.remove('d-none');
    
    const countDown = setInterval(timeStart, 1000);
    timeStart();
    
   
    
});

//fa partire il timer al click del bottone
function timeStart(){
    timerCounter--;
    console.log(timerCounter);
    
    if (timerCounter > 0){
        boxTimerNumbers.classList.remove('d-none');
        let timerEl = document.getElementById('timer');
        timerEl.innerHTML = `Timer: ${timerCounter}s`;
    } else {
        boxTimerNumbers.classList.add('d-none');
        timerCounter;
    }
    };



/* const timer = setInterval(function(){
    timerCounter--;
    console.log(timerCounter);
    if (timerCounter === 0){
        clearInterval(timer);
        boxTimerNumbers.classList.add('d-none');
       let timerEl = document.getElementById('timer');
        timerEl.innerHTML = `qui ci va il timer ${timerCounter}`;
    }
}) */

//CONSOLE LOG
console.log(btnStart);
console.log(btnSubmit);
console.log(data);