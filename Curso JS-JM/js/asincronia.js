/* CAP 44. Temporizadores (setTimeout & setInterval) */

        console.log("INICIO:");

        // setTimeout(() => {
        //     console.log("ejecutando un setTimeOut, esto se ejecuta una sola vez");
        // }, 3000);

        // setInterval(() => {
        //     console.log("ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo.");
        // }, 1000);

        // setInterval(() => {
        //     console.log(new Date().toLocaleTimeString());
        // }, 1000);
        // let temporizador = setTimeout(() => {
        //     console.log(new Date().toLocaleTimeString());
        // }, 1000);
        // clearTimeout(temporizador);//cancela el timeout
        let temporizador = setInterval(() => {
            console.log(new Date().toLocaleTimeString());
        }, 1000);
        clearInterval(temporizador);
        console.log("DESPUES DEL CLEARINTERVAL");

        /* CAP 45. Asincronía y el Event Loop */

        /*
        Antes de explicar como funciona el modelo de JavaScript 
        es importante entender algunos conceptos:
         Procesamiento Single thread y Multi thread.
         Operaciones de CPU y Operaciones de I / O.
         Operaciones Concurrentes y Paralelas.
         Operaciones Bloqueantes y No Bloqueantes.
         Operaciones Síncronas y Asíncronas.

        Javascript usa un modelo asíncrono y no bloqueante,
        con un loop de eventos implementado en un sólo hilo, 
        (single thread) para operaciones de entrada y salida 
        (input/output).
         */

        //Código Síncrono Bloqueante
        /* (() => {
            console.log("Código Síncrono Bloqueante");
            console.log("INICIO");

            function dos() {
                console.log("DOS");
            }
            function uno() {
                console.log("UNO");
                dos();
                console.log("TRES");
            }
            uno();
            console.log("FIN");
        })(); */

        //Código Asíncrono No Bloqueante
        /* (() => {
            console.log("Código Asíncrono No Bloqueante");
            console.log("INICIO");

            function dos() {
                setTimeout(function () {
                    console.log("DOS");
                }, 1000);
            }
            function uno() {
                setTimeout(function () {
                    console.log("UNO");
                }, 0);
                dos();
                console.log("TRES");
            }
            uno();
            console.log("FIN");
        })(); */

        /* CAP 46. Callbacks */
        //llamada devuelta es una funcion que se ejecutara
        //despues que otra lo haga.

        function cuadradoCallBack(value, callback) {
            setTimeout(() => {
                callback(value, value * value);
            }, 0 | Math.random() * 1000);
        }

        /* cuadradoCallBack(0, (value, result) => {
            console.log("INICIA CALLBACK");
            console.log(`CALLBACK: ${value}, ${result}`);
            cuadradoCallBack(1, (value, result) => {
                console.log(`CALLBACK: ${value}, ${result}`);
                cuadradoCallBack(2, (value, result) => {
                    console.log(`CALLBACK: ${value}, ${result}`);
                    cuadradoCallBack(3, (value, result) => {
                        console.log(`CALLBACK: ${value}, ${result}`);
                        cuadradoCallBack(4, (value, result) => {
                            console.log(`CALLBACK: ${value}, ${result}`);
                            cuadradoCallBack(5, (value, result) => {
                                console.log(`CALLBACK: ${value}, ${result}`);
                                console.log("Fin Callback");
                                console.log("Callback Hell !!!!!😈🤘");
                                console.log("http://callbackhell.com/");
                            });
                        });
                    });
                });
            });
        }); */

        /* CAP 47. Promesas */

        //EVOLUCION DE LAS CALLBACKS Y MAS ENTENDIBLES Y ORDENADAS

        /* function cuadradoPromise(value) {
            if (typeof value !== "number") {
                return Promise.reject(`ERROR EL VALOR ${value} INGRESADO NO ES UN NUMERO`);
            }
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    //resolve return positivo si se cumple
                    resolve({
                        value,
                        result: value * value
                    });
                }, 0 | Math.random() * 1000);
            })
        }

        cuadradoPromise(0)
            .then((obj) => {
                // console.log(obj);
                console.log("Inicio Promise");
                console.log(`Promise: ${obj.value}, ${obj.result}`);
                return cuadradoPromise(1);
            })
            .then((obj) => {
                console.log(`Promise: ${obj.value}, ${obj.result}`);
                return cuadradoPromise(2);
            })
            .then((obj) => {
                console.log(`Promise: ${obj.value}, ${obj.result}`);
                return cuadradoPromise("3");
            })
            .then((obj) => {
                console.log(`Promise: ${obj.value}, ${obj.result}`);
                return cuadradoPromise(4);
            })
            .then((obj) => {
                console.log(`Promise: ${obj.value}, ${obj.result}`);
                return cuadradoPromise(5);
            })
            .then((obj) => {
                console.log(`Promise: ${obj.value}, ${obj.result}`);
                console.log("FIN DE LA PROMESA.")
            })
            .catch(err => console.error(err)); */

        /* CAP 48. Async - Await */

        //no vienen a reemplazar las promesas si no que
        //trabajan en conjunto

        function cuadradoPromise(value) {
            if (typeof value !== "number") {
                return Promise.reject(`ERROR EL VALOR ${value} INGRESADO NO ES UN NUMERO`);
            }
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    //resolve return positivo si se cumple
                    resolve({
                        value,
                        result: value * value
                    });
                }, 0 | Math.random() * 1000);
            })
        }

        //con asyn se le dice que es asincrona la funcion
        async function funcionAsincronaDeclarada() {
            try {
                console.log("INICIO DE ASYNC FUNCTION.");

                //cuando se declara una funcion como asincrona
                //se utiliza await para esperar el resultado
                //antes de pasar a la siguiente ejecucion
                let obj = await cuadradoPromise(0);
                console.log(`ASYNC FUNCTION: ${obj.value},${obj.result}`);

                obj = await cuadradoPromise(1);
                console.log(`ASYNC FUNCTION: ${obj.value},${obj.result}`);

                obj = await cuadradoPromise(2);
                console.log(`ASYNC FUNCTION: ${obj.value},${obj.result}`);

                obj = await cuadradoPromise("3");
                console.log(`ASYNC FUNCTION: ${obj.value},${obj.result}`);

                obj = await cuadradoPromise(4);
                console.log(`ASYNC FUNCTION: ${obj.value},${obj.result}`);

                obj = await cuadradoPromise(5);
                console.log(`ASYNC FUNCTION: ${obj.value},${obj.result}`);

                console.log(`FIN DE ASYNC FUNCTION`);
            } catch (error) {
                console.error(error);
            }
        }

        funcionAsincronaDeclarada();

        //en arrowfunction el async va antes de los parentesis
        const funcionAsincronaExpresada = async () => {
            try {
                console.log("INICIO DE ASYNC FUNCTION.");

                let obj = await cuadradoPromise(6);
                console.log(`ASYNC FUNCTION: ${obj.value},${obj.result}`);

                obj = await cuadradoPromise(7);
                console.log(`ASYNC FUNCTION: ${obj.value},${obj.result}`);

                obj = await cuadradoPromise(8);
                console.log(`ASYNC FUNCTION: ${obj.value},${obj.result}`);

                obj = await cuadradoPromise("9");
                console.log(`ASYNC FUNCTION: ${obj.value},${obj.result}`);

                obj = await cuadradoPromise(10);
                console.log(`ASYNC FUNCTION: ${obj.value},${obj.result}`);

                console.log(`FIN DE ASYNC FUNCTION`);
            } catch (error) {
                console.error(error);
            }
        }

        funcionAsincronaExpresada();