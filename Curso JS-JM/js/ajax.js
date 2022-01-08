//CAP 106. AJAX: Objeto XMLHttpRequest

//funcion anonima autoejecutable
(() => {
    //primero se instancia
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    
    //segundo asignar eventos de la peticion
    //se ejecuta cuando detcta cualquier cambio de estado
    xhr.addEventListener("readystatechange", e => {
        // console.log(xhr);//se imprime 4 veces por los estados de peticion que pasa
        
        //no retornara nada cuando la propiedad ready state
        //sea diferente a 4
        if(xhr.readyState !== 4) return;
        
        //solo se ejecutara cuando el ready state sea 4
        // console.log(xhr);
        
        // console.log(xhr);
        
        //se ejecutara cuando el estado este entre 200 y 299
        if(xhr.status >= 200 && xhr.status<300) {
            // console.log("EXITO");
            // console.log(xhr.responseText);//vendra toda la respuesta del jsonplaceholder
            let json = JSON.parse(xhr.responseText);//convirtiendo a objeto js
            // console.log(json);

            //en este foreach recorrera por cada usuario y 
            //tomara de sus propiedades nombre, email y telefono

            json.forEach(el => {
                const $li = document.createElement("li");//creando li
                $li.innerHTML = `<strong>NOMBRE:</strong> ${el.name} | 
                <strong>EMAIL:</strong> ${el.email} | 
                <strong>TELEFONO:</strong> ${el.phone}`;//agregandole los datos al li
                $fragment.appendChild($li);//agregandole el li al fragmento
            });

            $xhr.appendChild($fragment);//agregando el fragmento al xhr
        } 
        else{
            // console.log("ERROR");
            //si el status test viene vacio dira ocurrio error
            let message = xhr.statusText || "ocurrio un error";
            $xhr.innerHTML = `ERROR ${xhr.status}: ${message}`;
        };

        // console.log("ESTO CARGARA DE CUALQUIER FORMA");
    });

    //abrir la peticion mediante el metodo y el endpoint (recurso - url)
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    // xhr.open("GET", "assets/users.json");//de manera local con el json

    //envio de la peticion con o sin datos (depende)
    xhr.send();

})();

//CAP 107. AJAX: API Fetch

(()=>{
    const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

    //then y catch vendrian siendo el if else de arriba
    fetch("https://jsonplaceholder.typicode.com/users")
    // fetch("assets/users.json")
    /* .then((res) => {
    //then manda una respuesta
    console.log(res);
    //operador ternario PARA VALIDACION DE ERROR
    //si la respuesta en ok es true pasa al siguiente then y convierte a json
    return res.ok ? res.json() : Promise.reject(res);
    }) */
    //en este then se transforma la respuesta
    .then((res)=> (res.ok ? res.json() : Promise.reject(res)))
    //en este la logica de programacion
    .then((json) =>{
        //recibe la respuesta de arriba
        // console.log(json);
        // $fetch.innerHTML = json;
        json.forEach(el => {
                const $li = document.createElement("li");//creando li
                $li.innerHTML = `<strong>NOMBRE:</strong> ${el.name} | 
                <strong>EMAIL:</strong> ${el.email} | 
                <strong>TELEFONO:</strong> ${el.phone}`;//agregandole los datos al li
                $fragment.appendChild($li);//agregandole el li al fragmento
            });

            $fetch.appendChild($fragment);//agregando el fragmento al fetch
    })
    //el catch para error
    .catch((err)=>{
        //espera recibir error
        // console.log(err);
        let message = err.statusText || "ocurrio un error";
        $fetch.innerHTML = `ERROR ${err.status}: ${message}`;
    })
    //el finally
    .finally(()=>{
        //no importa el resultado se ejecutara
        // console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch");
    
    });
})();

//de esta manera con fetch la formula es la sgt. 
//el primer then donde se transforma la respuesta
//el segundo then donde se usa la logica de programacion
//el catch para error
//el finally opcional

//CAP 107. AJAX: API Fetch + Async-Await

(()=>{
    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

    async function getData(){
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
            json = await res.json();

            // console.log(res, json);

            // if(!res.ok) throw new Error("ocurrio un error al solicitar los datos");

            //si el resultado ok es falso lanza error con estado y texto
            if(!res.ok) throw {status:res.status, statusText:res.statusText}

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `<strong>NOMBRE:</strong> ${el.name} | 
                <strong>EMAIL:</strong> ${el.email} | 
                <strong>TELEFONO:</strong> ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);

        }catch(err){
            let message = err.statusText || "ocurrio un error";
            $fetchAsync.innerHTML = `ERROR ${err.status}: ${message}`;
        } finally{
            // console.log("Esto se ejecutará independientemente del try... catch");
        }
    };

    getData();
})();



