// Arrays 

// const arreglo = new Array(); //no se recomienta , con la excepcion 
//de crearlo con un tamano fijo o predefinido al iniciar 
// const arreglo = new Array(100); //es la unica excepcion
// arreglo.push(1); //se anade  , eso quiere decir que se puede seguir agregando aun que se definio el 100
//no es recomendable utilizar el push por que modifica el objeto principal

// para insertar algo en un arreglo es de otra forma
//inicializar un array  const arreglo = [1,2,3,4];

// let arreglo2 = arreglo;
// arreglo2.push(5); //no se debe usar asi aun que se puede 
// let arreglo2 = [ arreglo, 5]; //la forma de usarlo y agregar correctament es usando los ...
const arreglo = [1,2,3,4];
let arreglo2 = [ ...arreglo, 5]; //operador spread 
//metodo map que viene en los arreglos

const arreglo3 = arreglo2.map(function(item) {
    return item * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);