const fs = require('fs'); //Existe en node, se define y nada más
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================'.green);
    console.log(`  Tabla de ${ base }  `.green);
    console.log('================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base } * ${i} = ${base * i}`);
    }
}

//module.exports.crearArchivo
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base } * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
        });
    })
}

//Para poner pública la función
module.exports = {
    crearArchivo,
    listarTabla
}