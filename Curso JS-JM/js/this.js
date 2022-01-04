/* CAP 57. This */
        console.log(this);
        console.log(window);
        console.log(this === window);

        this.nombre = "Contexto Global";
        console.log(this.nombre);

        function imprimir() {
            console.log(this.nombre);
        }
        imprimir();

        const objeto = {
            nombre: "Contexto Objeto",
            imprimir: function () {
                console.log(this.nombre);
            }
        }

        objeto.imprimir();

        const objeto2 = {
            nombre: "Contexto Objeto 2",
            imprimir
        }

        objeto2.imprimir();

        const objeto3 = {
            nombre: "Contexto Objeto 3",
            //no utilizar arrow function en objetos ya que no crea
            //scope
            imprimir: () => {
                console.log(this.nombre);
            }
        }

        objeto3.imprimir();

        function Persona(nombre) {
            const that = this;//anteriormente se usaba para guardar
            this.nombre = nombre;
            // return console.log(this.nombre)

            //clausura: retornar una funcion dentro de una funcion
            //se crea nuevo scope por esto no tiene la propiedad nombre y lee la global
            /* return function () {
                console.log(this.nombre);
            } */
            //ya que arrow function no crea scope si tendra la propiedad
            //return () => console.log(this.nombre);

            return function () {
                console.log(that.nombre);
            }//anteriormente se usaba
        }

        let elian = new Persona("elian");
        elian();