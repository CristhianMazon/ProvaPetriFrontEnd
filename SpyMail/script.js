// Variável global para armazenar a mensagem original
let mensagemOriginal = "";

/**
 * Função responsável por criptografar a mensagem digitada pelo usuário.
 * Ela divide a mensagem em dois grupos: um com os caracteres das posições pares e outro com os caracteres das posições ímpares.
 * Depois, concatena ambos para formar a mensagem criptografada e exibe o resultado.
 */
function criptografar() {
  // Obtém o valor da mensagem digitada pelo usuário no campo de input
  const input = document.getElementById("mensagem").value;

  // Verifica se o campo de entrada está vazio
  if (input.trim() === "") {
    alert("Digite uma mensagem para criptografar.");
    return;
  }

  // Salva a mensagem original para poder decriptografá-la depois
  mensagemOriginal = input;

  // Variáveis para armazenar as letras nas posições pares e ímpares
  let pares = "";
  let impares = "";

  // Loop que percorre cada caractere da mensagem
  for (let i = 0; i < input.length; i++) {
    // Se o índice for par, adiciona o caractere à string 'pares'
    if (i % 2 === 0) {
      pares += input[i];
    } else {
      // Se o índice for ímpar, adiciona o caractere à string 'impares'
      impares += input[i];
    }
  }

  // Concatena as letras pares e ímpares para formar a mensagem criptografada
  const mensagemCriptografada = pares + impares;

  // Exibe o resultado da criptografia no elemento com o id 'resultado'
  document.getElementById("resultado").innerText = `Mensagem criptografada: ${mensagemCriptografada}`;
}

/**
 * Função responsável por decriptografar a mensagem.
 * Ela exibe a mensagem original que foi salva ao criptografar.
 */
function decriptografar() {
  // Verifica se há uma mensagem original armazenada para decriptografar
  if (mensagemOriginal === "") {
    alert("Nenhuma mensagem para decriptografar.");
    return;
  }

  // Exibe a mensagem original no elemento com o id 'resultado'
  document.getElementById("resultado").innerText = `Mensagem original: ${mensagemOriginal}`;
}
