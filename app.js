const { crear_archivo } = require('./helpers/multiplicate');
const argv = require('./config/yargs');
require('colors');


console.clear();

crear_archivo(argv.b, argv.l, argv.v)
    .then(name_archivo => console.log(`El nombre del archivo es ${name_archivo}`.green))
    .catch(error => console.log(error.red));