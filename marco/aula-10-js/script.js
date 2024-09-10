const paginacao = document.querySelector("#paginacao");
const tabela = document.querySelector("#tabela");
const form = document.querySelector("#form");
const inputNome = document.querySelector("#input");

const url = "http://localhost:3000";

let alunos = [];
let qtdPaginas = 0;
let paginaAtual = 0;

async function getAlunos(pagina = 1) {
    await fetch(`${url}/alunos?_page=${pagina}`)
        .then(result => result.json())
        .then(result => {
            alunos = result.data;
            qtdPaginas = result.pages;
            result.next == null ? paginaAtual = result.prev + 1 : paginaAtual = result.next - 1;
        })
        .catch(error => console.log(error));
}

async function mudarPagina(pagina) {
    console.log(`Mudando para a página ${pagina}`);
    await getAlunos(pagina);
    renderizarTabela();
    renderizarPaginacao();
}

function renderizarPaginacao() {
    if (qtdPaginas > 0) {
        let p = "";
        for (let i = 1; i <= qtdPaginas; i++) {
            p += `<a href='#' onClick='mudarPagina(${i})'>${i}</a>`;
        }
        paginacao.innerHTML = p;
    }
}

function renderizarTabela() {
    tabela.innerHTML = `
        <table>
            <tr>
                <th>Id</th>
                <th>Nome</th>
            </tr>
            ${alunos.map(a => (
                `
                <tr>
                    <td>${a.id}</td>
                    <td class="td-lixeira">
                        ${a.nome}
                        <button class="botao-lixeira" onclick="deletarItem(${a.id})">
                            <img src="trash.svg" alt="icone lixeira">
                        </button>
                    </td>
                </tr>
                `
            )).join("")}
        </table>
    `;
}

async function criarAluno(nome) {
    const novoAluno = {
        nome: nome
    };

    await fetch(`${url}/alunos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoAluno)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao criar o aluno.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Aluno criado com sucesso:', data);

        // Adiciona o novo aluno no array local de alunos
        alunos.push(data);

        // Atualiza a tabela com o novo aluno
    })
    .catch(error => {
        console.error('Erro:', error);
    });
    await getAlunos()
        renderizarTabela()
}

async function deletarItem(id) {
    alert(id)
    await fetch(`${url}/alunos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao deletar o aluno.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Aluno deletado com sucesso:', data);

        // Remove o item do array de alunos
        alunos = alunos.filter(a => a.id !== id);

        // Atualiza a tabela com o array de alunos atualizado
        renderizarTabela();
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

// Função para adicionar um novo aluno quando o formulário é enviado
form.addEventListener('click', async (event) => {
    event.preventDefault(); // Impede o recarregamento da página
    const nome = inputNome.value.trim();

    if (nome) {
        await criarAluno(nome);
    }
});

async function run() {
    await getAlunos();
    renderizarPaginacao();
    renderizarTabela();
}

run();
