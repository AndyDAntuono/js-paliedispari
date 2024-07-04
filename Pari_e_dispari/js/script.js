//permetto l'inserimento di un numero che vada da 1 a 5 da parte dell'utente
const a = parseInt(prompt("Digita un numero che vada 1 a 5: "));
console.log(a)

//imposto una funzione che crei un numero randomico che parta 1 fino a 5
let b = Math.floor(Math.random() * 5) + 1; 
console.log(b)