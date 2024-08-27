// Capturar elementos del DOM
const textoInput = document.getElementById('texto');
const mensajeParrafo = document.getElementById('mensaje');
const resultadoParrafo = document.getElementById('resultado');
const cifrarBtn = document.getElementById('cifrar-btn');
const descifrarBtn = document.getElementById('descifrar-btn');
const copiarBtn = document.getElementById('copiar-btn');

// Función para validar el texto
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/; // solo minúsculas y espacios
    return regex.test(texto);
}

// Función para cifrar el texto
function cifrar() {
    const texto = textoInput.value;
    if (!validarTexto(texto)) {
        mensajeParrafo.textContent = "No se aceptan mayúsculas ni caracteres especiales";
        return;
    }
    mensajeParrafo.textContent = ""; // Limpiar mensaje de error
    const textoCifrado = texto
        .replace(/a/g, '1')
        .replace(/e/g, '2')
        .replace(/i/g, '3')
        .replace(/o/g, '4')
        .replace(/u/g, '5');
    resultadoParrafo.textContent = textoCifrado;
}

// Función para descifrar el texto
function descifrar() {
    const texto = textoInput.value;
    if (!validarTexto(texto)) {
        mensajeParrafo.textContent = "No se aceptan mayúsculas ni caracteres especiales";
        return;
    }
    mensajeParrafo.textContent = ""; // Limpiar mensaje de error
    const textoDescifrado = texto
        .replace(/1/g, 'a')
        .replace(/2/g, 'e')
        .replace(/3/g, 'i')
        .replace(/4/g, 'o')
        .replace(/5/g, 'u');
    resultadoParrafo.textContent = textoDescifrado;
}

// Función para copiar el texto
function copiar() {
    const resultado = resultadoParrafo.textContent;
    if (resultado !== "") {
        navigator.clipboard.writeText(resultado)
            .then(() => alert("Texto copiado al portapapeles"))
            .catch(err => alert("Error al copiar el texto: " + err));
    }
}

// Asignar funciones a los botones
cifrarBtn.addEventListener('click', cifrar);
descifrarBtn.addEventListener('click', descifrar);
copiarBtn.addEventListener('click', copiar);
