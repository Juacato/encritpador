const texTarea = document.querySelector('.text__area');
const mensaje = document.querySelector('.mensaje');
const btnCopiar = document.getElementById('btnCopiar');

const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function validarTexto(texto) {
    return /^[a-z\s]*$/.test(texto);
}

function procesarTexto(texto, encriptar = true) {
    if (!validarTexto(texto)) {
        alert("Solo se permiten letras minúsculas sin tilde");
        return "";
    }

    return matrizCodigo.reduce((acc, [letra, codigo]) => {
        if (encriptar) {
            return acc.replaceAll(letra, codigo);
        } else {
            return acc.replaceAll(codigo, letra);
        }
    }, texto.toLowerCase());
}

function btnEncriptar() {
    const textoEncriptado = procesarTexto(texTarea.value);
    mensaje.value = textoEncriptado;
    texTarea.value = "";
    actualizarInterfaz();
}

function btnDesencriptar() {
    const textoDesencriptado = procesarTexto(texTarea.value, false);
    mensaje.value = textoDesencriptado;
    texTarea.value = "";
    actualizarInterfaz();
}

function copiarTexto() {
    mensaje.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles");
}

function actualizarInterfaz() {
    const hayTexto = mensaje.value.trim() !== '';
    mensaje.style.backgroundImage = hayTexto ? 'none' : 'url("../assets/muñeco.png")';
    btnCopiar.style.display = hayTexto ? 'block' : 'none';
}

btnCopiar.addEventListener('click', copiarTexto);
actualizarInterfaz();