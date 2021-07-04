// variables 

//Never use var for declare vriables , we are gonna work with let and const =>to store data 

const first_name = 'Edmundo';
const last_name = 'Pichardo';

let valorDado = 5; 
valorDado = 4;

// no se puede incilazr una variable let mas de una ves, por que ya fue declarado.


console.log(first_name, last_name, valorDado); //ValorDado es 4 

//Variabes de sopce 
 if(true) { //<- solo existe dentro de este scope "if() { ... } "
     let valorDado = 19;
     console.log(valorDado); //imprime 19
 }

 console.log(valorDado); //imprime 4 