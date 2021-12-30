/* 
ORDENAMIENTO DE CODIGO EN JS:
1-IMPORTACION DE MODULOS.
2-DECLARACION DE VARIABLES.
3-DECLARACION DE FUNCIONES.
4-EJECUCION DE COIGO.
*/

import saludar, {Saludar, PI, usuario} from "./constantes.js";
// import {sumar, restar} from "./aritmetica.js";
///SE LE PUEDE DAR ALIAS A LAS INSTANCIAS DE IMPORTACIONES
import {aritmetica as calculo} from "./aritmetica.js";

console.log("archivo modulos.js");
console.log(`PI: ${PI}, ${usuario}`);

// console.log(sumar(4,4));
// console.log(restar(10,4));
// console.log(aritmetica.sumar(4,4));
// console.log(aritmetica.restar(10,4));
console.log(calculo.sumar(4,4));
console.log(calculo.restar(10,4));

saludar();

let saludo = new Saludar();
saludo;