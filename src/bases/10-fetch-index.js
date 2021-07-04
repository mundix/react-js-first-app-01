//Fetch Api

//Giphy API KEY
const apiKey = '9zTz9HOZZ1rm7RWLmEeCuaPTvaS6VmU4';

//Retorna un response  

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
//El argumento es una respuesta
// peticion.then( response => {
//     // console.log(response);
//     response.json() //retorna una promesa que resuelve lo que llega en el api.
//         .then( data => {
//             console.log(data);
//     }); 
//     //las promeas pueden encadenarse
// })
// .catch(console.warn);

peticion
.then( resp => resp.json()) //promesa en cadena
// .then( data => { // si usamos desestructuracion 
.then( ({ data }) => { // con la  desestructuracion , llega los parentecis y luego {} para la desestructuracion
    // console.log(data) 
        // console.log(data.images.original.url);
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img )
    })
.catch(console.warn);
//se puede hacer multiples catch , de manera individual