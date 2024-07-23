console.log('Funcionando...')

let nota = document.getElementById('nota')
let btn = document.getElementById('btn')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    
    if(nota.value >= 60){
        alert(`Estudante Aprovado`)
    }else{
        alert('Estudante Reprovado')
    }
})