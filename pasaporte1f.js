/*El aeropuerto El Dorado se encuentra en remodelación y requiere un programa para suministrarlo a su personal de seguridad con el objetivo de brindar información a los turistas sobre donde se debe tramitar las salidas internacionales para nacionales y extranjeros. Se le solicita diseñar este programa para que reciba el primer dígito de un número de pasaporte y que muestre el valor booleano que indique si el turista es del país o extranjero. Todos los No. de pasaporte que inicien con la letra A son nacionales */

const pasaporteLetra = prompt(
  "Por favor; ingrese la primera letra de su pasaporte"
).toUpperCase();
const pasaporte = prompt("Ingrese el primer número del pasaporte");
const numeroPasaporte = `${pasaporteLetra}${pasaporte}`;
console.info(`N° Pasaporte: ${numeroPasaporte}`);

// Determinar si es nacional o extranjero.
const esNacional = pasaporteLetra === "A";
const esExtranjero = !esNacional;

console.log("El usuario es Nacional: " + esNacional);

alert((esNacional && "Es nacional") || "Es extranjero");
