const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'La base de la tabla de multiplicar'
    })
    .option('v', {
        alias: 'ver',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola.'
    }).option(
        'l', {
            alias: 'limite',
            type: 'number',
            default: 10,
            describe: 'Numero de veces de la tabla de multiplicar.'
        }
    )
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero.';
        }
        return true;
    })
    .argv;

module.exports = argv;