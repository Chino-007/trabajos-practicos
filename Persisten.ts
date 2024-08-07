import * as fs from "fs";

let precios: number[] = [525, 3500, 400, 1999];
let productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];

//Fun para guardar Array en archivo
function guardarArrayEnArchivo(array: any[], nombreArchivo: string) {
    fs.writeFileSync(nombreArchivo, JSON.stringify(array));
}
//Fun leer array desde archivo
function leerArrayDesdeArchivo(nombreArchivo: string): any[] {
    let data = fs.readFileSync(nombreArchivo, "utf-8");
    return JSON.parse(data);
}

//guardar los arrays en archivos
guardarArrayEnArchivo(precios, "precios.txt");
guardarArrayEnArchivo(productos, "productos.txt");
//leer los arrays desde archivos}
let preciosRecuperados: number[] = leerArrayDesdeArchivo("precios.txt");
let productosRecuperados: string[] = leerArrayDesdeArchivo("productos.txt");
//ver resultado por console
console.log("Precios recuperados", preciosRecuperados);
console.log("Productos recuperados", productosRecuperados);