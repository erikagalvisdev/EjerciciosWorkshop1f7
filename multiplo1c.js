//Crear una fórmula para saber si un número es o no es un múltiplo de 2.

//Activar prompt para recibir datos de usuario si se quiere, descomentar
//let numero = parseInt(prompt("Por favor señor usuario ingrese un número"));

let numero = 6; //cambiar el número si se quiere cambiar por otro

let esMultiplo = numero % 2 === 0 && numero !== 0;

console.log("El número: " + numero + " es múltiplo de 2");
