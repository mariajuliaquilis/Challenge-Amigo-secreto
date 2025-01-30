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
    }
}

function limpioCampoDeEntrada(){
    document.querySelector('#amigo').value = '';
}