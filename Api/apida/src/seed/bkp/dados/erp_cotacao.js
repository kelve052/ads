import fakerBr from 'faker-br';
import moment from 'moment';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Buscar todos os id dos forncedores do banco de dados
const idFornecedor = async () => {
	try {
		const fornecedores = await prisma.erp_pessoa_fornecedor.findMany({ select: { id: true, }, });
		return fornecedores.map((fornecedor) => fornecedor.id);
	} finally {
		await prisma.$disconnect();
	}
}

// Mapeando o name das destinações de recurso
const NameDestinacaoRecurso = async () => {
	try {
		const destinacao = await prisma.erp_destinacao_recurso.findMany({ select: { name: true, }, });
		return destinacao.map((destinacao) => destinacao.name);
	}
	finally {
		await prisma.$disconnect();
	} 
}

// Função para gerar uma data aleatória dentro de um intervalo 
function randomDate(start, end) {
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


const cotacao = async (quantidade) => {
	// Gerando dados com os critérios especificados
	const dados = [];
	for (let i = 0; i < quantidade; i++) {  // Você pode ajustar o número de dados que deseja gerar
		dados.push({
			"finalidade": fakerBr.random.arrayElement(await NameDestinacaoRecurso()),
			"erp_pessoa_fornecedor_id": parseInt(fakerBr.random.arrayElement(await idFornecedor())),
			"vencimento_proposta": randomDate(moment().subtract(3, 'years').toDate(), moment().add(6, 'months').toDate()),
			"valor_total": Math.random() * 500,
			"active": "Y",
		});
	}
	return dados;
}

	
// Exporte o objeto JSON
export default cotacao;