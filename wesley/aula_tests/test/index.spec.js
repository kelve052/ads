import { soma, subritacao, divisao } from "../index.js"

describe('teste de valores positivos', ()=>{
    test('teste da função soma', ()=>{
        const result = soma(10, 5)
    
        expect(result).toBe(15)
    })
    
    test('teste da função subitração', ()=>{
        const result = subritacao(10, 5)
    
        expect(result).toBe(5)
    })

})

describe('teste de error', ()=>{
    test('teste da função de divisao', ()=>{

        expect(() => divisao('palvra', 5)).toThrowError("Os parametros passados devem ser um numemro!");
    })

    test('test função divisao', ()=>{
        const result = divisao(10, 5)

        expect(result).toBe(2)
    })
})