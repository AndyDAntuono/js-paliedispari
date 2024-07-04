//creo una funzione che ha il compito di suddividere, invertie e riunire le lettere della parola inserita dall'utente
function contollo_palindromo(parola) {

    let reverseWord = parola.split("").reverse().join("");

    if (parola === reverseWord) {
        console.log("la stringa è palindroma")
    }
    else {
        console.log("La stringa non è palindroma")
    }
}

//Permetto l'inserimento della parola da parte dell'utente
const parola = prompt("Digita una parola: ")

contollo_palindromo(parola)