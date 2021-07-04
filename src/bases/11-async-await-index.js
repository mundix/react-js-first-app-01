// Async and Await 

// const getImagePRomesa = () => {
    // return ...   
// }
// se puede simplificar muchisimo mas 
// const getImagePromise = () => new Promise( resolve => resolve('http://gpoggle.com'));
// getImagePromise().then(console.log);
//ahora con async
// const getImage = () => { es una function normal , para volverlo unapromesa se le pone async
const getImage = async() => {
    // const apiKey = '9zTz9HOZZ1rm7RWLmEeCuaPTvaS6VmU4';
    // Al fetch se le pone el await , para que funcione e awat la funcion debe tener le async antes del agumento si no nofunciona.
    // const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    //retorna una promesa que devuelve un response/ el await le dice , espera que esta promesa termine antes de ejcutar la siguiente linea de codigo. 
    //una ves termine puedo pensar que el codigo es sincrono
    // const data =  resp.json(); //este json neceita un await para esperar
    // const data =  await resp.json(); 
    // const {data} =  await resp.json(); //desestrucutrando la data
    // const { url } = data.images.original;
    // const img  = document.createElement('img');
    // img.src = url;
    // document.body.append(img);

    //PAra manejar los erreos con catch , se debe usas try and catch para estasestructuras 
    try {
        const apiKey = '9zTz9HOZZ1rm7RWLmEeCuaPTvaS6VmU4';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} =  await resp.json(); 
        const { url } = data.images.original;
        const img  = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch( error) {
        //manejo del error 
        console.error(error);
    }
}
getImage();

// console.log(getImage()) Para una funcion

//ahora cuando es una promesa 
// getImage().then(console.log);
// el await va de la mano del async 
// que es el await , nos ayuda a trabajr todo el codigo como si fuera asincrono. 

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
// peticion
// .then( resp => resp.json()) //promesa en cadena
// // .then( data => { // si usamos desestructuracion 
// .then( ({ data }) => { // con la  desestructuracion , llega los parentecis y luego {} para la desestructuracion
//     // console.log(data) 
//         // console.log(data.images.original.url);
//         const { url } = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append( img )
//     })
// .catch(console.warn);
