/*De un operario se conoce su sueldo y años de antiguedad. Se pide crear un programa que lea los datos de entrada y muestre en consola el valor booleano de las siguientes comparaciones:

1. El sueldo es inferior a $2000 us y su antiguedad es igual o superior a 10 años?
2. El sueldo es inferior a $2000 us o su antiguedad es menor a 10 años?
3. El sueldo es mayor o igual a $2000 us? */

// Pedir al usuario que ingrese el sueldo y los años de antigüedad
var sueldo = prompt("Ingrese el sueldo del operario:");
var antiguedad = prompt("Ingrese los años de antigüedad del operario:");

// Convertir los valores ingresados a números
sueldo = parseFloat(sueldo);
antiguedad = parseInt(antiguedad);

// Realizar las comparaciones y mostrar los resultados en la consola
console.log(
  "¿El sueldo es inferior a $2000 US y su antigüedad es igual o superior a 10 años?"
);
console.log(sueldo < 2000 && antiguedad >= 10);

console.log(
  "¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 años?"
);
console.log(sueldo < 2000 || antiguedad < 10);

console.log("¿El sueldo es mayor o igual a $2000 US?");
console.log(sueldo >= 2000);
