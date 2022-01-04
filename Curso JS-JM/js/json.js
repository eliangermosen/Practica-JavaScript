/* CAP 59. JSON */
//es un traductor de un lenguaje a otro. Ex: php a python.
const json = {
    cadena: "Jon",
    numero: 35,
    booleano: true,
    arreglo: ["correr", "programar", "cocinar"],
    objeto: {
        twitter: "@jonmircha",
        email: "jonmircha@gmail.com"
    },
    nulo: null
}

console.log(json);
// todo archivo json debe empezar con apertura de corchetes
// las propiedades y valores deben estar dentro de comillas dobles

//json es un standard del lenguaje y funcionara para el
//JS de los navegadores como del servidor node js.

console.log(JSON);
//parse: analizara una notacion json y lo convertira 
//a un tipo de dato que JS valide como arreglo, boolean, etc...

// console.log("{}");
console.log(JSON.parse("{}"));
        // console.log("[1,2,3]");
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("19"));
console.log(JSON.parse('"Hola Mundo"'));
console.log(JSON.parse("null"));
// console.log(JSON.parse("undefined"));

//stringify: convierte un objeto o valor valido
//en JS y a cadena de texto

console.log(JSON.stringify({}));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({ x: 2, y: 10 }));
console.log(JSON.stringify({ json }));

console.log(JSON.parse('{"cadena":"Jon","numero":35,"booleano":true,"arreglo":["correr","programar","cocinar"],"objeto":{"twitter":"@jonmircha","email":"jonmircha@gmail.com"},"nulo":null}'));

//parse: analiza una cadena que tenga formato valido
//de json y lo convierte a objeto JS.
//stringify: hace lo contrario. A partir de un 
//objeto valido en JS lo convierte a una cadena de texto.
        
//EJ: un comercio electronico php envia en formato json
//cadena de texto, el banco python captura ese json y lo
//convierte a objeto python que pueda entender.