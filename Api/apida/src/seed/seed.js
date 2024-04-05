import mysql from 'mysql';
import { prisma } from "../configs/prismaClient.js";
import erp_compras_itens from './dados/erp_compras_itens.js';
import compras from './dados/erp_compras.js';
import erp_cotacao_itens from './dados/erp_cotacao_itens.js';
import cotacao from './dados/erp_cotacao.js';
import contas_pagar from './dados/erp_contas_pagar.js';
import contas_Pagar_itens from "./dados/erp_contas_pagar_itens.js";
import contas_receber from "./dados/erp_contas_receber.js";
import contas_receber_itens from "./dados/erp_contas_receber_itens.js";
import destinacao_recurso from './dados/erp_destinacao_recurso.js';
import formas_pagamento from './dados/erp_forma_pagamento.js';
import historicos from './dados/erp_lcto_historico.js';
import lcto_tesouraria from './dados/erp_lcto_tesouraria.js';
import lcto_tesouraria_itens from './dados/erp_lcto_tesouraria_itens.js';
import fornecedores from './dados/erp_pessoa_fornecedor.js';
import planos_contas from './dados/erp_plano_contas_recursive.js';
import produtos from './dados/erp_produtos.js';
import status_compra from './dados/erp_status_compra.js';
import tipos_produtos from './dados/erp_tipo_produto.js';
import unidades_medida from './dados/erp_unidade_medida.js';

// // desabilitar a verificação de chave estrangeira
await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 0;`;

// // sequencia de deleteMany em tese em qualquer ordem
await prisma.erp_lcto_tesouraria_itens.deleteMany();
await prisma.erp_lcto_tesouraria.deleteMany();

await prisma.erp_contas_receber_itens.deleteMany();
await prisma.erp_contas_receber.deleteMany();

await prisma.erp_contas_pagar.deleteMany();
await prisma.erp_contas_pagar_itens.deleteMany();

await prisma.erp_cotacao_itens.deleteMany();
await prisma.erp_cotacao.deleteMany();

await prisma.erp_compras_itens.deleteMany();
await prisma.erp_compras.deleteMany();

await prisma.erp_status_compra.deleteMany();
await prisma.erp_pessoa_fornecedor.deleteMany();
await prisma.erp_produtos.deleteMany();
await prisma.erp_tipo_produto.deleteMany();
await prisma.erp_unidade_medida.deleteMany();
await prisma.erp_destinacao_recurso.deleteMany();
await prisma.erp_plano_contas.deleteMany();
await prisma.erp_lcto_historico.deleteMany();
await prisma.erp_forma_pagamento.deleteMany();

/*
    * Definição da quantidade de registros a serem criados 
    * Só é necessário para os dados que não possuem um array de objetos 
    * As funções forem usar devem usar um multiplicador ou divisor para criar a quantidade desejada
    * O valor padrão é 1000
    * Lembrar que para caso de geração acima de milhares de registros, o tempo de execução pode ser muito alto portanto é recomendado usar insertmany dentro de um laço de inserção de 10000 registros por vez        
*/
var quantidade = 100;

async function createPlanosContas() {
    for (let plano of planos_contas) {
        await prisma.erp_plano_contas.create({
            data: {
                id: parseInt(plano.id),
                conta: (parseInt(plano.conta)).toString(),
                descricao: plano.descricao,
                active: "Y", // "Y" ou "N
                nivel_hierarquico: plano.nivel_hierarquico,
                data_inicio: new Date(plano.data_inicio),
                saldo_inicial: parseFloat(plano.saldo_inicial),
            }
        });
    }
    console.log(planos_contas.length + ' - Contas criadas no plano de contas!');
}

// função para criar historicos
async function createHistoricos() {
    for (let historico of historicos) {
        await prisma.erp_lcto_historico.create({
            data: {
                id: parseInt(historico.id),
                descricao: historico.descricao,
                active: historico.active
            }
        });
    }
    console.log(historicos.length + ' - Historicos criados(as) com sucesso!');
}

// função para criar formas de pagamento
async function createFormasPagamento() {
    for (let forma of formas_pagamento) {
        await prisma.erp_forma_pagamento.create({
            data: {
                id: parseInt(forma.id),
                name: forma.name,
                description: forma.description,
                active: forma.active
            }
        });
    }
    console.log(formas_pagamento.length + ' - Formas de pagamento criados(as) com sucesso!');
}

// função para criar destinacao de recurso
async function createDestinacaoRecurso() {
    for (let destinacao of destinacao_recurso) {
        await prisma.erp_destinacao_recurso.create({
            data: {
                id: parseInt(destinacao.id),
                name: destinacao.name,
                description: destinacao.description,
                active: destinacao.active
            }
        });
    }
    console.log(destinacao_recurso.length + ' - Destinacao de recurso criados(as) com sucesso!');
}

// função para criar unidades de medida
async function createUnidadesMedida() {
    for (let unidade of unidades_medida) {
        await prisma.erp_unidade_medida.create({
            data: {
                id: parseInt(unidade.id),
                name: unidade.name,
                description: unidade.description,
                active: unidade.active
            }
        });
    }
    console.log(unidades_medida.length + ' - Unidades de medida criados(as) com sucesso!');
}

// função para criar fornecedores
async function createFornecedores() {
    const fornecedoresGerados = fornecedores(quantidade * 0.3);
    await prisma.erp_pessoa_fornecedor.createMany({
        data: fornecedoresGerados
    });
    console.log(fornecedoresGerados.length + ' - Fornecedores criados(as) com sucesso!');

}

// função para criar status de compra
async function createStatusCompra() {
    for (let status of status_compra) {
        await prisma.erp_status_compra.create({
            data: {
                id: parseInt(status.id),
                name: status.name,
                description: status.description,
                active: status.active
            }
        });
    }
    console.log(status_compra.length + ' - Status de compra criados(as) com sucesso!');
}

// função para criar os tipos de produtos
async function createTiposProdutos() {
    for (let tipo of tipos_produtos) {
        await prisma.erp_tipo_produto.create({
            data: {
                id: parseInt(tipo.id),
                name: tipo.name,
                description: tipo.description,
                active: tipo.active
            }
        });
    }
    console.log(tipos_produtos.length + ' - Tipos de produtos criados(as) com sucesso!');
}

// função para criar produtos
async function createProdutos() {
    for (let produto of produtos) {
        await prisma.erp_produtos.create({
            data: {
                id: produto.id,
                nome: produto.nome,
                descricao: produto.descricao,
                erp_tipo_produto_id: parseInt(produto.erp_tipo_produto_id),
                erp_unidade_medida_id: parseInt(produto.erp_unidade_medida_id),
                valor_medio: parseFloat(produto.valor_medio),
                active: produto.active,
            }
        });
    }
    console.log(produtos.length + ' - Produtos criados(as) com sucesso!');
}

// função para criar contas a receber
async function createContasReceber() {
    for (let i = 0; i < (quantidade); i++) {
        const contas = await contas_receber(1);
        await prisma.erp_contas_receber.create({ data: contas[0] });
    }
    console.log(`${quantidade} - Contas a receber com sucesso!`);
}

// função para criar contas a receber itens
async function createContasReceberItens() {
    let qtdContasReceberItens = quantidade * (Math.floor(Math.random() * 10) + 1);
    for (let i = 0; i < (qtdContasReceberItens); i++) {
        const contasReceberItens = await contas_receber_itens(1);
        await prisma.erp_contas_receber_itens.create({ data: contasReceberItens[0] });
    }
    console.log(`${qtdContasReceberItens} - Itens criados(as) em Itens de contas a receber com sucesso!`);
}

// função para criar contas a pagar
async function createContasPagar() {
    for (let i = 0; i < (quantidade); i++) {
        const contas = await contas_pagar(1);
        await prisma.erp_contas_pagar.create({ data: contas[0] });
    }
    console.log(`${quantidade} - Contas a pagar com sucesso!`);
}

// função para criar contas a pagar itens
async function createContasPagarItens() {
    let qtdContasPagarItens = quantidade * 10;
    for (let i = 0; i < (qtdContasPagarItens); i++) {
        const contasPagarItens = await contas_Pagar_itens(1);
        await prisma.erp_contas_pagar_itens.create({ data: contasPagarItens[0] });
    }
    console.log(`${qtdContasPagarItens} - Itens criados(as) em Itens de contas a Pagar com sucesso!`);
}

// função para criar lcto tesouraria itens
async function createLctoTesourariaItens() {
    let qtdLctoTesourariaItens = quantidade * 3;
    for (let i = 0; i < (qtdLctoTesourariaItens); i++) {
        const tesouraria_itens = await lcto_tesouraria_itens(1);
        await prisma.erp_lcto_tesouraria_itens.create({ data: tesouraria_itens[0] });
    }
    console.log(`${qtdLctoTesourariaItens} - Itens de lançamentos da tesouraria criados com sucesso!`);
}

// função para criar lcto tesouraria
async function createLctoTesouraria() {
    for (let i = 0; i < (quantidade); i++) {
        const tesourarias = await lcto_tesouraria(1);
        await prisma.erp_lcto_tesouraria.create({ data: tesourarias[0] });
    }
    console.log(`${quantidade} - Lcto tesouraria com sucesso!`);
}


// função para criar cotacao
async function createCotacao() {
    for (let i = 0; i < (quantidade * 3); i++) {
        const cotacaoGeradas = await cotacao(1);
        await prisma.erp_cotacao.create({ data: cotacaoGeradas[0] });
    }


    console.log(`${quantidade} - Cotações criadas com sucesso!`);
}

// função para criar cotacao itens
async function createCotacaoItens() {
    let qtdCotacaoItens = quantidade * 10;
    for (let i = 0; i < (qtdCotacaoItens); i++) {
        const cotacao_itens = await erp_cotacao_itens(1);
        await prisma.erp_cotacao_itens.create({ data: cotacao_itens[0] });
    }
    console.log(`${qtdCotacaoItens} - Itens de contação criados com sucesso!`);
}

// função para criar compras
async function createCompras() {
    for (let i = 0; i < (quantidade); i++) {
        const comprasGeradas = await compras(1);
        await prisma.erp_compras.createMany({ data: comprasGeradas[0] });
    }
    console.log(`${quantidade} - Compras criadas com sucesso!`);
}

// função para criar compras itens
async function createComprasItens() {
    let qtdComprasItens = quantidade * 3;
    for (let i = 0; i < (qtdComprasItens); i++) {
        const compras_itens = await erp_compras_itens(1);
        await prisma.erp_compras_itens.create({ data: compras_itens[0] });
    }
    console.log(`${qtdComprasItens} - Itens de compras criados com sucesso!`);
}

/*
    Ordem para chamada das funções de criação:
    - erp_plano_contas
    - erp_lcto_historico
    - erp_forma_pagamento
    - erp_destinacao_recurso
    - erp_unidade_medida
    _ erp_pessoa_fornecedor
    - erp_status_compra
    - erp_tipo_produto
    - erp_produtos
    - erp_contas_receber
    - erp_contas_receber_itens
    - erp_contas_pagar
    - erp_contas_pagar_itens
    - erp_lcto_tesouraria
    - erp_lcto_tesouraria_itens
    - erp_cotacao
    - erp_cotacao_itens
    - erp_compras
    - erp_compras_itens
*/

// chamada das funções usando then
createPlanosContas()
    .then(createHistoricos)
    .then(createFornecedores)
    .then(createFormasPagamento)
    .then(createDestinacaoRecurso)
    .then(createUnidadesMedida)
    .then(createStatusCompra)
    .then(createTiposProdutos)
    .then(createProdutos)

    .then(createCotacao)
    .then(createCotacaoItens)

    // gerar 1/3 de quantidade de cotações 
    .then(createCompras)

    // todas os itens de compras serão os mesmos de itens cotações
    .then(createComprasItens) // adequar esta função para receber os itens de cotações

    // algumas compras gerarão contas a pagar, as que estiverem com status "1 - Aguardando pagamento"
    .then(createContasPagar)
    .then(createContasPagarItens)

    // futuramente criar contas a receber a partir do caixa
    .then(createContasReceber)
    .then(createContasReceberItens)

    .then(createLctoTesouraria)
    .then(createLctoTesourariaItens)
    .then(() => {
        console.log('Seed de dados finalizado com sucesso!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Erro ao criar os dados: ', error);
        process.exit(1);
    });
