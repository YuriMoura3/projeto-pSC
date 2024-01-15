const botoes = document.querySelectorAll('.botao');
const pagina = document.querySelectorAll(".pagina");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao(botao);
        desselecionarPagina(indice);
    });
});

function desselecionarPagina(indice) {
    const paginaAtiva = document.querySelector(".pagina.ativo");
    paginaAtiva.classList.remove("ativo");
    pagina[indice].classList.add("ativo");
}

function desselecionarBotao(botao) {
    const botaoAtivo = document.querySelector(".botao.ativo");
    botaoAtivo.classList.remove("ativo");
    botao.classList.add("ativo");
}
