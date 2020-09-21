const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        // console.log('Mostrar todas las tareas por hacer');

        let listado = porHacer.getListado();

        console.log('======Por Hacer======'.cyan);
        for (let tarea of listado) {
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            /*let estado;
            if (tarea.completado === false) {
                estado = 'SIN COMPLETAR';
                console.log('Estado: ', estado.red);
            } else {
                estado = 'COMPLETADA';
                console.log('Estado: ', estado.green);
            }*/
        }
        console.log('====================='.cyan);
        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        break;

    default:
        console.log('Comando no es reconocido');
        break;
}