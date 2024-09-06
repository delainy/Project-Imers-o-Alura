JavaScript
function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos pelo seu ID.
  let section = document.getElementById("resultados-pesquisa");

  // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
  let resultados = "";

  // Itera sobre cada elemento (dado) no array 'dados'.
  for (let dado of dados) {
    // Concatena uma nova div com as informações do dado atual à string 'resultados'.
    // As informações são formatadas como HTML para criar uma card com título, descrição e botão.
    resultados += `
      <div class="card-carees">
        <h3>${dado.titulo}</h3> <div class="line">
        </div> <p>${dado.descricao}</p> 
        <button><a href=${dado.link} target="_blank">Mais Informações</a></button> 
        </div>
    `;
  }

  // Atribui o conteúdo da string 'resultados' (agora com todas as cards) ao HTML da seção.
  // Isso substitui o conteúdo anterior da seção pelos novos resultados.
  section.innerHTML = resultados;
}



