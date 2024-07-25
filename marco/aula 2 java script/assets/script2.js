const inputTitulo = document.getElementById('titulo')
const inputAutor = document.getElementById('autor')
const inputAno = document.getElementById('ano')

const btn = document.getElementById('btn')

console.log(inputTitulo)
console.log(inputAutor)
console.log(inputAno)

inputTitulo.value = 'Blibia'
inputAutor.value = 'Deus'
inputAno.value = '658'

console.log(inputTitulo.value)
console.log(inputAutor.value)
console.log(inputAno.value)


const livros = []
const addLivro = (titulo, autor, ano)=>{
    const livro = {
        titulo: titulo,
        autor: autor,
        ano: ano
    }
    livros.push(livro)
}

document.addEventListener('mousemove', (e)=>{
    addLivro(inputTitulo.value, inputAutor.value, inputAno.value,)
    e.preventDefault()
    console.table(livros)
})