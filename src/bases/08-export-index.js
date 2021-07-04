//Vamos a importar la parte de los heroes 
// import { heroes } from './data/heros';  
// import heroes from './data/heros-default';  
// import  heroes  from './data/heros';   //Ahroa este tiene exportar por defecto
// import { heroes , owners}   from './data/heros';   //En caso de usar exportar todo
import heroes, {   owners}   from '../data/heros';   //En caso de usar exportar todo pero con default

//sale undefined , hay que exportarlo en el archiov heroes.js
// console.log(heroes);


// const getHeroesById = (id) => {
    // return heroes.find( heroe => heroe.id === id );
// }
//tambien se puede poner: 
//Agregamos export para usarlo en el ejeercico de promises 
export const getHeroesById = (id) => heroes.find( heroe => heroe.id === id );


// console.log(getHeroesById(2));

const result = getHeroesById(2);
// console.log(result);
//Agregamos export para usarlo en el ejeercico de promises 
export const getHeroesByOwner = ( owner) => heroes.filter( (heroe) => heroe.owner === owner);
// console.log(getHeroesByOwner('DC'));

//Exportando functions 
// export  {
//     getHeroesById,
//     getHeroesByOwner
// } 