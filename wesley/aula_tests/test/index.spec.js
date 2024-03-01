import { soma, subritacao  } from "../index.js"

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