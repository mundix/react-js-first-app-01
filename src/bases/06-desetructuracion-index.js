// Desestructuracion 
//asignacion desestructurante 

const person = {
    name : 'Tony',
    age: 45,
    password: 'ironman',
}

//Esto es tedioso
console.log(person.name);
console.log(person.age);
console.log(person.password);

//ASignacion desestructurante 
// const {name:name2} = person; //extrae dentor de la llave de este objeto 'person' 
const {name, age, password} = person; //extrae dentor de la llave de este objeto 'person' 
// console.log(name2); // debo usar nombre2, si no , da error de que noe sta definido.
console.log(name); 
console.log(age); 
console.log(password); 

// const retornaPersona = (usario) => {
//     const { age, password, name} = usario;
//     console.log(age, password, name);
// }

//se puede poner entre llaves el argumento { obj.property, obj.property2, obj.property3, ... }para extraer solo lo que me interesa 
// const retornaPersona = ({clave, name, age, range = 'Capitan'}) => { //valor por defecto rango 
//     // console.log( name, age, range);
//     return  {
//         nombreClave: clave,
//         years: age
//     }
// }

const getContext = ({password, name, age, range = 'Captain'}) => { //valor por defecto rango 
    return  {
        nombreClave: password,
        years: age,
        range: range,
        latlng: {
            lat: 14.454098508,
            lng: 43.3403904
        }
    }
}

// retornaPersona(person);
const avenger = getContext( person );
console.log(avenger);
// const { nombreClave, years, range, latlng} = getContext( person );
const { nombreClave, years, range, latlng: {lat, lng}} = getContext( person ); //para buscar el lat y el lng
console.log(nombreClave, years, range);
// console.log(latlng); //ya no existe
console.log(lat, lng); //asi se extrae 