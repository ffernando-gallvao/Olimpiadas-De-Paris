// Obtém o campo de entrada de texto pelo ID "campo-pesquisa"
const campoPesquisa = document.getElementById("campo-pesquisa");

// Adiciona um evento ao campo de pesquisa que escuta a tecla "Enter" pressionada
campoPesquisa.addEventListener("keypress", function(event) {
    // Verifica se a tecla pressionada é "Enter"
    if (event.key === "Enter") {
        pesquisar(); // Chama a função de pesquisa
    }
});

// Função principal que executa a lógica de pesquisa
function pesquisar() {
    // Seleciona o elemento que exibirá os resultados da pesquisa
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        // Exibe uma mensagem de erro se nada foi digitado
        section.innerHTML = "<p class='mensagem-erro'>Ops! Você Tem Que Digitar Algo, Pois Nada Foi Encontrado.</p>";
        return; // Encerra a função
    }

    // Converte o valor da pesquisa para minúsculas para facilitar a comparação
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa variáveis para construir o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada objeto contido na variável "dados" (certifique-se de que "dados" esteja definido em algum lugar do seu código)
    for (let dado of dados) {
        // Converte os campos de título, descrição e tags para minúsculas para facilitar a comparação
        titulo = dado.titulo.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase(); // Corrigido para 'descricao'
        tags = dado.tags.toLocaleLowerCase();

        // Verifica se o termo pesquisado está presente no título, descrição ou tags do objeto atual
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Adiciona um novo item ao HTML de resultados
            resultados += `
            <div class="item-resultado">
                <img src="${dado.foto}" alt="${dado.titulo}">
                <p class="esporte">Esporte: ${dado.esporte}</p>
                <h2>
                   <a href="${dado.instagram}" target="_blank" >${dado.titulo}</a>
               </h2>
               <p class="descricao-meta">${dado.descricao}</p>
               <a href=${dado.link} target="_blank">>>>>  Para Mais Informações <<<<</a>
            </div>
        `;
        }
    }

    // Verifica se nenhum resultado foi encontrado
    if (!resultados) {
        resultados = "<p class='mensagem-erro'>Ops!! Parece Que Você Não Digitou Sobre Um Atleta ou Esporte.</p>";
    }

    // Atualiza o conteúdo da seção de resultados com o HTML construído
    section.innerHTML = resultados;
}
