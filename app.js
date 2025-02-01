//Declaro una variable de tipo array, que almacenará los nombres de los amigos ingresados.
let amigos = [];

//Implemento dos funciones: una para agregar amigos al array "amigos" y otra para limpiar el campo de entrada
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo === ''){
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(nombreAmigo);
        //console.log(amigos);
        limpioCampoDeEntrada();
        actualizarLista();
    }
}

function limpioCampoDeEntrada(){
    document.querySelector('#amigo').value = '';
}

function actualizarLista(){
    let lista = document.getElementById('listaAmigos'); //selecciono la lista donde se mostrarán los amigos
    lista.innerHTML = ""; //limpio la lista
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li'); //creo el elemento de lista (<li>)
        li.textContent = amigos[i]; 
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert("El arreglo no tiene elementos");
    }else{
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        //console.log(indiceAleatorio);
        let amigoSorteado = amigos[indiceAleatorio];
        let muestroAmigoSorteado = document.getElementById('resultado');
        muestroAmigoSorteado.innerHTML = "El amigo secreto es " + amigoSorteado;
    }
}