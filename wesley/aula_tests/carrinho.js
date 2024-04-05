class Item {
    nome = ""
    valor = 0
    quantidade = 0



    constructor(nome, valor, quantidade) {
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
    }

    pegaValorTotalItem() {
        return this.quantidade * this.valor
    }
}

class Carrinho {
    constructor() {
        this.itens = [];
        this.subtotal = null;
        this.frete = null;
        this.total = null;
    }

    adiciona(item) {
        this.itens.push(item);
    }

    adicionaFrete(valor) {
        this.frete = valor;
    }

    calculaTotal() {
        this.subtotal = this.itens.reduce((acum, item) => acum + item.pegavalorTotalItem(), 0);
        return this.subtotal + this.frete;
    }

    finalizaCompra() {
        if (this.itens.length === 0) {
            throw new Error('Carrinho de compras vazio');
        }
        this.total = this.calculaTotal();
        return {
            subtotal: this.subtotal,
            frete: this.frete,
            total: this.total,
        };
    }
}


export {Item, Carrinho};