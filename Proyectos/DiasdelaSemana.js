const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un número del 1 al 7 para ver el día de la semana: ', (input) => {
    const dia = parseInt(input);

    let NombreDia;
    90
    switch (dia) {
        case 1:
            nombreDia = 'Lunes';
            break;
        case 2:
            nombreDia = 'Martes';
            break;
        case 3:
            nombreDia = 'Miércoles';
            break;
        case 4:
            nombreDia = 'Jueves';
            break;
        case 5:
            nombreDia = 'Viernes';
            break;
        case 6:
            nombreDia = 'Sábado';
            break;
        case 7:
            nombreDia = 'Domingo';
            break;
        default:
            nombreDia = 'Número no valido. Por favor ingrese un número del 1 al 7.';
            break;
    }

    console.log(nombreDia);

    rl.close();
});