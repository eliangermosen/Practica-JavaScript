/* CAP 60. WEB APIs */

// console.log(window);
// console.log(document);

/*HABLANDO*/
// let texto = "Hola, soy Elian Manuel";
// const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
// hablar(texto);

/* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */
/* https://developer.mozilla.org/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API */
/* https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model */

/* console.log(window);
console.log(document);
let texto = "Hola, soy tu amigo y docente digital... Jonathan MirCha";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto); */

/* CAP 61. DOM: Introducción */

console.log("ELEMENTOS DEL DOCUMENTO");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);//html
console.log(document.doctype);//tipo de documento
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);//muestra dos scripts debido al live server y el mio
// setTimeout(() => {
//     console.log(document.getSelection().toString());
// }, 3000);
//document.write("<h2>Hola Mundo</h2>");//no es buena practica utilizarlo

/* CAP 62. DOM: Nodos, Elementos y Selectores */

//anteriormente HOY DIA NO SE USAN
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
//esos 3 fueron reemplazados por los mas abajo

console.log(document.getElementById("menu"));//trabaja mas rapido

//por estos
console.log(document.querySelector("#menu"));//si se debe ponerl el . o #
console.log(document.querySelector("a"));//solo traera el primero que encuentre
console.log(document.querySelectorAll("a"));//los trae todos
console.log(document.querySelectorAll("a").length);
//trae todos los enlaces y por cada uno imprimelo en consola
document.querySelectorAll("a").forEach(el => console.log(el));
console.log(document.querySelector(".card"));//la primera
console.log(document.querySelectorAll(".card"));//todas
console.log(document.querySelectorAll(".card")[2]);//la posicion 3
console.log(document.querySelectorAll("#menu li"));//solo las li dentro del id menu
console.log(document.querySelector("#menu li"));//solo las li dentro del id menu

/* CAP 63. DOM: Atributos y Data-Attributes */

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));//forma correcta

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-DO");
console.log(document.documentElement.lang);

//se puede guardar en let o const mircha usa const
const $linkDOM = document.querySelector(".link-dom");
//todas las variables que van a almacenar elementos del dom 
//se declaran con signo de dolar como buena practica

$linkDOM.setAttribute("target", "_blank");//agregando atributo
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://www.youtube.com/");
console.log($linkDOM.hasAttribute("rel"));//validando si tiene ese atributo
$linkDOM.removeAttribute("rel");//eliminado atributo
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete al canal de YT"
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));//validando
console.log($linkDOM.removeAttribute("data-id"));//eliminado
console.log($linkDOM.hasAttribute("data-id"));

/* CAP 64. DOM: Estilos y Variables CSS */

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";//16px
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log(window.getComputedStyle($linkDOM));

//Variables CSS = Custom Properties CSS

const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;//aplica el color negro al background
$body.style.color = varYellowColor;//aplica el color amarillo a las letras

$html.style.setProperty("--dark-color","#000");//nuevo valor de la variable es negro puro
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);//asignando el nuevo color

/* CAP 65. DOM: Clases CSS */

const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));

$card.classList.add("rotate-45");//agregando clase
console.log($card.classList.contains("rotate-45"));//evaluando si contiene esa clase
console.log($card.className);
console.log($card.classList);

$card.classList.remove("rotate-45");//quitando clase
console.log($card.classList.contains("rotate-45"));

$card.classList.toggle("rotate-45");//como no tiene la clase se la agrega
console.log($card.classList.contains("rotate-45"));

$card.classList.toggle("rotate-45");//como tiene la clase se la elimina
console.log($card.classList.contains("rotate-45"));
// toggle se puede usar para el dark y light mode 

$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");//reemplaza la clase rotate-45 por rotate-135

$card.classList.add("opacity-80", "sepia");//agregando varias clases se separan por comas
$card.classList.remove("opacity-80", "sepia");//quitando varias clases se separan por comas
$card.classList.toggle("opacity-80", "sepia");//
