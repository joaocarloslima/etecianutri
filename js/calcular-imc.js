let pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(pacienteTr => {
    let paciente = {
        peso: pacienteTr.querySelector(".info-peso").textContent,
        altura: pacienteTr.querySelector(".info-altura").textContent
    }

    let tdIMC = pacienteTr.querySelector(".info-imc");

    if (!validarPeso(paciente.peso)){
        tdIMC.textContent = "Peso inválido";
        pacienteTr.classList.add("paciente-invalido");
    }

    if (!validarAltura(paciente.altura)) {
        tdIMC.textContent = "Altura inválida";
        pacienteTr.classList.add("paciente-invalido");
    }

    if (validarPaciente(paciente)) tdIMC.textContent = calcularIMC(paciente);
    
});

function calcularIMC(paciente){
    let imc = paciente.peso / paciente.altura ** 2;
    return imc.toFixed(2);
}

function validarPeso(peso) {
    return !(peso <= 0 || peso > 1000);
}

function validarAltura(altura) {
    return !(altura <= 0);
}

function validarPaciente(paciente){
    return (
        validarPeso(paciente.peso) && 
        validarAltura(paciente.altura)
    );
}


