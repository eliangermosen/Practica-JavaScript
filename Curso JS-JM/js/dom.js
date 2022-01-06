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

/* CAP 66. DOM: DOM: Texto y HTML */

const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
</p>
<p>
Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
<mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>
`;

//no es parte del standard fue credada para internet explorer
//$whatIsDOM.innerText = text;//no reconoce las etiquetas html
$whatIsDOM.textContent = text;

//textContent: Es la propiedad standard
//innerText: fue credada para internet explorer
//ambas sirven para agregar contenido textual a un elemento

//reemplaza lo que tenga como contenido y agrega contenido HTML
$whatIsDOM.innerHTML = text;

//usar textContent cuando solo se le agregara texto
//usar innerHTML cuando solo se le agregara codigo HTML

$whatIsDOM.outerHTML = text;
//reemplaza el elemento del dom por lo que se le pase.
//en este caso el parrafo que-es por los tres que estan 
//dentro de text

/* CAP 67. DOM Traversing: Recorriendo el DOM */

const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);//hijos de cards
console.log($cards.children[2]);
console.log($cards.parentElement);//retorna el elemento padre
//console.log($cards.firstChild);//primer hijo nodo
console.log($cards.firstElementChild);//primer elemento hijo 
console.log($cards.lastElementChild);//ultimo elemento hijo 
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));//es nueva esta funcionalidad
//buscara el padre mas cercano del tipo de selector que le demos
console.log($cards.closest("body"));
//tercer hijo de cards | cual es la section mas cercana
console.log($cards.children[3].closest("section"));

/* CAP 68. DOM: Creando Elementos y Fragmentos */

const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("ANIMALS"),
$figure2 = document.createElement("figure")
;

// PRIMERA FORMA

$figure.classList.add("card");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "ANIMALS");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

// SEGUNDA FORMA

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera","Verano","Otonio","Invierno"],
$ul = document.createElement("ul");

//no es buena practia
document.write("<h3>ESTACIONES EL ANIO</h3>");
document.body.appendChild($ul);

estaciones.forEach(el=> {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

const contienetes = ["Africa","Ameria","Asia","Europa","Oceania"],
$ul2 = document.createElement("ul");

document.write("<h3>CONTIENENTES DEL MUNDO</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";
contienetes.forEach(el => {
    $ul2.innerHTML +=`<li>${el}</li>`
});

// TERCERA FORMA

//tecnica de fragmento solo agrega una sola vez al dom
//en vez de ir agregando 200 una detras e otra

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

  meses.forEach(el => {
      const $li = document.createElement("li");
      $li.textContent = el;
      $fragment.appendChild($li);
  });

document.write("<h3>MESES DEL ANIO</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

//de esta manera solo se le hace una insercion al DOM
//es una manera mas optima para el navegador del usuaio
