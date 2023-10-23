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

//ELEMENTI DOM
const guessedEl = document.getElementById('guessed');
const btnStart = document.getElementById('start');
const btnSubmit = document.getElementById('submit');
const data = document.querySelector('input');
const dataBox = document.querySelector('.form-group');
//Elemento che contiene il timer e i numeri casuali
let boxTimerNumbers = document.querySelector('.box-timer-numbers');
//Elemento su cui verranno stampati i numeri casuali
let boxNumber = document.getElementById('numbers-5');
let boxAnswerEl = document.getElementById('answer');

//VARIABILI
let timerCounter = 30; 
let countDown;
const nToCreate = 5;

//array
let nCreated =[];
let nUser = [];
let nResult = [];

//EVENTO PER BOTTONE START
btnStart.addEventListener('click', function(){
    boxTimerNumbers.classList.remove('d-none');
    dataBox.classList.add('d-none');

    //Fa partire la funzione che genera numeri
    nGenerator();

    //Fa partire la funzione TIMESTART
    countDown = setInterval(timeStart, 1000);
    
});

//EVENTO PER BOTTONE INVIO
btnSubmit.addEventListener('click', function(){
    getDataUser();
    finalScore();
          
});

//fa partire il timer al click del bottone
function timeStart(){
    timerCounter--;
    
    let timerEl = document.getElementById('timer');
    
    if (timerCounter > 0){
        boxTimerNumbers.classList.remove('d-none');
        timerEl.innerHTML = `Timer: ${timerCounter}s`;
    } else {
        clearInterval(countDown);
        boxTimerNumbers.classList.add('d-none');
        dataBox.classList.remove('d-none');
        btnStart.classList.add('d-none');
    }
};

//crea dei numeri casuali
function nGenerator(randomic){
    while(nCreated.length < nToCreate){
        let randomic = (getRndInteger(1,100));
        if(!nCreated.includes(randomic)){
            nCreated.push(randomic);
            nResult.push(randomic);
            boxNumber.innerHTML = nCreated;
        };
    }
    return nCreated;
}  
    

//Funzione per prendere numeri inseriti dall'utente
function getDataUser(){
    let dataUser1 = parseInt(document.getElementById('data-1').value);
    let dataUser2 = parseInt(document.getElementById('data-2').value);
    let dataUser3 = parseInt(document.getElementById('data-3').value);
    let dataUser4 = parseInt(document.getElementById('data-4').value);
    let dataUser5 = parseInt(document.getElementById('data-5').value);
    nUser.push(dataUser1,dataUser2,dataUser3,dataUser4,dataUser5);   
    
        for (let i = 0; i < nCreated.length; i++){
            if(!nCreated.includes(nUser[i])){
                nResult.push(nUser[i]);
            } else{
                guessedEl.innerHTML += ` hai indovinato questo numero: <strong>${nUser[i]}</strong> <br>`;
            }
        }
};

//Funzione che assegna il punteggio finale
function finalScore(){
    if(nResult.length === 5){
        boxAnswerEl.innerHTML = `hai indovinato 5 numeri`;
    } else if( nResult.length === 6){
        boxAnswerEl.innerHTML = `hai indovinato 4 numeri`;
    } else if( nResult.length === 7){
        boxAnswerEl.innerHTML = `hai indovinato 3 numeri`;
    } else if( nResult.length === 8){
        boxAnswerEl.innerHTML = `hai indovinato 2 numeri`;
    } else if( nResult.length === 9){
        boxAnswerEl.innerHTML = `hai indovinato 1 numero`;
    } else if( nResult.length === 10){
        boxAnswerEl.innerHTML = `hai indovinato 0 numeri`;
    }
    boxAnswerEl.innerHTML += ` <strong> <br> i numeri da indovinare erano ${nCreated}<strong>`;
};
    
//CONSOLE LOG
console.log('numeri casuali',nCreated);
console.log('numeri utente',nUser); 
console.log('array',nResult);