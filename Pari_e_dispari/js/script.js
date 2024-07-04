//permetto all'utente si scegliere tra "pari" e "dispari"
const evenOrOdd = prompt("Scegli o pari o dispari")

//permetto l'inserimento di un numero che vada da 1 a 5 da parte dell'utente
const insertNumber = prompt("Digita un numero che vada 1 a 5: ");
let userNumber = parseInt(insertNumber);
console.log(userNumber)

//imposto una funzione che crei un numero randomico che parta 1 fino a 5
let computerNumber = Math.floor(Math.random() * 5) + 1; 
console.log(computerNumber)


let somma = userNumber + computerNumber;
console.log(somma)





function controllo_somma(result) {
    
    let somma = userNumber + computerNumber;
    console.log(somma)

    let total = userNumber + somma;
    console.log(total)

    if (total % 2 === 0) {
        result = "Il giocatore vince!"
        console.log(result);
    }
    else (result = "Il giocatore perde")  

/*
    if (somma = userNumber % 2 === 0) {
        result = "Il giocatore vince!"
        console.log(result);
    }

    if (somma = userNumber % 2 !== 0) {
        result = "Il giocatore vince!"
        console.log(result);
    }

    else ("Il giocatore perde")
    */
   console.log(value)
}
