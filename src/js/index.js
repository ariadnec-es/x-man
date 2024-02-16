// OBJETIVO 1 - Quando passar o mouse em cima do personagem na lista, devemos selecioná-lo.
// passo 1 - pegar os personagens no JS para pode verificar quando passar o mouse em cima de um deles
// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursos do mouse
// passo 3 - verificar se já existe um personagem selecionado, se sim devemos remover a seleção dele
// OBJETIVO 2 -  Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
// passo 1 - pegar o elemento do personagem grande pra adiconar as informações nele
// passo 2 - alterar a imagem do personagem
// passo 3 - alterar o nome a descrição do personagem grande
// passo 4 - alterar a descrição do personagem grande

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");
    personagem.classList.add("selecionado");

    const imagemPersonagemGrande = document.querySelector(".personagem-grande");
    
    const idPersonagem = personagem.attributes.id.value;

    imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;

    const nomePersonagem = document.getElementById("nome-personagem");
    nomePersonagem.innerText = personagem.getAttribute("data-name");

    const descricaoPersonagem = document.getElementById("descricao-personagem");
    descricaoPersonagem.innerText = personagem.getAttribute("data-description");
  });
});