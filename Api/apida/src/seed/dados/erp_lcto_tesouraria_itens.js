import fakerBr from 'faker-br';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Buscar todos os id dos forncedores do banco de dados
const IdLctotesourariaList = async () => {
	const idLctotesouraria = await prisma.erp_lcto_tesouraria.findMany({ select: { id: true, }, });
	return idLctotesouraria.map(lcto => lcto.id);
}


const lcto_tesouraria_itens = async (quantidade) => {
	const itens = [];
	
	for (let i = 0; i < quantidade; i++) {  // Você pode ajustar o número de dados que deseja gerar
		itens.push({
			erp_lcto_tesouraria_id: parseInt(fakerBr.random.arrayElement(await IdLctotesourariaList())),
			valor: parseFloat((Math.random() * 1000).toFixed(2)),
			system_unit_id: fakerBr.random.arrayElement([1, 2]),
		});
	}
	return itens;
}

// Exporte o objeto JSON
export default lcto_tesouraria_itens;