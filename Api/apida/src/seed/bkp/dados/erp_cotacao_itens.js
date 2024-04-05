import fakerBr from 'faker-br';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Buscar todos os id dos forncedores do banco de dados
const IdProduto = async () => {
	const IdProduto = await prisma.erp_produtos.findMany({ select: { id: true, }, });
	return IdProduto.map(lcto => lcto.id);
}

const IdCotacao = async () => {
	const idCotacao = await prisma.erp_cotacao.findMany({ select: { id: true, }, });
	return idCotacao.map(cotacao => cotacao.id);
}


const erp_cotacao_itens = async (quantidade) => {
	const itens = [];
	
	for (let i = 0; i < quantidade; i++) {  // Você pode ajustar o número de dados que deseja gerar
		itens.push({
			valor: parseFloat((Math.random() * 1000).toFixed(2)),
			erp_produtos_id: parseInt(fakerBr.random.arrayElement(await IdProduto())),
			qtd: parseFloat((Math.random() * 10).toFixed(2)),
			erp_cotacao_id: parseInt(fakerBr.random.arrayElement(await IdCotacao())),
		});
	}
	return itens;
}

// Exporte o objeto JSON
export default erp_cotacao_itens;