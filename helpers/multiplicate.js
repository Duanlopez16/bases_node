const fs = require('fs');
require('colors');

const crear_archivo = async(table = 5, limit = 10, listar) => {

    try {
        let salida = '';

        for (let i = 1; i <= limit; i++) {
            salida += `${table} ${'x'} ${i} = ${table * i} \n`
        }

        fs.writeFileSync(`./salida/tabla-${table}.txt`, salida);
        if (listar) {

            console.log(`===================`.rainbow);
            console.log(`   Tabla del ${table}  `.rainbow);
            console.log(`===================`.rainbow);

            console.log(salida);
        }
        return `tabla-${table}.txt`;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crear_archivo
}