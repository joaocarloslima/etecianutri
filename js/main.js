let pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;
    
    let pesoValido = true;
    let alturaValida = true;
    
    let tdIMC = paciente.querySelector(".info-imc");
    
    if (peso <= 0 || peso > 1000) {
        pesoValido = false;
        tdIMC.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0) {
        alturaValida = false;
        tdIMC.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoValido && alturaValida) {
        let imc = peso / altura ** 2;
        tdIMC.textContent = imc.toFixed(2);
    }
});

let titulo = document.querySelector("#titulo");
titulo.onclick = mostrarMensagem;

function mostrarMensagem(){
    console.log("evento aconteceu");
}

function trocarCor(){
    let cor = parseInt(Math.random()*255);
    titulo.style.color = "rgb(" +cor+ "," +cor+ "," +cor+ ")";
}
