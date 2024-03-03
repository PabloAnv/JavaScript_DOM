//querySelector

let heading = document.querySelector(".header__texto h2") //Retorna 0 o 1 elementos
heading.textContent = ("Nuevo Heading")
console.log(heading);

//querySelectorAll 

const enlaces = document.querySelectorAll(".navegacion a") //De 0 hasta todos
enlaces[0].textContent = 'Nuevo texto para Enlace'
enlaces[0].classList.add = "nueva-clase"
enlaces[0].classList.remove = "navegacion__enlace"
console.log(enlaces[0]);

//getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);