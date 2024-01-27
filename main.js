//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
let HTMLnumbers = document.querySelector(".card");

let browserNumberArray = [];
for (i = 1; i <= 5; i++) {
  let casualNumbers = parseInt(Math.random() * 100);
  browserNumberArray.push(casualNumbers);
}
console.log(browserNumberArray);
browserNumberArray.forEach((num) => {
  HTMLnumbers.innerHTML += `<span class="container badge bg-secondary mb-5 d-inline">${num}</span>`;
});

//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

function reset() {
  HTMLnumbers.innerHTML = "";
}
let userNumbersArray = [];
let guessedNumbers = [];
function writeTheNumbers() {
  for (let index = 1; index <= 5; index++) {
    const writeNumbers = parseInt(prompt("Scrivi il numero che ti ricordi"));
    if (userNumbersArray.length < 5) {
      userNumbersArray.push(writeNumbers);
      console.log(userNumbersArray);
    }
  }

  //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
  userNumbersArray.forEach((el) => {
    console.log(el);
    if (browserNumberArray.includes(el)) {
      guessedNumbers.push(el);
      console.log(guessedNumbers);
    }
  });
  HTMLnumbers.innerHTML += `<h1> Hai indovinato ${guessedNumbers.length} numeri</h1>`;

  guessedNumbers.forEach((number) => {
    HTMLnumbers.innerHTML += `<span> Il numero : ${number} </span>`;
  });
}

const thirthySecondsTimer = setTimeout(reset, 5000);
const yourTurn = setTimeout(writeTheNumbers, 6000);
