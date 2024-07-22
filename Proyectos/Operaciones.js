const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el primer número: ', (num1Input) => {
    const num1 = parseFloat(num1Input);

    rl.question('Ingrese el segundo número: ', (num2Input) => {
        const num2 = parseFloat(num2Input);

        rl.question('Ingrese el operador (+, -, *, /): ', (operador) => {
            let resultado;
            let error = false;

            switch (operador) {
                case '+':
                    resultado = num1 + num2;
                    break;
                case '-':
                    resultado = num1 - num2;
                    break;
                case '*':
                    resultado = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        console.log('ERROR: División por cero no permitida.');
                        error = true;
                    } else {
                        resultado = num1 / num2;
                    }
                    break;
                default:
                    console.log('ERROR: Operador no válido.');
                    error = true;
                    break;
            }
            if (!error) {
                console.log(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);
            }

            rl.close();
        });
    });
});