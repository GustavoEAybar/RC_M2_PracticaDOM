const cambiarTitulo = () => {
  console.log("dentro de la funcion cambiar titulo");
  //buscar un elemento del html
  //let tituloH1 = document.getElementById('titulo');
  let tituloH1 = document.querySelector("#titulo");
  console.log(tituloH1.innerHTML);
    if(tituloH1.className === "text-light"){
        tituloH1.innerHTML = "Titulo modificado";
        tituloH1.className = "text-warning";
    }else{
        tituloH1.innerHTML = "Práctica DOM";
        tituloH1.className = "text-light";
    }
};

const verMas = () => {
  //obtener el elemento padre
  let contenedorPadre = document.querySelector("#contenedorPadre");
  let btnVerMas = document.querySelector("#btnVerMas");

    //opcion 1 - camino largo
    if(btnVerMas.innerHTML==='Ver mas'){
    //1-crear el elemento del html
    let parrafo = document.createElement("p"); //crea la etiqueta <p></p>

    //2-agregar el contenido
    parrafo.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui porro
            delectus tempora quae adipisci nesciunt quo recusandae officiis
            culpa deleniti distinctio, sapiente, doloribus minus aspernatur
            mollitia assumenda itaque voluptatibus incidunt doloremque id
            magnam! Exercitationem magni voluptates eveniet quae fuga quos,
            quasi aut voluptatibus error dolorum impedit vel nemo autem dolores.`;
    
    parrafo.className = "lead";

    //3-agregar el contenido al html
    contenedorPadre.appendChild(parrafo);

    btnVerMas.innerHTML = "Ocultar";
    btnVerMas.className = "btn btn-danger";
    }else{
        console.log('Aqui vamos a borrar el elemento');
        console.log(contenedorPadre.hasChildNodes());//devuelve true or false
        console.log(contenedorPadre.children.length);//retorna un array de nodos 
        if(contenedorPadre.hasChildNodes() && contenedorPadre.children.length
         >= 2){
            //borrar el parrafo
            contenedorPadre.removeChild(contenedorPadre.children[1]);
            //modificar el texto y la estetica del boton
            btnVerMas.innerHTML = 'Ver mas';
            btnVerMas.className = 'btn btn-primary';
         }
    }

/*  opcion 2 - camino corto
    contenedorPadre.innerHTML += `<p class= "lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui porro
            delectus tempora quae adipisci nesciunt quo recusandae officiis
            culpa deleniti distinctio, sapiente, doloribus minus aspernatur
            mollitia assumenda itaque voluptatibus incidunt doloremque id
            magnam! Exercitationem magni voluptates eveniet quae fuga quos,
            quasi aut voluptatibus error dolorum impedit vel nemo autem dolores.</p>`;
            btnVerMas.innerHTML = "Ocultar";
            btnVerMas.className = "btn btn-danger";
    }else{}*/
};

//la propiedad para acceder al texto o al 
//