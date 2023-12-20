/*acer un algoritmo con JavaScript que reciba cualquier letra del 
abecedario y muestre en consola el valor booleano que indique si es o no 
una vocal. */

const letra = "i"; // cambiar vocal para pruebas
const esVocal =
  letra === "a" ||
  letra === "e" ||
  letra === "i" ||
  letra === "o" ||
  letra === "u";

console.log("La " + letra + " que ingresaste es una: " + esVocal);
