// Operacion Condicional ternario 

const activo  = true;

// let message = '';

// if(activo) {
//     message = 'activo';
// } else {
//     message = 'inactivo';
// }

const mensaje = (activo) ? 'activo' : 'inactivo';
console.log(mensaje);

const mensaje2 = activo && 'Hola mundo';
console.log(mensaje2);