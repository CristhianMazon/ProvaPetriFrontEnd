// ==========================
// Função principal para buscar dados da API
// ==========================
async function fetchUsers() {
  try {
    // Faz a requisição para a API pública de usuários
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Verifica se a resposta da API é válida (status 200–299)
    if (!response.ok) {
      // Se não for, lança um erro que será capturado no catch abaixo
      throw new Error('Erro ao buscar dados.');
    }

    // Converte a resposta para JSON (transforma em objeto utilizável)
    const users = await response.json();

    // Chama a função para exibir os usuários na tela
    displayUsers(users);

  } catch (error) {
    // Se algo der errado (API fora do ar, sem internet etc.), mostra uma mensagem amigável na tela
    document.getElementById('error-message').textContent =
      'Não foi possível carregar os usuários. Tente novamente mais tarde.';
  }
}

// ==========================
// Função para exibir os usuários em cards estilizados
// ==========================
function displayUsers(users) {
  // Seleciona o elemento do grid onde os cards serão inseridos
  const grid = document.getElementById('user-grid');

  // Para cada usuário retornado pela API:
  users.forEach(user => {
    // Cria um elemento div para representar o card
    const card = document.createElement('div');
    card.className = 'card'; // adiciona a classe para aplicar o CSS

    // Define o conteúdo HTML do card com nome, email e cidade
    card.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Cidade:</strong> ${user.address.city}</p>
    `;

    // Adiciona o card ao grid na página
    grid.appendChild(card);
  });
}

// ==========================
// Executa a função ao carregar a página
// ==========================
fetchUsers();

  