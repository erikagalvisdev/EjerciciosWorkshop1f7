// Pedir al usuario que ingrese el valor de su compra
var valorCompra = prompt("Ingrese el valor de su compra en COP:");

// Convertir el valor ingresado a número
valorCompra = parseFloat(valorCompra);

// Verificar si el valor de la compra es mayor o igual a $100,000
var calificaParaDescuento = valorCompra >= 100000;

// Mostrar el resultado en la consola
console.log("¿La compra recibe descuento?");
console.log(calificaParaDescuento);
