const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la cantidad de artículos comprados: ', (cantidadArticulosInput) => {
    const cantidadArticulos = parseInt(cantidadArticulosInput);


    rl.question('Ingrese el precio total de la compra: ', (precioTotalInput) => {
        const precioTotal = parseFloat(precioTotalInput);


        let descuento = 0;
        if (cantidadArticulos >= 2 && cantidadArticulos <= 10) {
            descuento = 0.05;
        } else if (cantidadArticulos >= 11 && cantidadArticulos <= 20) {
            descuento = 0.10;
        } else if (cantidadArticulos > 20) {
            descuento = 0.15;
        }


        const montoDescuento = precioTotal * descuento;
        const precioFinal = precioTotal - montoDescuento;


        console.log(`Descuento aplicado: ${descuento * 100}%`);
        console.log(`Monto del descuento: $${montoDescuento.toFixed(2)}`);
        console.log(`Precio final después del descuento: $${precioFinal.toFixed(2)}`);

        rl.close();
    });
});