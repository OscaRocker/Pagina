// encuentra al elemento HTML (el botón) mediante su ID
const miBoton = document.getElementById('miBoton');
//Define la función que se ejecutará cuando se haga click en el botón
function handleClick() {
    alert('!Hola¡ Has hecho clic en el botón.');
}
miBoton.addEventListener("click", handleClick);