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

let botao = document.querySelector("#botao-cadastrar");

botao.addEventListener("click", function (evento) {
    evento.preventDefault();

    //pegar valores do form
    let formulario = document.querySelector("#form-paciente");
    let nome = formulario.nome.value;
    let peso = formulario.peso.value;
    let altura = formulario.altura.value;
    let gordura = formulario.gordura.value;

    //criar linha
    let table = document.querySelector("#tabela-pacientes");
    let tr = document.createElement("tr");
    tr.classList.add("paciente");

    //criar td nome
    let tdNome = document.createElement("td");
    tdNome.textContent = nome;
    tr.appendChild(tdNome);

    //criar td peso
    let tdPeso = document.createElement("td");
    tdPeso.textContent = peso;
    tr.appendChild(tdPeso);

    //criar td altura
    let tdAltura = document.createElement("td");
    tdAltura.textContent = altura;
    tr.appendChild(tdAltura);

    //criar td gordura
    let tdGordura = document.createElement("td");
    tdGordura.textContent = gordura;
    tr.appendChild(tdGordura);

    table.appendChild(tr);

    //console.log(tr);
});
