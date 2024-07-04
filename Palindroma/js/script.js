//Permetto l'inserimento della parola da parte dell'utente
let parola = prompt("Digita una parola")

//creo una funzione che ha il compito di suddividere, invertie e riunire le lettere della parola inserita dall'utente
function contollo_parola(parola) {
    let palindromo = parola.split("").reverse().join();

    if (parola === palindromo.replaceAll (",", "")) {
        return true;
    }
    else {
        return false;
    }
}