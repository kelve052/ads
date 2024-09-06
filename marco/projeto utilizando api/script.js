const descricaoAtividade = document.getElementById('descricao-atividade')
const sala = document.getElementById('sala')
const dataInicial = document.getElementById('data-inicial')
const dataFinal = document.getElementById('data-final')
const btnReservar = document.getElementById('botao-reservar')
const sectionTable = document.getElementById('section-table')

descricaoAtividade.value = 'Mudar o horario do relogio'
sala.value = 'lb-informatica 1'
dataInicial.value = '2024-08-02T23:36'
dataFinal.value = '2024-08-02T23:36'



const url = 'http://localhost:3000';

let reservas = [];

const listarReservas = async () => {
  await fetch(`${url}/reservas`)
    .then(response => response.json()) // Convertendo a resposta em JSON
    .then(data => {
      reservas = data; // Reatribuir o array reservas com os dados recebidos
    })
    .catch(error => {
      console.error('Erro ao buscar as reservas:', error);
    });
}

const post = (reserva) => {
  fetch(`${url}/reservas`, {
    method: 'POST', // Corrigido para 'POST'
    headers: {
      'Content-Type': 'application/json', // Define o tipo de conteúdo
    },
    body: JSON.stringify(reserva), // Envia o objeto reserva como JSON
  })
  .then(response => response.json())
  .then(data => {
    console.log('Reserva adicionada com sucesso:', data);
  })
  .catch(error => {
    console.error('Erro ao adicionar a reserva:', error);
  });
}


const renderizar = () => {
  sectionTable.innerHTML =
      `
      <table id="tabela">
      <thead>
        <th class="titulo-tabela">Id</th>
        <th class="titulo-tabela">Atividade</th>
        <th class="titulo-tabela">Sala</th>
        <th class="titulo-tabela">Data Inicial</th>
        <th class="titulo-tabela">Data Final</th>
      </thead>
       <tbody>
       ${reservas.map(item => {
          return `<tr class="linha">
          <td class="td">${item.id}</td>
          <td class="td">${item.atividade}</td>
          <td class="td">${item.sala}</td>
          <td class="td">${item.dataInicial}</td>
          <td class="td">${item.dataFinal}</td>
        </tr>`
          
      }).join('')
      }
      </tbody>
    </table>
  `
}


const addReserva = (atividade, sala, dataInicial, dataFinal) => {
  const reserva = {
      atividade: atividade,
      sala: sala,
      dataInicial: dataFormatada(new Date(dataInicial)),
      dataFinal: dataFormatada(new Date(dataFinal))
  }
  post(reserva)
}

const dataFormatada = (data)=>{
  return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
}


btnReservar.addEventListener('click', (e)  => {
  e.preventDefault()
  addReserva(
      descricaoAtividade.value,
      sala.value,
      dataInicial.value,
      dataFinal.value

  )
  run()
})




const run = async (e)=>{
  await listarReservas()
  renderizar()
}
run()