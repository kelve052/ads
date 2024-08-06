const inputTitulo = document.getElementById('titulo')
const inputAutor = document.getElementById('autor')
const inputAno = document.getElementById('ano')
const btn = document.getElementById('btn')
const tabela = document.getElementById('body-table')
const caixaMensagen = document.getElementById('caixa-mensagen')
const pMensagen = document.getElementById('p-mensagen')

// inputTitulo.value = 'Blibia'
// inputAutor.value = 'Deus'
// inputAno.value = '658'

let contador = -1

const getLivros = () => {
  livros = JSON.parse(localStorage.getItem('livros')) || []
}

const setLivros = () => {
  localStorage.setItem('livros', JSON.stringify(livros))
}



let livros = []
const deletarLivros = (index) => {
  const livroDeletar = document.getElementById(`${index}`)
  livroDeletar.style.transform = 'scale(0)'
  contador--
  setTimeout(() => {
    livros.splice(index, 1)
  renderizarLivros(true)
  setLivros()
  }, 700);
}
getLivros()
const addLivro = (titulo, autor, ano) => {
  const livro = {
    titulo: titulo,
    autor: autor,
    ano: ano
  }

  if (inputTitulo.value && inputAutor.value && inputAno.value) {
    livros.push(livro)
    setLivros()
    contador++
    const tdTitulo = document.createElement('td')
    const tdAutor = document.createElement('td')
    const tdAno = document.createElement('td')
    tdTitulo.innerText = titulo
    tdAutor.innerText = autor
    tdAno.innerText = ano
    const img = document.createElement('img')

    img.src = '/assets/imgs/trash.svg'
    img.className = 'icone-lixeira'
    img.id = contador
    img.addEventListener('click', () => {
      deletarLivros(`${img.id}`)
    })

    tdTitulo.className = 'dados-livro'
    tdAutor.className = 'dados-livro'
    tdAno.className = 'dados-livro'

    const linhaDeCadaLivro = document.createElement('tr')
    linhaDeCadaLivro.appendChild(tdTitulo)
    linhaDeCadaLivro.appendChild(tdAutor)
    linhaDeCadaLivro.appendChild(tdAno)
    tdAno.appendChild(img)

    linhaDeCadaLivro.className = `linha-de-cada-livro linha-de-cada-livro${img.id}`
    linhaDeCadaLivro.id = img.id

    tabela.appendChild(linhaDeCadaLivro)
    setTimeout(() => {
      linhaDeCadaLivro.style.transform = 'scale(1)'
    }, 100);

    caixaMensagen.style.top = '6px'
    pMensagen.innerText = 'Livro adicionado com sucesso!'
    caixaMensagen.style.top = '6px'
    caixaMensagen.style.backgroundColor = 'rgb(166, 237, 100)'
    setTimeout(() => {
      caixaMensagen.style.top = '-500px'
    }, 3000);
  } else {
    pMensagen.innerText = 'Falha ao adicionar!\nPreencha os campos nessesários!'
    caixaMensagen.style.top = '6px'
    caixaMensagen.style.backgroundColor = 'rgb(237, 100, 100)'
    setTimeout(() => {
      caixaMensagen.style.top = '-500px'
    }, 3000);
  }
}

btn.addEventListener('click', (e) => {
  addLivro(inputTitulo.value, inputAutor.value, inputAno.value)
  e.preventDefault()
  console.table(livros)
})

const renderizarLivros = (relold = false) => {
  contador = -1
  tabela.innerText = ''
  livros.map(a => {
    contador++
    const tdTitulo = document.createElement('td')
    const tdAutor = document.createElement('td')
    const tdAno = document.createElement('td')
    const img = document.createElement('img')

    img.src = '/assets/imgs/trash.svg'
    img.className = 'icone-lixeira'
    img.id = contador
    img.addEventListener('click', () => {
      deletarLivros(`${img.id}`)
    })
    tdTitulo.innerText = a.titulo
    tdAutor.innerText = a.autor
    tdAno.innerText = a.ano

    tdTitulo.className = 'dados-livro'
    tdAutor.className = 'dados-livro'
    tdAno.className = 'dados-livro'

    const linhaDeCadaLivro = document.createElement('tr')
    linhaDeCadaLivro.appendChild(tdTitulo)
    linhaDeCadaLivro.appendChild(tdAutor)
    linhaDeCadaLivro.appendChild(tdAno)
    tdAno.appendChild(img)

    linhaDeCadaLivro.className = `linha-de-cada-livro linha-de-cada-livro${img.id}`
    linhaDeCadaLivro.id = img.id
    if (!relold) {
      setTimeout(() => {
        linhaDeCadaLivro.style.transform = 'scale(1)'
      }, 100);
    } else {
      linhaDeCadaLivro.style.transform = 'scale(1)'
    }

    tabela.appendChild(linhaDeCadaLivro)
  })
}
renderizarLivros()