import fakerBr from 'faker-br';
import moment from 'moment';
import erp_destinacao_recurso from './erp_destinacao_recurso.js';
import erp_forma_pagamento from './erp_forma_pagamento.js';
import erp_lcto_historico from './erp_lcto_historico.js';
import contaDebito from './erp_plano_contas_recursive.js';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Mapeando os IDs das contas, formas de pagamento e históricos
const idContas = contaDebito.map((conta) => conta.id);
const idFormaPagamento = erp_forma_pagamento.map((forma) => forma.id);
const idLctoHistorico = erp_lcto_historico.map((historico) => historico.id);
const idDestinacaoRecurso = erp_destinacao_recurso.map((destinacao) => destinacao.id);

// Buscar todos os id dos forncedores do banco de dados
const idFornecedor = async () => {
	try {
		const fornecedores = await prisma.erp_pessoa_fornecedor.findMany({ select: { id: true, }, });
		return fornecedores.map((fornecedor) => fornecedor.id);
	} finally {
		await prisma.$disconnect();
	}
}


// função assincrona para auto incrementar id e retornar o próximo id inteiro
const autoIncrementId = async () => {
	let idConta = 0;
	return () => {
		idConta += 1;
		return idConta;
	}
};



// Função para gerar uma data aleatória dentro de um intervalo
function randomDate(start, end) {
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Função para gerar as contas a receber com base nos critérios especificados
const contasPagar = async (quantidade) => {
	// Definindo os status
	const status = ['Pendente', 'Pago', 'Atrasado', 'Cancelado', 'Suspenso'];

	// Gerando dados com os critérios especificados
	const dados = [];

	for (let i = 0; i < quantidade; i++) {  // Você pode ajustar o número de dados que deseja gerar
		const data_emissao = randomDate(moment().subtract(2, 'years').toDate(), moment().add(6, 'months').toDate());
		const data_vencimento = moment(data_emissao).add(Math.floor(Math.random() * 16) + 15, 'days').toDate();

		// criar uma função para gear algumas data_pgto deverão ser nulas ou receber uma data após a data de emisão de no máximo 10 dias após a data de vencimento

		let data_pgto = Math.random() < 0.1 ? null : randomDate(moment(data_vencimento).add(1, 'days').toDate(), moment(data_vencimento).add(10, 'days').toDate());

		let status_pagamento = '';

		if (moment(data_vencimento).isBefore(moment())) {
			if (Math.random() < 0.1) {
				status_pagamento = 'Cancelado';
			} else {
				//checar se a data de pagamento é nula
				if (data_pgto === null) {
					status_pagamento = 'Atrasado';
				} else {
					status_pagamento = 'Pago';
				}
			}
		} else {

			status_pagamento = 'Pendente';
		}

		if (status_pagamento === 'Pendente' && Math.random() < 0.1) {
			status_pagamento = 'Suspenso';
		}

		if (status_pagamento === 'Pago') {
			data_pgto = randomDate(moment(data_vencimento).subtract(5, 'days').toDate(), moment(data_vencimento).add(10, 'days').toDate());
		}

		dados.push({
			'data_emissao': data_emissao,
			'data_vencimento': data_vencimento,
			'data_pgto': data_pgto,
			'valor': Math.random() * 1000,
			'status_pagamento': status_pagamento,
			'chave_nfe': await fakerBr.random.uuid(),
			'responsavel_id': 1,
			'erp_lcto_historico_id': parseInt(await fakerBr.random.arrayElement(idLctoHistorico)),
			'erp_destinacao_recurso_id': parseInt(await fakerBr.random.arrayElement(idDestinacaoRecurso)),
			'erp_forma_pagamento_id': parseInt(await fakerBr.random.arrayElement(idFormaPagamento)),
			'erp_pessoa_fornecedor_id': parseInt(await fakerBr.random.arrayElement(await idFornecedor())),
			'conta_debito': parseInt(await fakerBr.random.arrayElement(idContas)),
			'observacao': await fakerBr.lorem.sentence(),
			'active': 'Y',
			'transferido_tesouraria': status_pagamento === 'Pago' ? Math.random() < 0.1 ? 'Y' : 'N' : 'N',
		});
	}

	return dados;
	// Exibindo os dados gerados

};

export default contasPagar;
