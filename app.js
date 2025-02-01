//Declaro una variable de tipo array, que almacenará los nombres de los amigos ingresados.
let amigos = [];

//Implemento dos funciones: una para agregar amigos al array "amigos" y otra para limpiar el campo de entrada
function agregarAmigo(){
    //Capturo el valor del campo de entrada.
    let nombreAmigo = document.getElementById('amigo').value;
    //Valido la entrada para asegurarme de que el campo no esté vacío.
    if(nombreAmigo === ''){
        alert("Por favor, inserte un nombre");
    }else{
        //añado el nombre del amigo al arreglo
        amigos.push(nombreAmigo);
        limpioCampoDeEntrada();
        actualizarLista();
    }
}

function limpioCampoDeEntrada(){
    document.querySelector('#amigo').value = '';
}

//actualizarLista() agrega a una lista HTML los nombres que hay en el arreglo.
function actualizarLista(){
    let lista = document.getElementById('listaAmigos'); //selecciono la lista donde se mostrarán los amigos
    lista.innerHTML = ""; //limpio la lista
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li'); //creo el elemento de lista (<li>)
        li.textContent = amigos[i]; 
        lista.appendChild(li);
    }
}

//sortearAmigo() selecciona de manera aleatoria uno de los nombres almacenados en el array.
function sortearAmigo(){
    if(amigos.length == 0){
        alert("No hay amigos para sortear :(");
    }else{
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        let muestroAmigoSorteado = document.getElementById('resultado');
        muestroAmigoSorteado.innerHTML = "El amigo secreto es " + amigoSorteado;
    }
}