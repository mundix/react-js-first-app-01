//Template Strings 
const first = 'Edmundo';
const last = 'pichardo';

// const fullName = fist + ' ' + last;
// se usa "`" back algo 
//Si ponemos saltos de linea con las ` lo imprime 
// const fullName = `
//     ${first} 
//     ${last}
//     ${1+1} 
// `;
const fullName = `${first} ${last}`;
// tambien podemos hacer funciones dentro del ${ ... }
// const greeting = ' Hola Mundo';

console.log(fullName);


function getGreetings(name)
{
    return 'Hello World ' + name;
}

console.log(`Este es un texto: ${getGreetings(fullName)}`);