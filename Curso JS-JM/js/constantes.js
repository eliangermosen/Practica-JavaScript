export const PI = Math.PI;
///con export solo exporto lo que necesite
export let usuario = "Elian";
/// export default let password = "qwerty";//ESTO ES UN ERROR
let password = "qwerty";
//export default password;

///PARA EXPORTAR DE MANERA DIRECTA O POR DEFECTO SE UTILIZA DEFAULT
export default function saludar(){
    console.log(`HOLA MODULOS +ES6`);
}
///no pueden haber dos funciones o variables u obejtos por default

const hola = () => console.log("HOLA");

export class Saludar{
    constructor(){
        console.log(`HOLA CLASES +ES6`);
    }
}