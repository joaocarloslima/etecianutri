var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", evento => {
    evento.target.parentNode.classList.add("fadeOut");
    setTimeout( () => evento.target.parentNode.remove(), 1000) 
});
