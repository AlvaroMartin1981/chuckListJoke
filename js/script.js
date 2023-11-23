/*
    Manejador de click en el botón "Obtener Chiste"
    Una función para obtener un chiste de Chuck Norris desde la API
    Una función para renderizar la lista de chistes en el DOM
    Una función para guardar la lista de chistes en localStorage
    Una función para cargar la lista de chistes desde localStorage
    button id="fetchJoke"
    ul id="jokeList"
revisar si fuera necesario JSON.stringify y JSON.parse para los datos del localStorage*/
 const obtenerChiste = document.getElementById('fetchJoke');
 const listaChiste = document.getElementById('jokeList');


 //obtenerChiste.addEventListener('click',()=> {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => {
        if(!response.ok){
            throw new Error('No se pudo obtener el chiste');
        }
            return response.json()
        })
    .then(data => {
        mostrarChistes(data);
    })
    .catch(error => {
        listaChiste.innerHTML
        console.error(error);
    })

const mostrarChistes = (data) => {
        listaChiste.innerHTML = ''
        listaChiste.innerHTML += `
            <li>${data.value}</li>`;
       
    }

/*const contadorVisitas = document.getElementById("contadorVisitas")
const btnReestablecer = document.getElementById("btnReestablecer")
let contador = localStorage.getItem("contador") || 0
    // let contador = localStorage.getItem("contador")? localStorage.getItem("contador") : 1
contador++
localStorage.setItem("contador", contador)
contadorVisitas.innerHTML = contador
const restablecerContador = () => {
    localStorage.removeItem("contador")
    contador = 0
    contadorVisitas.innerHTML = contador
}
btnReestablecer.addEventListener("click", restablecerContador)*/

