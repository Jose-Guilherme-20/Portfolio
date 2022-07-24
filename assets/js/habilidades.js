const skills = document.querySelectorAll(".skill-box");
const descricao = document.querySelector(".texto-descricao");
const sobreSkill = [
  " <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>",
  "  <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>",
  " <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>",
  "<p> O Bootstrap  é  um framework Front End utilizados por milhares de desenvolvedores web pelo mundo. </p>",
  "<p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>",
  " <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>",
];

skills.forEach((elemento, index) => {
  let index1 = index;
  let elemento1 = elemento;
  elemento.addEventListener("mouseover", (evento) => {
    descricao.innerHTML = `<p>${sobreSkill[index1]} </p>`;
  });
  elemento.addEventListener("mouseout", (evento, elemento) => {
    descricao.innerHTML =
      "/* Passe o mouse por cima de alguma habilidade para ler a descrição */";
  });
});
