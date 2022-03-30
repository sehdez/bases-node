const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type : 'number',
                    demandOption: true,
                    description: 'Es la base de la tabla de multiplicar'
                })
                .option('h', {
                    alias: 'hasta',
                    type : 'number',
                    default: 10,
                    description: 'Es el limite de la tabla de multiplicar'
                })
                .option( 'l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    description: 'Muestra la tabla en consola'
                })
                .check( (argv, options) => {
                    if ( isNaN(argv.b) || isNaN(argv.h) ){
                        throw 'Favor de ingresar un valor entero en los argumentos';
                    }
                    return true;
                })
                .argv;

module.exports = argv;