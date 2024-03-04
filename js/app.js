//Variables





//querySelector

let heading = document.querySelector(".header__texto h2") //Retorna 0 o 1 elementos
heading.textContent = ("Nuevo Heading")
console.log(heading);

//querySelectorAll 

const enlaces = document.querySelectorAll(".navegacion a") //De 0 hasta todos
enlaces[0].textContent = 'Nuevo texto para Enlace'
enlaces[0].classList.add = "nueva-clase"
// enlaces[0].classList.remove = "navegacion__enlace"
// console.log(enlaces[0]);

//getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);

//Crear nuevo enlace
const nuevoEnlace = document.createElement('A');
nuevoEnlace.href = 'nuevo-enlace.html';
nuevoEnlace.textContent = 'Un nuevo enlace';
nuevoEnlace.classList.add('navegacion__enlace');

let enlace = document.querySelector('.navegacion');
enlace.appendChild(nuevoEnlace);


console.log(nuevoEnlace);

//Eventos

console.log(1)

window.addEventListener('load', () => console.log(2)) //Espera a que se descarguen todos los archivos

window.onload = () => console.log(3);       //Despues de que todo cargue hasta el load

document.addEventListener('DOMContentLoaded', () => console.log(4))  //Solo espera a que se haya descargado el HTML

console.log(5)

window.onscroll = function(){
    console.log('scrolling...');
}

//Seleccionar elementos y asociarlos a un evento

// const boton = document.querySelector('.boton--primario')
// boton.addEventListener('click', (evento) => {
     
//      evento.preventDefault();
//      console.log('enviando a formulario')
//     })

//Eventos de los input y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', eve);
email.addEventListener('input', eve);
mensaje.addEventListener('input', eve);

function eve(e){
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

//Evento de submit en formularios

const formulario = document.querySelector('.formulario')
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    //Validar el formulario

    const {nombre, email, mensaje} = datos;
    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los cambios son obligatorios', 'error');

        return;
    }

    mostrarAlerta('Se ha registrado exitosamente', 'correcto');
    //Enviar el formulario


})

function mostrarAlerta (mensaje, color){
    let alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add(`${color}`);
    console.log(alerta);
    formulario.appendChild(alerta);

    
    //Enviado correctamente
    //Desaparesca despues de 5 segundo
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

// function mostrarExito(mensaje){
//     let exito = document.createElement('p');
//     exito.textContent = mensaje;
//     exito.classList.add('error')
//     formulario.appendChild(exito);

//     setTimeout(() => {
//         exito.remove();
//     }, 5000);
// }