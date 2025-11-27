// Autora: Joselyn Zapata

let contador = 0;

const valueElement = document.getElementById("value");

// Función general para actualizar número y color
function actualizarContador() {
    valueElement.textContent = contador;

    if (contador > 0) {
        valueElement.style.color = "#1f8b4c";
    } else if (contador < 0) {
        valueElement.style.color = "#c0392b";
    } else {
        valueElement.style.color = "#333333";
    }
}

// FUNCIONES QUE SE LLAMAN DESDE HTML (onclick)
function restar() {
    contador = contador - 1;
    actualizarContador();
}

function resetear() {
    contador = 0;
    actualizarContador();
}

function sumar() {
    contador = contador + 1;
    actualizarContador();
}

// Mostrar 0 al inicio
actualizarContador();
