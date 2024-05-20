//Estructuras de Datos
//Encontrar el elemento más grande del arreglo
//Dado el siguiente arreglo 
//arregloN [4,7,9,3,1,45,67,23,29,78,11,16]
//- Crear un programa que encuentre cuál es el número 
//más grande del arreglo e imprimirlo por consola
//- Almacenar el número más grande en una variable 
//global y pasarlo a una función para determinar si el 
//número es par o impar
import * as readlineSync from "readline-sync";
let numeros = [4,7,9,3,1,45,67,23,29,78,11,16];
console.log("El mayor de los números " + numeros.toString() + " es " + Math.max(...numeros));

let numero: number = readlineSync.questionInt("El mayor de los numeros es:");
if (numero === 0) {
  console.log("El número es (" + numeros + ").")
};

if (numero % 2 === 0) {
  console.log("El número ingresado es par.");
} else {
  console.log("El número ingresado es impar.");
};
let mensaje:string = 'Hola Global!!';
ambitoVariables();
function ambitoVariables() {
let mensaje:string;
mensaje = '()';
console.log(Math.max(...numeros));
//function numeros (numeros);{
  //  return  numeros % 2 !==0;
}


