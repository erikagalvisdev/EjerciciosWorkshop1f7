/*  i. Calcular su salario básico mensual del empleado.
    ii. Determinar si recibe o no subsidio de transportes. Un empleado recibe este subsidio cuando el salario mensual básico es menor o igual a $700.000 COP
    iii. Mostrar en consola el nombre del empleado, su salario básico mensual y si recibe o no subsidio de transporte*/

// Pedir al usuario que ingrese el nombre del empleado, salario básico por horas y horas trabajadas
var nombreEmpleado = prompt("Ingrese el nombre del empleado:");
var salarioPorHora = prompt(
  "Ingrese el salario básico por horas del empleado en COP:"
);
var horasTrabajadas = prompt(
  "Ingrese el número de horas trabajadas en un mes:"
);

// Convertir los valores ingresados a números
salarioPorHora = parseFloat(salarioPorHora);
horasTrabajadas = parseInt(horasTrabajadas);

// Calcular el salario básico mensual
var salarioMensual = salarioPorHora * horasTrabajadas;

// Determinar si recibe o no subsidio de transporte
var recibeSubsidioTransporte = salarioMensual <= 700000;

// Mostrar los resultados en la consola
console.log("Nombre del empleado: " + nombreEmpleado);
console.log("Salario básico mensual: $" + salarioMensual.toFixed(2));
console.log("¿Recibe subsidio de transporte? " + recibeSubsidioTransporte);
