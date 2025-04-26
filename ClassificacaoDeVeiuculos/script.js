// Função que será chamada ao clicar no botão
function classificarVeiculo() {
    // Pega o valor digitado no campo "modelo"
    const modelo = document.getElementById("modelo").value;
    
    // Pega o valor digitado no campo "ano" e transforma para número inteiro
    const ano = parseInt(document.getElementById("ano").value);
    
    // Pega o valor digitado no campo "preço" e transforma para número decimal (float)
    const preco = parseFloat(document.getElementById("preco").value);
    
    // Pega o ano atual do sistema (computador ou celular)
    const anoAtual = new Date().getFullYear();

    // Inicializa as variáveis para a classificação e o preço final
    let classificacao = "";
    let precoFinal = 0;

    // Verifica se o veículo é Novo (ano igual ao atual)
    if (ano === anoAtual) {
        classificacao = "Novo";
        precoFinal = preco * 1.08; // Aumenta 8% no preço
    }
    // Se não for novo, verifica se é Seminovo (até 2 anos de uso)
    else if (anoAtual - ano <= 2) {
        classificacao = "Seminovo";
        precoFinal = preco * 1.10; // Aumenta 10% no preço
    }
    // Se não for novo nem seminovo, é considerado Usado
    else {
        classificacao = "Usado";
        precoFinal = preco * 1.10; // Também aumenta 10% no preço
    }

    // Exibe o resultado na página dentro da div com id "resultado"
    document.getElementById("resultado").innerHTML = `
      <strong>Modelo:</strong> ${modelo}<br>
      <strong>Ano:</strong> ${ano}<br>
      <strong>Classificação:</strong> ${classificacao}<br>
      <strong>Preço de Venda:</strong> R$ ${precoFinal.toFixed(2).replace('.', ',')}
    `;
}