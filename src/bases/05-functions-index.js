//Functions

// function greeting( name) 
// {
//     return `H3llo, ${name}`;
// }

const greeting = function (name) {
    return `H3llo, ${name}`;
}

//otra forma de hacerlo es sin usar function y poner la => 
const greeting2 = (name) => {
        return `H3llo, ${name}`;
}

// sigue siendo lo mismo que greeting2 
const greeting3 = (name) => `H3llo, ${name}`;
const greeting4 = () => `H3llo World`;

// greeting = 30;

// console.log(greeting('Goku'));


console.log(greeting('Vegeta'));
console.log(greeting2('Trunks'));
console.log(greeting3('Goku'));
console.log(greeting4());

//para usar el return de = () => { } se debe poner el return entre ( parentesis) 
//quedando asi ({ })
//forma incorrecta de hacer return
// const getUser = () => {
    // uid: '12323',
    // username: 'mundix'
// };
//sin la plabra return
// const getUser = () => ({
//     uid: '12323',
//     username: 'mundix'
// });

const getUser = () => ({
    uid: '12323',
    username: 'mundix'
});

const user = getUser();

console.log(user);

function getActiveUser(name)
{
    return {
        uid: '234234',
        username: name
    }
}

const activeUser = getActiveUser('pacman');
console.log(activeUser)

// Test: 
//1 Transformar a una funcion de Flecha 
//2. Tiene que retornar un objeto implicito 
//3. Pruebas 

const getActiveUser2 = (name) => ({
    uid: '43231',
    username: name
});
const activeUser2  = getActiveUser2('Yoshi');
console.log(activeUser2);