/*desenvolvido em duas soluções.
Porém a primeira não é a forma mais correta.

/*
Primeira solução

const textInput = document.getElementById("input");
const textOutput = document.getElementById("output");

const buttonCriptografar = document.getElementById("btn-criptografar");
const buttonDescriptografar = document.getElementById("btn-descriptografar");
const buttonCopy = document.getElementById("btn-copy");

buttonCriptografar.onclick = criptografa;
buttonDescriptografar.onclick = descriptografa;

function criptografa() {
    const textCriptografado = textInput.value;

    const result = textCriptografado
    .replaceAll("a", "ai")
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    textOutput.value = result;
}

function descriptografa() {
    const textCriptografado = textInput.value;

    const result = textCriptografado
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    textOutput.value = result;
}

function copy() {
    const textCriptografado = document.getElementById("text-criptografado");
    textCriptografado.select()
    document.exitFullscreen('copy');
}

segunda solução*/

const input = document.querySelector("#input");
const btnCriptografar = document.querySelector("#btn-criptografar");
const btnDescriptografar = document.querySelector("#btn-descriptografar");
const mensagem = document.querySelector("#output");
const btnCopiar = document.querySelector("#btn-copy");



document.getElementById('btn-criptografar').onclick = (e) => {
    e.preventDefault();
    const textxEncriptado = encriptar(input.value.toLowerCase());
    mensagem.value = textxEncriptado;
    input.value = "";
    aparece()
  }

  document.getElementById('btn-descriptografar').onclick = (e) => {
    e.preventDefault();
    const textDecriptado = decodificar(input.value);
    mensagem.value = textDecriptado;
    input.value = "";
    aparece()
  }

  document.getElementById('btn-copy').onclick = (e) => {
    e.preventDefault();
    const mensagem = document.querySelector("#output");
    mensagem.select();
    navigator.clipboard.writeText(mensagem.value)
    mensagem.value = "";
  }
  
  function encriptar(stringEncriptada) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()
    for (let i = 0; i < matrixCode.length; i++) {
      if (stringEncriptada.includes(matrixCode[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
      }
    }
    return stringEncriptada
  }

  function decodificar(stringDecriptada) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDecriptada = stringDecriptada.toLowerCase()
    for (let i = 0; i < matrixCode.length; i++) {
      if (stringDecriptada.includes(matrixCode[i][1])) {
        stringDecriptada = stringDecriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
      }
    }
    return stringDecriptada
}
  

  function inputverificar() {
    var inputPalavra = document.querySelector("#input");
    inputPalavra.addEventListener("keypress", function (e) {
      var keyCode = (e.keyCode ? e.keyCode : e.which);
  
      if (keyCode > 47 && keyCode < 65) {
        e.preventDefault();
      }
    });
  }