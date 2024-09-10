const table = document.querySelector('#table');
const divBotoes = document.querySelector('#div-botoes');
let alunos = [];
let pagina = 1;
let quantidade = 0;
let pagge = '';

renderizarTabela();

async function gerarBotoes() {
  const url = `http://localhost:3000/alunos`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Status da resposta: ${response.status}`);
    }
    const json = await response.json();
    quantidade = Math.ceil(json.length / 10); // Quantidade de páginas
    console.log('Total de páginas:', quantidade);

    // Gerando os botões de paginação
    for (let c = 1; c <= quantidade; c++) {
      pagge += `<input type="submit" class="botao-page" id="${c}" value="${c}" onclick="mudarPagina(${c})"/>`;
    }

    divBotoes.innerHTML = `
      <div id="div-botoes">
        ${pagge}
      </div>
    `;
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchData(pagina) {
  const url = `http://localhost:3000/alunos?_page=${pagina}&_limit=10`; // Limita a 10 itens por página
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Status da resposta: ${response.status}`);
    }
    const json = await response.json();
    alunos = json; // Atualiza os dados de alunos
    setTimeout(() => {
      
    }, 3000);
  } catch (error) {
    console.error(error.message);
  }
}

async function renderizarTabela() {
  await fetchData(pagina); // Busca os dados da página atual
  console.log(pagina)
  table.innerHTML = `
    <table id="table">
      <thead>
        <tr class="linha-de-titulos">
          <th>Nome</th>
          <th>Idade</th>
          <th>Curso</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        ${alunos.map((aluno) => `
          <tr class="linha-dados">
            <td class="dados-tabela">${aluno.nome}</td>
            <td class="dados-tabela">${aluno.idade}</td>
            <td class="dados-tabela">${aluno.curso}</td>
            <td class="dados-tabela">${aluno.email}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function mudarPagina(value) {
  pagina = value; // Atualiza a página
  pagge = ''; // Limpa os botões para evitar repetição
  renderizarTabela(); // Re-renderiza a tabela com os novos dados
}

// Gera os botões ao carregar a página
gerarBotoes();
