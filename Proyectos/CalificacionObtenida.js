const readline = require('readline');

// Configurar la interfaz de entrada/salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntar al usuario por la calificación
rl.question('Ingrese la calificación del alumno (0-100): ', (input) => {
    const calificacion = parseInt(input);

    // Determinar la letra correspondiente a la calificación
    let letra;
    if (calificacion >= 90 && calificacion <= 100) {
        letra = 'A';
    } else if (calificacion >= 80 && calificacion < 90) {
        letra = 'B';
    } else if (calificacion >= 70 && calificacion < 80) {
        letra = 'C';
    } else if (calificacion >= 60 && calificacion < 70) {
        letra = 'D';
    } else if (calificacion >= 50 && calificacion < 60) {
        letra = 'F';
    } else {
        letra = 'X'; // X indica que la calificación ingresada es inválida
    }

    // Mostrar el resultado
    if (letra === 'X') {
        console.log("Calificación inválida.");
    } else {
        console.log("La calificación del alumno es: " + letra);
    }

    rl.close();
});