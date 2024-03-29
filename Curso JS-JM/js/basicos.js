/*CAP 3. Variables: var VS let*/

        var hola = "Hola Mundo"; //var : la variable se hace global 
        let hello = "Hello World"; // let : variable de ambito de bloque
        //var es una mala practica de declaracion de variables
        //let buena practica de declaracion de variables
        console.log(hola);
        console.log(hello);
        console.log(window);
        console.log(window.hola);
        console.log(window.hello);

        //ambito de bloque
        //esto es un bloque - comentario de una linea
        /*esto es un comentario 
        de varias lineas*/

        //VAR
        console.log("*******var*******");
        var musica = "Rock";
        console.log("variable musica antes de bloque:", musica);
        {
            var musica = "POP";
            console.log("variable musica dentro del bloque:", musica);
        }
        console.log("variable musica despues de bloque:", musica);

        //LET
        //2
        console.log("*******let*******");
        let musica2 = "Rock";
        console.log("variable musica antes de bloque:", musica2);
        {
            let musica2 = "POP";
            console.log("variable musica dentro del bloque:", musica2);
        }
        console.log("variable musica despues de bloque:", musica2);

        /*CAP 4. Constantes (const)*/

        /*const : se debe utilizar cuando las variables no 
        vayan a cambiar su valor durante el flujo de la 
        aplicacion
        */
        let a;
        const PI = 3.1416;
        //const NUEVE;
        console.log(PI);
        //PI = 3.15;

        a = "emtg";
        console.log(a);

        //objeto
        const objeto = {
            nombre: "Elian",
            edad: 19
        }

        /*
        UNICA MANERA DE QUE UNA CONST CAMBIE DEBIDO A QUE
        los objetos o arreglos son valores compuestos y solo se 
        accede a su propiedad.
        */

        //arreglos
        const colores = ["azul", "negro", "blanco", "rojo"];

        console.log(objeto);
        console.log(colores);

        //agregando a valores a sus propiedades
        objeto.correo = "elianmtoribio@gmail.com";
        colores.push("amarillo");

        console.log(objeto);
        console.log(colores);


        /*CAP  5. Cadenas de Texto (Strings)*/

        //CADENAS DE TEXTO STRING

        let nombre = "Elian Manuel";
        let apellido = 'Germosen';
        let saludo = new String("Hola Mundo");
        let lorem = "    Lorem ipsum amet     ";

        console.log(nombre, apellido, saludo);
        //propiedad .length
        console.log(
            nombre.length,
            apellido.length,
            saludo.length
        );

        //metodo
        console.log(
            nombre.toUpperCase(),
            apellido.toLowerCase(),
            saludo.toUpperCase(),
            lorem.includes("amet"),
            lorem.includes("yo"),
            lorem,
            lorem.trim(),
            lorem.split(" "),
            lorem.split(",")
        );

        /*CAP 6. Template Strings*/

        //Concatenacion
        /*let nombre = "Elian";
        let apellido = "Germosen";*/

        let saludando = "Hola mi nombre es " +
            nombre + " " + apellido + ".";
        console.log(saludando);

        //interpolacion de variables
        //template string
        let saludando2 = `Hola mi nombre es ${nombre} ${apellido}.`;
        console.log(saludando2);

        let ul = "<ul><li>Primavera</li><li>Verano</li><li>Otono</li><li>Invierno</li></ul>";
        console.log(ul);

        let ul2 = `
        <ul>
            <li>Primavera</li>
            <li>Verano</li>
            <li>Otono</li>
            <li>Invierno</li>
        </ul>
            `;
        console.log(ul2);

        let ul3 = "<ul>";
        ul3 += "<li>Primavera</li>";
        ul3 += "<li>Verano</li>";
        ul3 += "<li>Otono</li>";
        ul3 += "<li>Invierno</li>";
        ul3 += "</ul>";
        console.log(ul3);


        /*CAP 7. Números (Numbers)*/

        //Numbers

        let numa = 2;
        let numb = new Number(23);
        let numc = 7.19;
        let numd = "5.6";

        console.log(numa, numb);
        console.log(numc.toFixed(1));
        //numeros decimales a tener
        console.log(numc.toFixed(4));
        console.log(parseInt(numc));
        console.log(parseFloat(numc));
        console.log(typeof numc, typeof numd);
        console.log(numa + numb);
        console.log(numc + parseInt(numd));
        console.log(numc + parseFloat(numd));
        console.log(numc + Number.parseInt(numd));
        console.log(numc + Number.parseFloat(numd));

        /*CAP 8. Booleans*/

        //Booleans 

        let verdadero = true;
        let falso = false;
        let v = Boolean(true);
        let f = Boolean(false);

        console.log(verdadero, falso, v, f);
        console.log(typeof verdadero, typeof falso);

        console.log(Boolean(0));
        console.log(Boolean(-7));
        console.log(Boolean(""));
        console.log(Boolean(" "));



        /*CAP 9. undefined, null & NaN*/

        //undefined, null & NaN

        /*undefined indica que no se ha inicializado una 
        variable y que el valor está ausente*/
        let indefinida;
        console.log(indefinida);

        /*null es un valor especial que indica la ausencia 
        de un valor*/
        let nulo = null;
        console.log(nulo);

        /*NaN - Not a Number*/
        let noEsUnNumero = "hola" * 3.7;
        console.log(noEsUnNumero);



        /*CAP 10. Funciones*/

        /*
        Una función es un bloque de código, autocontenido,
        que se puede definir una vez y ejecutar en cualquier
        momento. Opcionalmente, una función puede aceptar
        parámetros y devolver un valor.
        Las funciones en JavaScript son objetos,
        un tipo especial de objetos:
        Se dice que las funciones son ciudadanos de primera
        clase porque pueden asignarse a un valor, y pueden
        pasarse como argumentos y usarse como un valor de
        retorno.
        */

        //Declaracion de Funcion

        function estoEsUnaFuncion() {
            console.log("Uno");
            console.log("Dos");
            console.log("Tres");
        }
        //Invocacion de funcion
        estoEsUnaFuncion();


        function UnaFuncionQueDevuelveValor() {
            console.log("Uno");
            return 19;
            console.log("Dos");
            console.log("Tres");
            return "La funcion ha retornado una cadena de texto";
        }

        let valorDeFuncion = UnaFuncionQueDevuelveValor();

        console.log(valorDeFuncion);

        function saluda(alias = "Desconocido", edad = 0) {
            console.log(`Hola mi alias es ${alias} y tengo ${edad} a*os de edad.`);
        }

        saluda("manuel", 10);
        saluda();

        //Funciones Declarada Vs Funciones expresadas

        funcionDeclarada();

        function funcionDeclarada() {
            console.log("Esto es una funcion declarada y puede invocarse en cualquier partde de nustro codigo, incluso antes de que la funcion sea declarada.");
        }

        funcionDeclarada();

        /*
        Las funciones expresadas deben ser inicializadas
        con const y no es necesario a la funcion ponerle nombre
        si no mas bien a la variable, patron muy utilizado.
        Funcion anonima.
        */

        /*funcionExpresada();*/

        const funcionExpresada = function () {
            console.log("Esto es una funcion Expresada, es decir una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su defincion, javascript nos dira. 'Uncaught ReferenceError: Cannot access 'funcionExpresada' before initialization' ");
        }

        funcionExpresada();

        /*CAP 11. Arreglos (Arrays)*/

        //pueden ser definidos tanto con let como con const
        const arr = [];
        const b = [1, true, "hola", ["a", "b", "c", [1, 2, 3]]];
        console.log(arr);
        console.log(b);//imprime todo el contenido del arreglo
        console.log(b.length);//imprime la longitud del arreglo
        console.log(b[2]);
        console.log(b[0]);
        console.log(b[3]);//imprime en especifico la posicion n del arreglo
        console.log(b[3][2]);
        console.log(b[3][3][2]);

        const c = Array.of("x", "y", "z", 9, 8, 7);//otra manera de crear arreglo
        console.log(c);

        const d = Array(100).fill(false);
        console.log(d);

        //forma anticuada ya no se utiliza
        // const e = new Array();
        // console.log(e);
        // const fa = new Array(1, 2, 3, true, false);
        // console.log(fa);

        const colors = ["rojo", "verde", "azul"]
        console.log(colors);

        colors.push("negro");//push agrega datos al final del arreglo
        console.log(colors);

        colors.pop();//pop elimina el ultimo elemento del arreglo
        console.log(colors);

        colors.forEach(function (el, index) {
            console.log(`<li id="${index}">${el}</li>`);
        })

        /*CAP 12. Objetos */
        //es muy recomendable e importante utilizar const con los objetos
        const ob = {
        };
        console.log(ob);

        //deprecado ya no se utiliza
        const obf = new Object();
        console.log(obf);

        /* dentro de un objeto a las variables se le van 
        a llamar atributos/propiedades y a las funciones 
        se les llama métodos */
        const eli = {
            nombres: "Elian Manuel",
            apellidos: "Toribio Germosen",
            edad: 20,
            hobbies: ["nba", "mlb", "estudiar"],
            usa: false,
            contacto: {
                email: "elianmtoribio@gmail.com",
                twitter: "@elianmtg",
                movil: 8098645390
            },
            saludar: function () {
                console.log("Hola :)")
            },
            decirMiNombre: function () {
                //this hace referencia al mismo objeto
                console.log(`hola me llamo ${this.nombres} ${this.apellidos} y tengo ${this.edad} aÑos, me puedes sefuir como ${this.contacto.twitter} en twitter.`)
            }
        }

        console.log(eli);
        console.log(eli["nombres"]);//acceder a una propiedad en especifico del objeto
        console.log(eli["apellidos"]);
        console.log(eli.nombres);
        console.log(eli.apellidos);
        console.log(eli.edad);
        console.log(eli.usa);
        console.log(eli.hobbies);
        console.log(eli.hobbies[2]);
        console.log(eli.contacto);
        console.log(eli.contacto.twitter);
        eli.saludar();
        eli.decirMiNombre();

        console.log(Object.keys(eli))//keys lista todas las llaves del objeto
        console.log(Object.values(eli))//values forma arreglo con valores del obejto
        console.log(eli.hasOwnProperty("nombres"))//hasOwnProperty permite saber si un objeto tiene una propiedad
        console.log(eli.hasOwnProperty("nacimiento"))

        /*CAP 13. Tipos de Operadores */

        /*Operadores */
        /* Aritméticos:  + - * / % ()  */

        let op = 5 + (5 - 10) * 3;

        let modulo = 5 % 2;//devuelve el residuo de una division

        console.log(op);
        console.log(modulo);

        /*  Relacionales: 
        >, <,   >=, <=, ==, ===, !=, !== */

        console.log(8 > 9);
        console.log(9 > 8);
        console.log(8 >= 9);
        console.log(9 >= 8);
        console.log(7 < 7);
        console.log(7 <= 7);

        /*
        = 1 igual es asignación  de variable
        == 2 iguales es comparacion de valores
        === 3 igulaes es comparación de tipo de dato
        y de valor
        */

        console.log(7 == 7);
        console.log("7" == 7);//solo se comparan los valores por esta razon da true
        console.log(0 == false);

        /*se considera buena practica utilizar
        siempre triple comparacion*/

        console.log(7 === 7);
        console.log("7" === 7);//comparando tipo de dato y de valor
        console.log(0 === false);

        /* Incremento & Decremento */

        let i = 2;
        //i = i + 2;
        //i += 2;
        // i -= 3;
        // i /= 3;
        // i *= 3;

        console.log(i++);
        console.log(++i);

        //operador unario
        i++;
        i--;
        ++i;
        --i;
        console.log(i);

        /*
        Lógicos
          ! - Not : Niega, es decir lo que es verdadero
          lo vuelve falso y viceversa
          || - Or: Cuando tengo 2 o más condiciones, con
          que una se cumpla, es decir sea verdadera, el OR
          será verdadero.
          && - And: Cuando tengo 2 o más condiciones, todas
          tienen que cumplirse, es decir ser verdaderas,
          para que AND se valide 
        */

        console.log(!true);
        console.log(!false);
        console.log((9 === 9) || ("9" === 9));
        console.log((9 === 9) && ("9" === 9));

        /*CAP 14. Condicionales  */

        /* if - else */

        let edad = 17;

        if (edad > 17) {
            console.log("Eres mayor de edad.")
        } else {
            console.log("Eres menor de edad.")
        }

        if (edad >= 18) {
            console.log("Eres mayor de edad.")
        } else {
            console.log("Eres menor de edad.")
        }

        if (edad < 18) {
            console.log("Eres menor de edad.")
        } else {
            console.log("Eres mayor de edad.")
        }

        if (edad <= 17) {
            console.log("Eres menor de edad.")
        } else {
            console.log("Eres mayor de edad.")
        }

        /* if - else if - else */
        /*
        Déjame Dormir - 0hrs - 5hrs
        Buenos dias 6hrs - 11hrs
        Buenas tardes 12hrs - 18hrs
        Buenas noches 19hrs - 23hrs
        */

        let hora = 23;

        if (hora >= 0 && hora <= 5) {
            console.log("Déjame Dormir.")
        } else if (hora >= 6 && hora <= 11) {
            console.log("Buenos dias.")
        } else if (hora >= 12 && hora <= 18) {
            console.log("Buenas tardes.")
        } else {
            console.log("Buenas noches.")
        }

        if (hora < 6) {
            console.log("Déjame Dormir.")
        } else if (hora > 5 && hora < 12) {
            console.log("Buenos dias.")
        } else if (hora > 11 && hora < 19) {
            console.log("Buenas tardes.")
        } else {
            console.log("Buenas noches.")
        }

        /* Operador Ternario (condición) ? verdadero : falsa */

        console.log("OPERADOR TERNARIO.");

        let eresMayor = (edad >= 18) //condición
            ? "Eres Mayor de edad." //true
            : "Eres Menor de edad."; //false
        console.log(eresMayor);

        /* switch - case */

        /*
        domingo -0
        lunes - 1
        martes - 2
        miércoles - 3
        jueves - 4
        viernes - 5
        sábado - 6
        */

        let dia = 2;

        switch (dia) {
            case 0:
                console.log("Domingo.");
                break;//hace que se salga del switch una vez cumplido algun caso
            case 1:
                console.log("Lunes.");
                break;
            case 2:
                console.log("Martes.");
                break;
            case 3:
                console.log("Miercoles.");
                break;
            case 4:
                console.log("Jueves.");
                break;
            case 5:
                console.log("Viernes.");
                break;
            case 6:
                console.log("Sabado.");
                break;
            default:
                console.log("El dia no existe.");
                break;
        }

        /* CAP 15. Ciclos (Loops) */

        let contador = 1;

        // antes de empezar a ejecutar las lineas de codigo 
        // que condicionan el while la condicion debe cumplirse
        while (contador < 10) {
            console.log(`While: ${contador}`);
            contador++;
        }

        //en este caso siempre se va a ejecutar una vez todo el 
        //codigo del do
        do {
            console.log(`Do While: ${contador}`);
            contador++;
        } while (contador < 10);

        // for (inicializacion de la variable; condicion a evaluar;
        // decremento o incremento) {
        //    sentencias que ejecuta el for
        // }
        for (let i = 0; i < 10; i++) {
            console.log(`For: ${i}`);
        }

        let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

        for (let i = 0; i < numeros.length; i++) {
            console.log(`For Array: ${numeros[i]}`);
        }

        //variantes del for con ecmascript6

        const personal = {
            nombre: "elian",
            apellido: "Germosen",
            edad: 20
        }

        /*
        for in permite recorrer todas las propiedades de
        un arreglo
        */

        // for (const propiedad in personal) {
        //     console.log(`For In: ${propiedad}`);
        // }

        /*
        permite recorrer e iterar los atributos que tenga 
        un obejto
        */
        for (const propiedad in personal) {
            console.log(`key: ${propiedad}, value: ${personal[propiedad]}`);
        }

        /*
        for of permite recorrer todos los elementos de 
        cualquier objeto que sea iterable en JS.
        */

        for (const elemento of numeros) {
            console.log(elemento)
        }

        let cadena = "Hola Mundo";

        for (const caracter of cadena) {
            console.log(caracter)
        }

        /* CAP 16. Manejo de Errores */

        //ejemplo1
        try {
            console.log("en el try se agrega el codigo a evaluar.");
            noExiste;
            console.log("segundo mensaje try.");
        } catch (error) {
            console.log("captura cualquier error lanzado en el try.");
            console.log(error);
        } finally {
            console.log("el bloque finally se ejecutara siempre al final de un bloque try..catch.");
        }

        //ejemplo2
        try {
            let tryNumber = "a";
            //isNaN es una funcion que se le pasa un numero
            //evaluara si es un numero y si no lo es devolvera un false
            if (isNaN(tryNumber)) {
                throw new Error("El caracter introducido no es un numero.");
                //mensaje de error personalizado
            }
            console.log(tryNumber * tryNumber);
        } catch (error) {
            console.log(`se produjo el siguiente error: ${error}`);
        }

        /* CAP 17. Break & Continue */

        const numerosTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        //en los metodos de los arreglos como foreach 
        //no se pueden utilizar el break o continue
        //pero si en las demas estructuras de control como for, while, etc...

        for (let i = 0; i < numerosTen.length; i++) {
            if (i === 5) {
                break;
            }
            // console.log(`${i}`);
            console.log(`${numerosTen[i]}`);
        }

        for (let i = 0; i < numerosTen.length; i++) {
            if (i === 5) {
                continue;
            }
            console.log(`${numerosTen[i]}`);
        }

        /* CAP 18. Destructuración */

        const numerosDestruct = [1, 2, 3];

        //SIN DESTRUCTURACION
        let uno = numerosDestruct[0],
            dos = numerosDestruct[1],
            tres = numerosDestruct[2];

        console.log(`${uno} ${dos} ${tres}`);

        //CON DESTRUCTURACION
        const [one, two, three] = numerosDestruct;
        console.log(`${one} ${two} ${three}`);

        const persona = {
            nombrePersona: "Elian",
            apellidoPersona: "Germosen",
            edadPersona: 20
        }

        //para que la destructuracion funcione en los objetos
        //la variable debe llamarse igual que a la que se quiere asignar el valor
        let { nombrePersona, apellidoPersona, edadPersona } = persona;
        console.log(`${nombrePersona} ${apellidoPersona} ${edadPersona}`);

        /* CAP 19. Objetos literales */

        let nombreObj = "TiLiN",
            edadObj = 2;

        const perro = {
            nombreObj: nombreObj,
            edadObj: edadObj,
            ladrar: function () {
                console.log("guaaauuu guaaaaauuuu!!!")
            }
        }
        console.log(perro);
        perro.ladrar();

        const dog = {
            nombreObj,
            edadObj,
            raza: "callejero",
            ladrar() {
                console.log("guaaauuu guaaaaauuuu guaaaaauuuu!!!")
            }
        }
        console.log(dog);
        dog.ladrar();

        /* CAP 20. Parámetros REST & Operador Spread */

        //los parametros rest se definen con tres puntos suspensivos
        function suma(a, b, ...c) {
            let resultado = a + b;

            c.forEach(function (n) {
                resultado += n;
            })

            return resultado;

        }

        console.log(suma(1, 2));
        console.log(suma(1, 2, 3));
        console.log(suma(1, 2, 3, 4));
        console.log(suma(1, 2, 3, 4, 5));
        console.log(suma(1, 2, 3, 4, 5, 6));
        console.log(suma(1, 2, 3, 4, 5, 6, 7));
        console.log(suma(1, 2, 3, 4, 5, 6, 7, 8));

        //Operador Spread
        const arr1 = [1, 2, 3, 4, 5],
            arr2 = [6, 7, 8, 9, 0];

        console.log(arr1, arr2);

        //una de sus funcioes es que convierte dos arreglos en uno solo

        // const arr3 = [arr1, arr2];
        const arr3 = [...arr1, ...arr2];
        console.log(arr3);

        /* CAP 21. Arrow Functions */

        //es una nueva forma de definir funciones anonimas
        //que sean expresadas

        //funcion declarada
        function saludarDeclarada() {
            console.log("HOLA!, saludarDeclarada")
        }
        saludarDeclarada();

        //funcion expresada
        const saludarExpresada = function () {
            console.log("HOLA!, saludarExpresada")
        }
        saludarExpresada();

        //Arrow Function
        const saludarArrow = () => {
            console.log("HOLA!, saludarArrow")
        }
        saludarArrow();

        //si la funcion tiene solo una linea de codigo puede
        //realizarse de esta manera
        const saludarArrowOne = () => console.log("HOLA!, saludarArrowOne");
        saludarArrowOne();

        //si la funcion flecha o arrow function recibe 
        //parametros se puede quedar sin parentesis
        const saludarArrowName = nombre => console.log(`HOLA! ${nombre}`);
        saludarArrowName("ELIAN");

        // const sumar = function (a, b) {
        //     return a + b;
        // }
        // console.log(sumar(8, 10));
        const sumar = (a, b) => a + b;
        console.log(sumar(9, 10));

        const funcionMultiple = () => {
            console.log("HOLA!, 1");
            console.log("HOLA!, 2");
            console.log("HOLA!, 3");
        }
        funcionMultiple();

        const numerosF = [1, 2, 3, 4, 5];
        // numerosF.forEach(function (el, index) {
        //     console.log(`el elemento ${el} esta en ${index}`)
        // })
        ////lo de arriba es lo mismo que lo de abajo
        numerosF.forEach((el, index) => {
            console.log(`${el} esta en ${index}`);
        })
        //ahora en una sola linea MAS SIMPLE
        numerosF.forEach((el, index) => console.log(`${el} esta en ${index}`));

        // function thisDeclarada() {
        //     console.log(this);
        // }
        // thisDeclarada();

        const perra = {
            nombre: "TILIN",
            // ladrarNormal: function () {
            //     console.log(this)
            // },
            ////LAS ARROW FUNTION TIENEN LA CAPACIDAD DE 
            ////CAPTURAR EL CONTEXTO DEL OBEJTO EN EL QUE 
            ////SE ENCUENTRA
            // ladrarArrow: () => {
            //     console.log(this)
            // }
            ////MANERA CORRECTA DE HACER UNA FUNCION DENTRO
            ////DE UN OBJETO LITERAL
            ladrar() {
                console.log(this)
            }
        }
        perra.ladrar();

        /* CAP 22. Prototipos */

        // POO
        /*
        Clases: Modelo a seguir.
        Objetos: Es una instancia de una clase.
        Atributos: es una característica o propiedad del 
            objeto (son variables dentro de un objeto).
        Métodos: son las acciones que un objeto puede 
            realizar (son funciones dentro de un objeto).
        */

        /* const animal = {
            nombre: "Snoopy",
            sonar() {
                console.log("hago sonidos porque estoy vivo.");
            }
        }
        console.log(animal);

        const animal2 = {
            nombre: "Lola Bunny",
            sonar() {
                console.log("hago sonidos porque estoy vivo.");
            }
        }
        console.log(animal2); */

        //FUNCION CONSTRUCTURA
        /* function Animal(nombre, genero) {
            // Atributos
            this.nombre = nombre;
            this.genero = genero;

            //Metodo
            this.sonar = function () {
                console.log("hago sonidos porque estoy vivo.");
            }
            this.saludar = function () {
                console.log(`Hola me llamo ${this.nombre}.`);
            }
        } */

        //FUNCION CONSTRUCTURA DONDE ASIGNAMOS LOS METODOS AL
        //PROTOTIPO NO A LA FUNCION COMO TAL
        //ESTO EFICIENTARA Y EVITARA LA DUPLICIDAD DE FUNCIONES
        //DENTRO DE INSTANCIAS.
        function Animal(nombre, genero) {
            // Atributos
            this.nombre = nombre;
            this.genero = genero;
        }
        //Metodos agregados al prototipo de la funcion constructura.
        Animal.prototype.sonar = function () {
            console.log("hago sonidos porque estoy vivo.");
        }
        Animal.prototype.saludar = function () {
            console.log(`Hola me llamo ${this.nombre}.`);
        }

        // Herencia Prototípica

        function Perro(nombre, genero, tamanio) {
            this.super = Animal;
            this.super(nombre, genero);
            this.tamanio = tamanio;
        }

        //Perro esta heredando de Animal
        Perro.prototype = new Animal();
        Perro.prototype.constructor = Perro;

        //SOBREESCRITURA DE METODOS DEL PROTOTIPO PADRE EN EL
        //HIJO
        Perro.prototype.sonar = function () {
            console.log("soy un perro y mi sonido es un ladrido.");
        }

        Perro.prototype.ladrar = function () {
            console.log("Guaauu Guaauu!!!");
        }

        const snoopy = new Perro("SNOOPY", "MACHO", "MEDIANO"),
            lolaBunny = new Animal("Lola Bunny", "Hembra");

        console.log(snoopy);
        console.log(lolaBunny);

        snoopy.sonar();
        snoopy.saludar();
        snoopy.ladrar();

        lolaBunny.sonar();
        lolaBunny.saludar();

        //JAVASCRIPT ES UN LENGUAJE ORIENTADO A OBEJTOS 
        //QUE ESTA BASADO EN PROTOTIPOS.

        /* CAP 24. Clases y Herencia */

        class AnimalClass {
            //el constructor es un método especial que se 
            //ejecuta en el momento de instanciar la clase
            constructor(nombre, genero) {
                this.nombre = nombre;
                this.genero = genero;
            }
            //Metodo
            sonar() {
                console.log("hago sonidos porque estoy vivo.");
            }
            saludar() {
                console.log(`Hola me llamo ${this.nombre}.`);
            }
        }

        //con extends se le dice que herede
        class PerroClass extends AnimalClass {
            constructor(nombre, genero, tamanio) {
                //con el método super() se manda a llamar 
                //el constructor de la clase padre
                super(nombre, genero);
                this.tamanio = tamanio;
                this.raza = null;
            }
            sonar() {
                console.log("soy un perro y mi sonido es un ladrido");
            }
            ladrar() {
                console.log("guauu guauu!!!");
            }

            //un método estático se pueden ejecutar sin
            //necesidad de instanciar la clase
            static queEres() {
                console.log("Los perros somos animales mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.");
            }

            //Los setters y getters son métodos 
            //especiales que nos permiten establecer y 
            //obtener los valores de atributos de nuestra 
            //clase
            get getRaza() {
                return this.raza;
            }
            set setRaza(raza) {
                this.raza = raza;
            }
        }

        PerroClass.queEres();

        const mimi = new AnimalClass("Mimi", "Hembra"),
            scooby = new PerroClass("Scooby", "Macho", "Gigante");

        console.log(mimi);
        mimi.saludar();
        mimi.sonar();

        console.log(scooby);
        scooby.saludar();
        scooby.sonar();
        scooby.setRaza = "Gran Danes";
        console.log(scooby.getRaza);

        //JAVASCRIPT LEE LAS CLASES Y LAS CONVIERTE A PROTOTIPOS

        //LOS METODOS O CLASES PRIVADOS EN JS NO EXISTEN
        //TODOS SE CREAN POR DEFAULT PUBLICAS POR ESO NO ES NECESARIO PONER PUBLIC

        /* CAP 25. Métodos estáticos, getters y setters */

        //un método estático se pueden ejecutar sin 
        //necesidad de instanciar la clase

        /* CAP 26. Objeto console */

        console.log(console);
        console.error("esto es un error.");
        console.warn("esto es un aviso.");
        console.info("Esto es un mensaje informativo.")//es similar al console.log
        console.log("Un registro de lo que ha pasado en nuestra aplicacion.");

        let consoleNombre = "Elian",
            consoleApellido = "Germosen",
            consoleEdad = 20;

        console.log(consoleNombre);
        console.log(consoleApellido);
        console.log(consoleEdad);
        console.log(consoleNombre, consoleApellido, consoleEdad);
        console.log(`Hola mi nombre es ${consoleNombre} ${consoleApellido} y tengo ${consoleEdad} años.`);
        console.log(`Hola mi nombre es %s %s y tengo %d años.`, consoleNombre, consoleApellido, consoleEdad);
        console.clear();

        console.log(window);
        console.log(document);
        console.dir(window);
        console.dir(document);
        console.clear();

        //agrupando sin colapso
        console.group("LOS CURSOS DE MIRCHA EN YT.");
        console.log("JS");
        console.log("HTML");
        console.log("CSS");
        console.groupEnd();

        //agrupando con colapso
        console.groupCollapsed("LOS CURSOS DE MIRCHA EN YT.");
        console.log("JS");
        console.log("HTML");
        console.log("CSS");
        console.groupEnd();

        console.clear();

        console.log(console);
        console.table(Object.entries(console));//haciendo tabla
        console.table(Object.entries(console).sort());//ordenando de manera ascendente la tabla
        console.clear();

        const consoleNumeros = [1, 2, 3, 4, 5],
            consoleVocales = ["a", "e", "i", "o", "u"];

        console.table(consoleNumeros);
        console.table(consoleVocales);

        const consolePerro = {
            nombre: "duke",
            raza: "duke",
            color: "marron"
        }
        console.table(consolePerro);

        console.clear();

        console.time("Cuanto tiempo tarda mi código");
        const arrConsole = Array(1000000);
        for (i = 1; i < arrConsole.length; i++) {
            arrConsole[i] = i;
        }
        console.timeEnd("Cuanto tiempo tarda mi código");
        // console.log(arrConsole);

        console.clear();

        for (let i = 0; i <= 100; i++) {
            console.count("codifo for console");
            // console.log(i);
            arrConsole[i] = i;
        }

        console.clear();

        let consoleX = 1,
            consoleY = 2,
            pruebaXY = "Se espera que X siempre sea menor que Y";
        //se puede utilizar como prueba unitaria.
        console.assert(consoleX < consoleY, { consoleX, consoleY, pruebaXY });

        /* CAP 26. Objeto Date */

        //GMT-04:00 = REP.DOM. esta menos 4 horas del 
        //meridiano de grenwich o londres que es 
        //considerada la hora cero
        console.log(Date());

        let fecha = new Date();
        //FECHA COMPLETA
        console.log(fecha);
        //DIA
        console.log(fecha.getDate());
        //DIA DE LA SEMANA DE DOMINGO A SABADO
        //día de la semana D L M Mi J V S -> 0 1 2 3 4 5 6
        console.log(fecha.getDay());
        //MES
        //mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
        console.log(fecha.getMonth());
        //año
        console.log(fecha.getFullYear());
        //HORA
        console.log(fecha.getHours());
        //MINUTOS
        console.log(fecha.getMinutes());
        //SEGUNDOS
        console.log(fecha.getSeconds());
        //MILISEGUNDOS
        console.log(fecha.getMilliseconds());
        //FEHCA COMPLETA
        console.log(fecha.toString());
        //FECHA SIN HORA
        console.log(fecha.toDateString());
        //FECHA DE MANERA LOCAL
        console.log(fecha.toLocaleString());
        //FECHA SOLAMENTE
        console.log(fecha.toLocaleDateString());
        //HORA SOLAMENTE
        console.log(fecha.toLocaleTimeString());
        //
        console.log(fecha.getTimezoneOffset());
        //FECHA Y HORA DE LONDRES QUE ES LA HORA CERO CON UTC
        console.log(fecha.getUTCDate());
        console.log(fecha.getUTCHours());
        //SIGNIFICA CUANTOS SEGUNDOS HAN PASADO DESDE 
        //EL 1 DE ENERO DE 1970
        console.log(Date.now());
        //
        let cumpleElian = new Date(2001, 9, 19);
        console.log(cumpleElian);

        /* CAP 26. Objeto Math */

        console.log(Math);
        console.log(Math.PI);
        //devuelve el valor absoluto del numero
        console.log(Math.abs(-7.8));
        //redondea el numero al posterior
        console.log(Math.ceil(7.2));
        //redondea el numero al inferior
        console.log(Math.floor(7.8));
        //redondea al mas cercano
        console.log(Math.round(7.49));
        //raiz cuadrada de un numero
        console.log(Math.sqrt(81));
        //elevar potencias (primer numero es la base y el segundo el exponente)
        console.log(Math.pow(2, 5));
        //sign devolvera -1 si es negativo, si es cero 0 y si es positivo 1
        console.log(Math.sign(-7.8));
        //da numero aleatorio entre 0 y 1
        console.log(Math.random());
        //da numero aleatorio entre cero y mil
        console.log(Math.random() * 1000);//fraccionario
        console.log(Math.round(Math.random() * 1000));//redondeado

        /* CAP 29. Operador de Cortocircuito */

        /*
        Cortocircuito OR - cuando el valor de la izquierda 
        en la expresión siempre pueda validar a true, es el 
        valor que se cargará por defecto.
        Cortocircuito AND - cuando el valor de la izquierda 
        en la expresión siempre pueda validar a false, es el 
        valor que se cargará por defecto.
         */

        /* function saluda(nombre = "Desconocido") {
            console.log(`Hola ${nombre}!`);
        }
        saluda("Elian");
        saluda(); */
        function saluda(nombre) {
            //si la variable nombre viene definida dale ese valor
            //de lo contrario asiganel desconocido.
            nombre = nombre || "Desconocido";
            console.log(`Hola ${nombre}!`);
        }
        saluda("Elian");
        saluda();
        //verdaderos OR ||
        console.log("cadena" || "valor de la derecha");
        console.log(19 || "valor de la derecha");
        console.log(true || "valor de la derecha");
        console.log([] || "valor de la derecha");
        console.log({} || "valor de la derecha");
        //falsos OR ||
        console.log(false || "valor de la derecha");
        console.log(null || "valor de la derecha");
        console.log(undefined || "valor de la derecha");
        console.log("" || "valor de la derecha");
        console.log(0 || "valor de la derecha");

        //AND && : hara lo contrario que OR
        console.log(false && "valor de la derecha");
        console.log(null && "valor de la derecha");
        console.log(undefined && "valor de la derecha");
        console.log("" && "valor de la derecha");
        console.log(0 && "valor de la derecha");
        //AND &&
        console.log("cadena" && "valor de la derecha");
        console.log(19 && "valor de la derecha");
        console.log(true && "valor de la derecha");
        console.log([] && "valor de la derecha");
        console.log({} && "valor de la derecha");

        /* CAP 30. alert, confirm y prompt */

        console.log(window);
        // alert("esto es una alerta!");
        // confirm("esto es una confirmacion!");
        // prompt("esto es un prompt y le permite al usuario ingresa un valor!");

        /* let alerta = alert("esto es una alerta!"),
            confirmacion = confirm("esto es una confirmacion!"),
            aviso = prompt("esto es un prompt y le permite al usuario ingresa un valor!");

        console.log(alerta);
        console.log(confirmacion);
        console.log(aviso); */

        /* CAP 31. Expresiones Regulares */

        /*
         Expresiones Regulares: Son una secuencia de 
         caracteres que forma un patrón de búsqueda, 
         principalmente utilizada para la búsqueda de 
         patrones de cadenas de caracteres.
            https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
            https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
        */

        let cadenaLorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentium sit eaque recusandae id sapiente similique, laudantium voluptatum perferendis ea iure ad odio doloremque earum voluptate.";
        ////recibe palabras o numero y banderas
        //// i ignora entre mayus y minus y g de manera global 
        //// no se detiene con la primera coincidencia.
        // let expReg = new RegExp("lorem", "ig");
        let expReg2 = /lorem{1,}/ig;

        // console.log(expReg.test(cadenaLorem));
        // console.log(expReg.exec(cadenaLorem));
        ////funcionan iguales ambas
        console.log(expReg2.test(cadenaLorem));
        console.log(expReg2.exec(cadenaLorem));

        /* CAP 32. Funciones Anónimas Autoejecutables */

        //Función Anónima Autoejecutable

        (function () {
            //codigo que desee
            console.log("mi primer IIFE");
        })();//estos ultimos parentesis hacen que se ejecute la funcion
        //necesario poner punto y coma
        (function (d, w, c) {
            console.log("mi segunda IIFE");
            console.log(d);
            console.log(w);
            console.log(c);
            c.log("esto es un console.log");
        })(document, window, console);

        //Formas de escribir las funciones Anónimas Autoejecutables
        //Clásica
        (function () {
            console.log('versión Clásica');
        })();
        //La Crockford (JavaScript The Good Parts)
        ((function () {
            console.log('versión Crockford');
        })());
        //Unaria
        +function () {
            console.log('versión Unaria');
        }();
        //Facebook
        !function () {
            console.log('versión Facebook');
        }();