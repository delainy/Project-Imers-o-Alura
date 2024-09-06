function pesquisar(){
    console.log("clicou")
}




let section = document.getElementById("resultados-pesquisa");
console.log(section);


let resultados = ""

for(let dado of dados){
    resultados += `
    <div class="card-carees">
       <h3>${dado.titulo}</h3>
         <div class="line"></div>
         <p>${dado.descricao}
        </p>
            <button><a href=${dado.link} target="_blank">Mais Informações</a></button>
    </div>
`
}

section.innerHTML = resultados;