//Hay que exportarlo para que funcione
// const heroes = [{
// export const heroes = [{
const heroes = [{ //Para usar exportar todo 
    id: 1,
    name: 'Batman',
    owner: 'DC'
}, {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel'
}, {
    id: 3,
    name: 'Superman',
    owner: 'DC'
}, {
    id: 4,
    name: 'Flash',
    owner: 'DC'
}, {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel'
}, ];

//si quiero crear otro mas una exportacion individual ,  queresmo eso   tamtien 
// export const owners = ['DC', 'Marvel'];
 const owners = ['DC', 'Marvel'];
// en el import: import heroes, {owners} from './data/heroes' ;
//asi puedo obetner mas exportaciones 

//la forma correcta para exportar por defecto es  aqui debajo 
// export default heroes;


//puedo tener 
// Exportar todo
export {
    heroes as default,
    owners
}