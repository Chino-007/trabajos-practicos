/*Implemente un algoritmo de ordenamiento con el método Bubble Sort
 para que ordene un arreglo de longitud N en orden descendente*/
let numeros = [5, 3, 6, 2, 1, 8, 4];
bubbleSortDescendente(numeros);
console.log(numeros); // Salida: [8, 6, 5, 4, 3, 2, 1]
function bubbleSortDescendente(numeros: number[]): void {
    for (let i = 0; i < numeros.length - 1; i++) {
      for (let j = 0; j < numeros.length - i - 1; j++) {
        if (numeros[j] < numeros[j + 1]) {
          [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
        }
      }
    }
  }