//console.log(module);
//console.log(process.argv);

//requireds
//const fs = require('fs'); //Existe en node, se define y nada más
//const fs = require('express'); //Paquetes no nativos de node, paquetes externos
//const fs = require('./fs'); //Paquetes propios dentro del proyecto, hay que indicar el path

var colors = require('colors');
var colors = require('colors/safe');
const argv = require('./config/yargs').argv;
/*const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: '10'
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: '10'
        }
    })
    .help()
    .argv;*/

//const multiplicar = require('./multiplicar/multiplicar')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`archivo creado:`, colors.green(archivo));
            })
            .catch(err => {
                console.log(err);
            });
        break;
    default:
        console.log('Comando desconocido');

}



//let base = '5';
//let data = '';

/*for (let i = 1; i <= 10; i++) {
    data += `
                            $ { base } * $ { i } = $ { base * i }\
                            n `;
}

fs.writeFile(`
                            tablas / tabla - $ { base }.txt `, data, (err) => {
    if (err) throw err;
    console.log(`
                            El archivo tabla - $ { base }.txt ha sido creado `);
});*/

//let argv = process.argv
//let parametro = argv[2];
//let base = parametro.split('=')[1];
/*console.log(argv);
crearArchivo(base)
    .then(archivo => {
        console.log(`
                            archivo creado $ { archivo }
                            `);
    })
    .catch(err => {
        console.log(err);
    });*/