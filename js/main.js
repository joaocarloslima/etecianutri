// pegar o peso
let paciente = document.querySelector(".paciente");
let tdPeso = paciente.querySelector(".info-peso");
let peso = tdPeso.textContent;

// pegar a altura
let tdAltura = paciente.querySelector(".info-altura");
let altura = tdAltura.textContent;

let pesoValido = true;
let alturaValida = true;

// validar dados
if (peso <= 0 || peso > 1000) {
    console.error("peso inválido");
    pesoValido = false;
}
if (altura <= 0) {
    console.error("altura inválida");
    alturaValida = false;
}

if (pesoValido && alturaValida ) {
    // calcular o IMC
    let imc = peso / altura ** 2;

    // escrever o IMC na tabela
    let tdIMC = paciente.querySelector(".info-imc");
    tdIMC.textContent = imc;
}


