//Objects 
const person = {
    name: 'Tony',
    last: 'start',
    age: 45,
    address: {
        city: 'NY',
        zip: '93340',
        lat: 13.454345,
        lon: 32.349587
    }
};



console.log({
    person:person
}); //Estaos creando un neuvo ojeto  llamado persona.

//Es una forma de imprimr varias variabes 
console.log({
    person
}); //Estaos creando un neuvo ojeto  llamado persona.

// const person2 = person; //Copiando la referencia al espacio de memoria, de persona. 
// person2.name = 'Peter';
// console.log(person2);
// console.log(person); //Modificamos el objeto  , y la copia se modifico con el valor, 
//"mutacion del estado no se va a ceptar , es un probelma cuando se crea un clone , lo que se 
// es crear un nuevo objeto "
// const person2 = {nombre: } //operador scripts 
const person2 = {...person}; //con los ...person se copia como un clone del objeto. 
person2.name = 'Peter';
console.log(person2);

console.log(person);