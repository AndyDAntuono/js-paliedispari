//permetto l'inserimento di un numero che vada da 1 a 5 da parte dell'utente
const userNumber = parseInt(prompt("Digita un numero che vada 1 a 5: "));
console.log(a)

//imposto una funzione che crei un numero randomico che parta 1 fino a 5
let computerNumber = Math.floor(Math.random() * 5) + 1; 
console.log(b)

//imposto una funzione che mi pemette di addzionare il numero inserito dall'utente con quello randomico del computer

function controllo_somma() {
    
    let somma = userNumber+computerNumber;

    if ((somma % 2 == 0) = (userNumber % 2 == 0) {
        console.log("L'utente vince")
    }

}