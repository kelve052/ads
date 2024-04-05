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

const IdUser = async () => {
	try {
		const user = await prisma.system_users.findMany({ select: { id: true, }, });
		return user.map((user) => user.id);
	} finally {
		await prisma.$disconnect();
	}
}

// Mapeando o name das destinações de recurso
const iDDestinacaoRecurso = async () => {
	try {
		const destinacao = await prisma.erp_destinacao_recurso.findMany({ select: { id: true, }, });
		return destinacao.map((destinacao) => destinacao.id);
	}
	finally {
		await prisma.$disconnect();
	} 
}

const IdForma_pagamento = async () => {
	try {
		const forma_pagamento = await prisma.erp_forma_pagamento.findMany({ select: { id: true, }, });
		return forma_pagamento.map((forma_pagamento) => forma_pagamento.id);
	}
	finally {
		await prisma.$disconnect();
	} 
}

const IdCotacao = async () => {
	try {
		const cotacao = await prisma.erp_cotacao.findMany({ select: { id: true, }, });
		return cotacao.map((cotacao) => cotacao.id);
	}
	finally {
		await prisma.$disconnect();
	} 
}

const IdStatusCompra = async () => {
	try {
		const status_compra = await prisma.erp_status_compra.findMany({ select: { id: true, }, });
		return status_compra.map((status_compra) => status_compra.id);
	}
	finally {
		await prisma.$disconnect();
	} 
}



// Função para gerar uma data aleatória dentro de um intervalo 
function randomDate(start, end) {
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


const compras = async (quantidade) => {
	// Gerando dados com os critérios especificados
	const dados = [];

	for (let i = 0; i < quantidade; i++) {  // Você pode ajustar o número de dados que deseja gerar
		dados.push({
			"numero_requisicao": "REQ" + fakerBr.random.alphaNumeric(5),
			"membro_comprador_system_users_id":  parseInt(fakerBr.random.arrayElement(await IdUser())),
			"erp_forma_pagamento_id": parseInt(fakerBr.random.arrayElement(await IdForma_pagamento())),
			"erp_destinacao_recurso_id": parseInt(fakerBr.random.arrayElement(await iDDestinacaoRecurso())),
			"erp_cotacao_id": parseInt(fakerBr.random.arrayElement(await IdCotacao())),
			"valor_total":  Math.random() * 500,
			"data_compra": randomDate(moment().subtract(2, 'months').toDate(), moment().add(6, 'months').toDate()),
			"erp_status_compra_id": parseInt(fakerBr.random.arrayElement(await IdStatusCompra())),
			"active": "Y"
		});

	}
	return dados;
}

// Exporte o objeto JSON
export default compras;