const inputTitulo = document.getElementById('titulo')
const inputAutor = document.getElementById('autor')
const inputAno = document.getElementById('ano')

const btn = document.getElementById('btn')

const tabela = document.getElementById('body-table')

const caixaMensagen = document.getElementById('caixa-mensagen')

console.log(inputTitulo)
console.log(inputAutor)
console.log(inputAno)

inputTitulo.value = 'Blibia'
inputAutor.value = 'Deus'
inputAno.value = '658'



const addLivro = (titulo, autor, ano)=>{
    const tdTitulo = document.createElement('td')
    const tdAutor = document.createElement('td')
    const tdAno = document.createElement('td')
    tdTitulo.innerText = titulo
    tdAutor.innerText = autor
    tdAno.innerText = ano

    tdTitulo.className = 'dados-livro'
    tdAutor.className = 'dados-livro'
    tdAno.className = 'dados-livro'

    const linhaDeCadaLivro = document.createElement('tr')
    linhaDeCadaLivro.appendChild(tdTitulo)
    linhaDeCadaLivro.appendChild(tdAutor)
    linhaDeCadaLivro.appendChild(tdAno)

    linhaDeCadaLivro.className = 'linha-de-cada-livro'

    tabela.appendChild(linhaDeCadaLivro)

    caixaMensagen.style.top = '6px'

    setTimeout(() => {
        caixaMensagen.style.top = '-500px'
    }, 3000);
}

btn.addEventListener('click', (e)=>{
    addLivro(inputTitulo.value, inputAutor.value, inputAno.value)
    e.preventDefault()
    console.table(livros)
})