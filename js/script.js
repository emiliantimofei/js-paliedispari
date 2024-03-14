/*

Palidroma check

Chiedere all’utente di inserire una parola check
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. check
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). check
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti. 

*/


function isPalindrome(word) { // funzione (isPalindrome) prende una parola inserita quando la si evoca
  const lowerCaseWord = word.toLowerCase(); 
  // crea una costante (lowerCaseWord) che controlla la insensitività
  return lowerCaseWord === lowerCaseWord.split('').reverse().join('');
  /* 
  la funzione mi restituisce true se la parola è palindroma perchè prima con split la fa diventare un array contenente le lettere della parole inserite dall'utente, con reverse inverte l'ordine delle stesse ed infine join fa ritornare l'array in una stringa!
  */
}


const parola = prompt('Inserisci una parola'); 
// variabile che prende il valore dell'utente con un prompt

console.log(isPalindrome(parola));
// stampa di 0 o 1 del risultato della funzione isPalindrome


// Funzione per generare un numero randomico 
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// Funzione per dire se un numero è pari o dispari
function isEven(num) {
  return num % 2 === 0;
}
  
// scelta utente (pari or dispari)
const userChoice = prompt("Scegli pari o dispari");
  
// scelta utente (numero da 1 a 5)
  const userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5"));
  
// genera un numero randomico per il pc
const computerNumber = getRndInteger(1, 5);
  
// mostra numero del pc
console.log("Numero generato dal computer: " + computerNumber);
  
// calcola la somma
const sum = userNumber + computerNumber;
  
// determina se la somma è pari
const sumIsEven = isEven(sum);
  
// Annuncia il vincitore
if (sumIsEven === (userChoice === "dispari")) {
  console.log("Hai vinto!");
} else {
  console.log("Hai perso. Il computer ha vinto.");
}





