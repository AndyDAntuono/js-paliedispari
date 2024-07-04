//creo una funzione che ha il compito di suddividere, invertie e riunire le lettere della parola inserita dall'utente
function contollo_palindromo(parola) {

    const palindromo = parola.split("").reverse().join("");

    if (parola === contollo_palindromo) {
        console.log("la stringa è palindroma")
    }
    else {
        console.log("La stringa non è palindroma")
    }
}

//Permetto l'inserimento della parola da parte dell'utente
const parola = prompt("Digita una parola: ")

contollo_palindromo(parola)