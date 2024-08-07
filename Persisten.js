"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var precios = [525, 3500, 400, 1999];
var productos = ["Leche", "Galletitas", "Harina", "Queso"];
//Fun para guardar Array en archivo
function guardarArrayEnArchivo(array, nombreArchivo) {
    fs.writeFileSync(nombreArchivo, JSON.stringify(array));
}
//Fun leer array desde archivo
function leerArrayDesdeArchivo(nombreArchivo) {
    var data = fs.readFileSync(nombreArchivo, "utf-8");
    return JSON.parse(data);
}
//guardar los arrays en archivos
guardarArrayEnArchivo(precios, "precios.txt");
guardarArrayEnArchivo(productos, "productos.txt");
//leer los arrays desde archivos}
var preciosRecuperados = leerArrayDesdeArchivo("precios.txt");
var productosRecuperados = leerArrayDesdeArchivo("productos.txt");
//ver resultado por console
console.log("Precios recuperados", preciosRecuperados);
console.log("Productos recuperados", productosRecuperados);
