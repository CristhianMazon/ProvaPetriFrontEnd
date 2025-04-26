// Cria um vetor vazio para armazenar as notícias
const noticias = [];

// Função para adicionar uma notícia
function adicionarNoticia() {
    const noticiaInput = document.getElementById("noticia").value;

    // Verifica se o campo está vazio
    if (noticiaInput.trim() === "") {
        alert("Digite uma notícia antes de adicionar.");
        return;
    }

    noticias.push(noticiaInput); // Adiciona a notícia ao vetor
    document.getElementById("noticia").value = ""; // Limpa o campo de entrada
    document.getElementById("quantidade").innerText = `Total de notícias cadastradas: ${noticias.length}`; // Atualiza o contador

    mostrarUltimasNoticias(); // Atualiza visualização automática das 3 últimas
}

// Função que mostra automaticamente as 3 últimas notícias
function mostrarUltimasNoticias() {
    let listaHTML = "<h3>Últimas Notícias:</h3><ul>";

    const inicio = Math.max(noticias.length - 3, 0); // Garante que não quebre se houver menos de 3

    for (let i = noticias.length - 1; i >= inicio; i--) {
        listaHTML += `<li>${noticias[i]}</li>`;
    }

    listaHTML += "</ul>";
    document.getElementById("listaNoticias").innerHTML = listaHTML; // Mostra na página
}

// Função para visualizar um número personalizado de notícias
function visualizarNoticias() {
    if (noticias.length === 0) {
        alert("Nenhuma notícia cadastrada ainda.");
        return;
    }

    let quantidadeDesejada = prompt(`Quantas últimas notícias você deseja visualizar? (Máx: ${noticias.length})`);
    quantidadeDesejada = parseInt(quantidadeDesejada);

    // Validação do número informado
    if (isNaN(quantidadeDesejada) || quantidadeDesejada <= 0 || quantidadeDesejada > noticias.length) {
        alert("Número inválido. Tente novamente.");
        return;
    }

    let listaHTML = "<h3>Últimas Notícias:</h3><ul>";

    for (let i = noticias.length - 1; i >= noticias.length - quantidadeDesejada; i--) {
        listaHTML += `<li>${noticias[i]}</li>`;
    }

    listaHTML += "</ul>";
    document.getElementById("listaNoticias").innerHTML = listaHTML; // Exibe as notícias na página
}
