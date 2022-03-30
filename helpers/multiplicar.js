const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
    try{
        let salida = '' ;
        for ( let i = 1; i <= hasta; i++) {
            salida += ( ` ${ base } * ${ i } = ${ i * 5 }\n` );
        }
        fs.writeFileSync ( `./salida/tabla-${ base }.txt`, salida );
            if(listar){
                console.log('===================='.blue);
                console.log(`    Tabla del ${ base  }`.red);
                console.log('===================='.blue);
                console.log( salida.yellow );
            } 
            return `tabla-${ base }.txt`;
    }catch ( err ){
        throw err;
    }
}

module.exports = {
    crearArchivo
}
