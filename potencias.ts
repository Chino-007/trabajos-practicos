//*Realice un programa que devuelva la potencia de un número.
//La base y el exponente deben ser ingresados por teclado. 
//Sólo deben admitirse exponentes mayores o iguales a cero. 
//Recuerde que el resultado de un numero elevado a 0 es 1.
//Separe la lógica de calcular la potencia utilizando métodos

import * as rls from "readline-sync";

    let numeroBase : number = rls.questionInt("Ingrese un número base: "); 
    let numeroExponente : number = rls.questionInt("Ingrese un número exponente: ");
    let resultado = calcularPotencias (numeroBase, numeroExponente);

function calcularPotencias (numeroBase:number, numeroExponente:number): number{
	let resultado:number=1;
    numeroExponente=comprobarExponente (numeroExponente);
    for (let i:number =1; i<=numeroExponente; i++){
    resultado=resultado*numeroBase;
}
return resultado;
}

function comprobarExponente (exponenteComprobado: number):number{
    while (exponenteComprobado < 0 ){
        exponenteComprobado= rls.questionInt ('Ingrese un exponente mayor a "Cero":')
    }
    return exponenteComprobado;
}
console.log("El resultado de :"+ numeroBase + "^" + numeroExponente + "=" + resultado);
