import fakerBr from 'faker-br';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Buscar todos os id dos forncedores do banco de dados
const IdProduto = async () => {
	const IdProduto = await prisma.erp_produtos.findMany({ select: { id: true, }, });
	return IdProduto.map(lcto => lcto.id);
}

const Idcompras = async () => {
	const idcompras = await prisma.erp_compras.findMany({ select: { id: true, }, });
	return idcompras.map(compras => compras.id);
}


const erp_compras_itens = async (quantidade) => {
	const itens = [];
	
	for (let i = 0; i < (quantidade * 0.3); i++) {  // Você pode ajustar o número de dados que deseja gerar
		itens.push({
			valor: parseFloat((Math.random() * 1000).toFixed(2)),
			erp_produtos_id: parseInt(fakerBr.random.arrayElement(await IdProduto())),
			qtd: parseFloat((Math.random() * 10).toFixed(2)),
			erp_compras_id: parseInt(fakerBr.random.arrayElement(await Idcompras())),
		});
	}
	return itens;
}

// Exporte o objeto JSON
export default erp_compras_itens;