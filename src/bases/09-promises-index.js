//Promise in JS 

import {getHeroesById, getHeroesByOwner} from './bases/08-export-index';
 
// const promesa = new Promise( (resolve, reject ) => {
//     setTimeout(() => {
//         console.log('2 Segundos despues,, y llama lo que esta dentro del then con resolve()');
//         const p1 = getHeroesById(2);
//         // resolve(hero); //le mando el arguneto heroe
//         resolve(p1);
//         // reject('No se pudo encontrar el hroe');

//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('Hero:', heroe); 
    
// })
// .catch( err => console.warn(err));

//Asi podemos usar los methods que devuelve la promesa 
const getHeroByIdAsync = ( id ) => {
    const promesa = new Promise( (resolve, reject ) => {
        setTimeout(() => {
            // console.log('2 Segundos despues,, y llama lo que esta dentro del then con resolve()');
            //Para usar el reject 
            const p1 = getHeroesById(id);
            if(p1) {
                resolve(p1);
            }else {
                reject('No se pudo encontrar el heroe'); 
            }

            // resolve(hero); //le mando el arguneto heroe
            // reject('No se pudo encontrar el hroe');
    
        }, 2000);
    });

    return promesa;
}

// getHeroByIdAsync(10).then( heroe => {
//     console.log('Heroe', heroe);
// })
// .catch( err => { 
//     console.warn(err.toString());
// });

//Asi el envia al console log el primer argumento por defecto igual para el catch 
getHeroByIdAsync(10).then( console.log)
.catch( console.warn);