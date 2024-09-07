
function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos pelo seu ID.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Transforma todo o texto do campo de pesquisa em letra minúscula
  campoPesquisa = campoPesquisa.toLowerCase()

    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return;
    }

  // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tecnologia = "";

  // Itera sobre cada elemento (dado) no array 'dados'.
  for (let dado of dados) {

    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tecnologia = dado.tecnologias.toLowerCase();

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tecnologia.includes(campoPesquisa)){
        //cria um novo elemento
        resultados += `
        <div class="card-carees">
            <h3>${dado.titulo}</h3> 
            <div class="line"></div> 
            <p>${dado.descricao}</p> 
            <div class="line"></div> 
            <h4>Principais Tecnologias</h4>
            <span class="tecnologia-card" >${dado.tecnologias}</span>
            <button><a href=${dado.link} target="_blank">Mais Informações</a></button> 
        </div>
    `;
    }
  }

  if(!resultados){
    resultados = "<p>Nada foi encontrado</p>"
  }

  // Atribui o conteúdo da string 'resultados' (agora com todas as cards) ao HTML da seção.
  // Isso substitui o conteúdo anterior da seção pelos novos resultados.
  section.innerHTML = resultados;
}



