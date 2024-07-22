const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el precio original del producto: ', (precioOriginalInput) => {
    const precioOriginal = parseFloat(precioOriginalInput);

    let descuento = 0;
    if (precioOriginal >= 600 && precioOriginal <= 999) {
        descuento = 0.05;
    } else if (precioOriginal >= 1000 && precioOriginal <= 1500) {
        descuento = 0.10;
    } else if (precioOriginal > 2000) {
        descuento = 0.15;
    }

    const montoDescuento = precioOriginal * descuento;
    const precioConDescuento = precioOriginal - montoDescuento;

    const impuesto = 0.10;
    const montoImpuesto = precioConDescuento * impuesto;
    const precioFinal = precioConDescuento + montoImpuesto;

    console.log(`Descuento aplicado: ${descuento * 100}%`);
    console.log(`Monto del descuento: $${montoDescuento.toFixed(2)}`);
    console.log(`Precio con descuento: $${precioConDescuento.toFixed(2)}`);
    console.log(`Impuesto aplicado: ${impuesto * 100}%`);
    console.log(`Monto del impuesto: $${montoImpuesto.toFixed(2)}`);
    console.log(`Precio final después de impuestos: $${precioFinal.toFixed(2)}`);

    rl.close();
});