const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors');


const { base, listar, hasta } = argv;
console.clear();



crearArchivo( base, listar, hasta )
    .then( (nombreArchivo) =>{
        console.log(nombreArchivo .yellow, 'creada'.blue );
    } )
    .catch( err => console.log(err) );


// const base = 3;


// Extraer Argumentos desde la consola
// const [ , ,argumento = 'base=5'] = process.argv;
// const [ , base=5] = argumento.split('=');
// console.log(base)

 