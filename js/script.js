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
let timerCounter = 1; 
let countDown;
const nToCreate = 5;
let nCreated =[];
let nUser = [];


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
    
    
        
       
});

//fa partire il timer al click del bottone
function timeStart(){
    timerCounter--;
    console.log(timerCounter,'sec');
    
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
function nGenerator(){
    for(let i = 0; i < nToCreate; i++){
        let randomic =(getRndInteger(1,100));
        console.log('rnd',randomic);
        if(!nCreated.includes(randomic)){
            nCreated.push(randomic)
            boxNumber.innerHTML = nCreated;
        }
    }
};

//Funzione per prendere numeri inseriti dall'utente
function getDataUser(){
    let dataUser1 = document.getElementById('data-1').value;
    let dataUser2 = document.getElementById('data-2').value;
    let dataUser3 = document.getElementById('data-3').value;
    let dataUser4 = document.getElementById('data-4').value;
    let dataUser5 = document.getElementById('data-5').value;
    console.log(dataUser1,dataUser2,dataUser3,dataUser4,dataUser5);
    nUser.push(dataUser1,dataUser2,dataUser3,dataUser4,dataUser5);
    console.log('numeri utente',nUser);
};

//CONSOLE LOG
//console.log(btnStart);
//console.log(btnSubmit);
//console.log(data);
//console.log(nCreated);
console.log('numeri utente', nUser);