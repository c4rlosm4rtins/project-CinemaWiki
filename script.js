function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value


  //Se o campo pesquisa for vazio ele  não vai executar nada
  if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi Encontradado. Você não pesquisou por uma Serie ou Filme</p>";
    return
  }

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";

  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado e cria HTML para cada resultado
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    //Se o titulo includes campoPesquisa ou descrição includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
      <div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <p class="descricao-meta">${dado.descricao}</p>
      </div>
    `;
    }

  }
  if (!resultados) {
    resultados = "<p>Nada foi Encontradado</p>"
  }
  // Atualiza o conteúdo da seção com os resultados
  section.innerHTML = resultados;
}
