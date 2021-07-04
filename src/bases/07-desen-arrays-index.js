// Desestructuracion  arreglos
//asignacion desestructurante 

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log( personajes[0]);
// console.log( personajes[1]);
// console.log( personajes[2]);

//Desestructuracion de un arreglo con [ corchtes];
//const [ p1 ] = personajes;  // p1 = personaje 1 , como hago para pedir a vegeta , con una ","
const [ , , p3 ] = personajes;  // p1 = personaje 1 , como hago para pedir a vegeta , con una ","
// asi se obtiene el 3er argumento del array 

console.log(  p3 );

const retornaArray = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArray();
console.log(letras, numeros);

const getState = (value) => {
    return [value, () => { console.log('Hello Worlding')}];
}

const [ nombre, setNombre ]  = getState('Morbious');
console.log(nombre, setNombre);