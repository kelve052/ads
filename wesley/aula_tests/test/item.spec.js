import { expect, describe, test } from '@jest/globals';
import { Item, Carrinho } from '../carrinho';
describe('Testes dos itens', () => {
    test("deve ter 3 campos nome: nome, valoe e quantidade", () => {
        const item = new Item("Beterraba", 2.5, 10);
        expect(item.nome).toBe("Beterraba");
        expect(item.valor).toEqual(2.5);
        expect(item.quantidade).toBe(10);
    });
    test("deve ter o preço calculado de acordo com a quantidade", () => {
        const item = new Item("Batata", 1, 10);
        expect(item.pegaValorTotalItem()).toBeCloseTo(10);
    });

    test('Deve adicionar o frete ', () => {
        const newIten = new Item('macarone', 10, 2)
        const newCarrinho = new Carrinho(newIten)
        newCarrinho.adicionaFrete(newIten.valor)

        console.log("-------------------------", newCarrinho.frete)

        expect(newCarrinho.frete).toBe(10)
    });
})