//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. 
let HTMLnumbers = document.querySelector('.card')
let emptyArray = []
for (i = 1 ; i <= 5 ; i++ ) {
    let casualNumbers = parseInt(Math.random()*100);
    console.log(casualNumbers);
    emptyArray.push(casualNumbers);
    
}
;

emptyArray.forEach((num => {
    HTMLnumbers.innerHTML += `<span class="container badge bg-secondary mb-5">${num}</span>`
}))


//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 

function reset(){
    HTMLnumbers.innerHTML = '';
}

function writeTheNumbers () {
    
    for (let index = 1; index <= 5; index++) {

    const writeNumbers = parseInt(prompt('Scrivi i numeri che ti ricordi'));
    let remeberedNumbers = []
    remeberedNumbers.push(writeNumbers)
    console.log(remeberedNumbers);
        
}
}



const thirthySecondsTimer = setTimeout(reset, 5000);
const yourTurn = setTimeout(writeTheNumbers, 6000);



//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.