const soma = (a, b) => {
    return a + b

}

const subritacao = (a, b) => { return a - b }

const divisao = (a, b) => {
    try {
        if (typeof(a) !== 'number' || typeof(b) !== 'number') {
            throw new Error("Os parametros passados devem ser um numemro!")
        }
        return a / b
    } catch (error) {
        throw error
    }
}

const media = (a, b, c) =>{
    return (a + b + c) / 3
}

console.log(divisao(5, 2))
export { soma, subritacao, divisao, media }