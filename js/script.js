//aggiungere una struttura su html
//aggiungere un bottone che fa comparire i 5 numeri casuali
//dopo che si clicca sul bottone START compariranno i numeri per 30 secondi
//alla fine dei 30 secondi i numeri compariranno
//e comparirà la casella di input
//l'utente inserisce i numeri che si ricorda
//mostriamo il messaggio finale

//random number generator
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let timerCounter = 30; //30 secondi
const btnStart = document.getElementById('start');
const btnSubmit = document.getElementById('submit');
const data = document.querySelector('input').value;




//CONSOLE LOG
console.log(btnStart);
console.log(btnSubmit);
console.log(data);