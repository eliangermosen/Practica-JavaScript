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

/* CAP 69. DOM: Templates HTML */

const $cardsTemplate = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragmentTemplate = document.createDocumentFragment(),
cardsContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
];

cardsContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;
    
    //clonando nodo del documento
    let $clone = document.importNode($template,true);
    //con true se le dice que haga copia de toda la estructura
    //con false solo lo haria para etiqueta de apertura y cierre de template

    $fragment.appendChild($clone);
});

//se le agrega al elemento card el fragmento 
//con solamente una inserccion
$cardsTemplate.appendChild($fragment);

//las etiquetas template no se renderizan en el dom
//porque el objetivo de esta es para ser un patron a seguir

/* CAP 70. DOM: Modificando Elementos (Old Style) */

/* const $cardsElement = document.querySelector(".cards"),
$newCard = document.createElement("figure"),
$cloneCards = $cardsElement.cloneNode(true);

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;

$newCard.classList.add("card"); */

//reemplazando el cardelement numero 3 por new card
//$cardsElement.replaceChild($newCard, $cardsElement.children[2]);

//insertar antes de un nodo especifico
//$cardsElement.insertBefore($newCard,$cardsElement.firstElementChild);

//eliminado en especifico
// $cardsElement.removeChild($cardsElement.lastElementChild);

// document.body.appendChild($cloneCards);

/* CAP 71. DOM: Modificando Elementos (Cool Style) */

/*
.insertAdjacent...
  .insertAdjacentElement(position, el) -nodo de tipo elemento
  .insertAdjacentHTML(position, html) -formato html
  .insertAdjacentText(position, text) -nodo de texto

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/

const $cardsElement = document.querySelector(".cards"),
$newCard = document.createElement("figure");

let $contentCrad = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
`;

$newCard.classList.add("card");
$newCard.insertAdjacentHTML("beforeend",$contentCrad);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");

// $cardsElement.insertAdjacentElement("afterbegin", $newCard)

// $cardsElement.prepend($newCard);//hijo primero
// $cardsElement.append($newCard);//ultimo hijo del nodo referencia
// $cardsElement.before($newCard);//hermano anterior
// $cardsElement.after($newCard);//hermano posterior

/* CAP 72. DOM: Manejadores de Eventos */

/*
Los eventos son los mecanismos que tenemos en JavaScript 
para controlar las acciones del usuario y definir el 
comportamiento del documento en cierto momento o cuando 
se cumplan ciertas condiciones.
Las funciones que se ejecutan en un evento se llaman Event 
Handler (Manejador de Eventos).
https://developer.mozilla.org/en-US/docs/Web/Events
*/

//funcion manejadora de eventos
function holaMundo(){
    alert("Hola Mundo");
    //cuando una funcion se ejecuta dentro de un evento podemos
    //acceder a un objeto especial event
    console.log(event);
}

//Evento con Manejador Semantico

const $eventoSemantico = document.getElementById("evento-semantico");

//formula de evento semantico: 
//elemento html que se le aplicara el evento 
// - nombre evento - igualarlo a la funcion a ejecutar
$eventoSemantico.onclick = holaMundo;//sin parentesis para que no se ejecute inmediato

//toda funcion manejadora de evento no puede recibir parametros
$eventoSemantico.onclick = function(e){
    alert("Hola Mundo Manejador de Eventos Semántico");
    console.log(e);
    console.log(event);
};

//Evento con Manejador Multiple

const $eventoMultiple = document.getElementById("evento-multiple"),
$eventoRemover = document.getElementById("evento-remover");

//addEventListener solo se usa en eventos multiples
//se llama el evento y la funcion a ejecutar

$eventoMultiple.addEventListener("click", holaMundo);//sin parenetesis
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo Manejador de Eventos Múltiple");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});

/* CAP 73. DOM: Eventos con Parámetros y Remover Eventos */

function saludar(nombre = "Desconocid@"){
    alert(`HOLA ${nombre}`);
    console.log(event); //e == event
}

$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Elian");
});

const removerDobleClick = (e) =>{
    alert(`Removiendo ele evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick", removerDobleClick);

//para pasarle parametros a una funcion se usa arrow functions

/* CAP 74. DOM: Flujo de Eventos (Burbuja y Captura) */

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
$linksEventos = document.querySelector(".eventos-flujo a");
console.log($divsEventos);

function flujoEventos(e){
console.log(`HOLA TE SALUDA ${this.className}, EL CLICK LO ORIGINO ${e.target.className}`);
// e.stopPropagation();//eliminando propagacion
};

$divsEventos.forEach(div=>{
  //tercer parametro opcional de addEventListener false por
  //default fase de burbuja del mas interno al mas externo
  /* div.addEventListener("click", flujoEventos, false); */
  
  //fase de captura seria con true del mas externo al mas interno
  // div.addEventListener("click", flujoEventos, true);

  /* div.addEventListener("click", flujoEventos, {
    capture: false, //lo mismo que la linea 508
    once: true //especifica que solo se puede ejecutar una vez
  }); */
})

/* CAP 75. DOM: stopPropagation & preventDefault */

/* $linksEventos.addEventListener("click", (e) =>{
  alert("HOLA SOY ELIAN");
  e.preventDefault();//cancela el comportamiento por default en este caso abrir mi github
  e.stopPropagation();//eliminando propagacion
}); */

/* CAP 76. DOM: Delegación de Eventos */

//con esta delegacion en este unico addEventListener se mejora
//el rendimiento de nuestra pagina web y solo se hace una asignacion
document.addEventListener("click", (e)=>{
  console.log("CLICK EN", e.target);

  if(e.target.matches(".eventos-flujo div")){
    flujoEventos(e);
  };

  if(e.target.matches(".eventos-flujo a")){
    alert("HOLA SOY ELIAN");
    e.preventDefault();
  };
});

//esta es la manera mas optima de trabajar con los eventos 
//en JavaScript

/* CAP 77. BOM: Propiedades y Eventos */

/*
El evento DOMContentLoaded es disparado cuando el documento
HTML ha sido completamente cargado y parseado, sin esperar 
hojas de estilo, imágenes y subtramas para finalizar la 
carga.
El evento load se dispara cuando se ha detectado la carga 
completa de la página.
Es un error frecuente usar load cuando DOMContentLoaded es 
mucho más apropiado.
Peticiones asíncronas pausan el parseo del DOM.
*/

/* window.addEventListener("resize", e => {
  console.clear();
  console.log("EVENTO RESIZE");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("scroll", e => {
  console.clear();
  console.log("EVENTO SCROLL");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("load", (e) => {
  console.log("Evento Load");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

//mas eficiente
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("Evento DOMContentLoaded");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
}); */

/* CAP 78. BOM: Métodos */

// window.alert("Alerta");
// window.confirm("Confirmacion");
// window.prompt("Aviso");

const $btnAbrir = document.getElementById("abrir-ventana"),
$btnCerrar = document.getElementById("cerrar-ventana"),
$btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", e=>{
  // window.open("https://github.com/Elianmtg");
  ventana = open("https://github.com/Elianmtg");
});

$btnCerrar.addEventListener("click", e=>{
  // window.close();
  ventana.close();
});

$btnImprimir.addEventListener("click", e=>{
  window.print();
});

