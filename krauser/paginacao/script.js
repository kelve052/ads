const table = document.querySelector('#table');
const um = document.querySelector('#um');
const dois = document.querySelector('#dois');
const tres = document.querySelector('#tres');
const quaro = document.querySelector('#quaro');
const divBotoes = document.querySelector('.div-botoes')
let alunos = [];

let pagina = 1;

renderizarTabela();

um.addEventListener('click', (e) => {
    e.preventDefault();
    pagina = 1;
    renderizarTabela();
});

dois.addEventListener('click', (e) => {
    e.preventDefault();
    pagina = 2;
    renderizarTabela();
});

tres.addEventListener('click', (e) => {
    e.preventDefault();
    pagina = 3;
    renderizarTabela();
});

quaro.addEventListener('click', (e) => {
    e.preventDefault();
    pagina = 4;
    renderizarTabela();
    alert(pagina)
});


async function gerarBotoes() {
    const url = `http://localhost:3000/alunos?`;
      try {
        const response = await fetch(url);
        console.log(response)
        if (!response.ok) {
          throw new Error(`Status da resposta: ${response.status}`);
        }
        const json = await response.json();
        const quantidade = json.length/10
        alert(quantidade)
        console.log(alunos.length)
      } catch (error) {
        console.error(error.message);
      }
    }
    gerarBotoes()
async function fetchData(pagina) {
    const url = `http://localhost:3000/alunos?_page=${pagina}`;
      try {
        const response = await fetch(url);
        console.log(response)
        if (!response.ok) {
          throw new Error(`Status da resposta: ${response.status}`);
        }
        const json = await response.json();
        alunos = json.data;
        console.log(alunos)
      } catch (error) {
        console.error(error.message);
      }
    }

async function renderizarTabela() {
    await fetchData(pagina);
    table.innerHTML =
    `<table id="table">
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
                    <td class="dados-tabela">${aluno.id}</td>
                    <td class="dados-tabela">${aluno.curso}</td>
                    <td class="dados-tabela">${aluno.email}</td>
                </tr>
            `).join('')}
        </tbody>
    </table>`;
}
