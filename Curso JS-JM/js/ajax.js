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
        
        console.log(xhr);
        
        //se ejecutara cuando el estado este entre 200 y 299
        if(xhr.status >= 200 && xhr.status<300) {
            console.log("EXITO");
            // console.log(xhr.responseText);//vendra toda la respuesta del jsonplaceholder
            let json = JSON.parse(xhr.responseText);//convirtiendo a objeto js
            console.log(json);

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
            console.log("ERROR");
            //si el status test viene vacio dira ocurrio error
            let message = xhr.statusText || "ocurrio un error";
            $xhr.innerHTML = `ERROR ${xhr.status}: ${message}`;
        };

        console.log("ESTO CARGARA DE CUALQUIER FORMA");
    });

    //abrir la peticion mediante el metodo y el endpoint (recurso - url)
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    // xhr.open("GET", "assets/users.json");//de manera local con el json

    //envio de la peticion con o sin datos (depende)
    xhr.send();

})();


