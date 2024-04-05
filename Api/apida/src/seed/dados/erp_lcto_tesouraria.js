import fakerBr from 'faker-br';
import moment from 'moment';
import erp_forma_pagamento from './erp_forma_pagamento.js';
import erp_lcto_historico from './erp_lcto_historico.js';
import contaDebito from './erp_plano_contas_recursive.js';
import contaCredito from './erp_plano_contas_recursive.js';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Mapeando os IDs das contas, formas de pagamento e históricos

const idFormaPagamento = erp_forma_pagamento.map((forma) => forma.id);
const idLctoHistorico = erp_lcto_historico.map((historico) => historico.id);
const idContasDebito = contaDebito.map((conta) => conta.id);
const idContasCredito = contaCredito.map((conta) => conta.id);

// Função para gerar uma data aleatória dentro de um intervalo
function randomDate(start, end) {
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const lcto_tesouraria = async (quantidade) => {
	// Gerando dados com os critérios especificados
	const dados = [];

	for (let i = 0; i < quantidade; i++) {  // Você pode ajustar o número de dados que deseja gerar
		const data_pgto = randomDate(moment().subtract(2, 'years').toDate(), moment().add(6, 'months').toDate());
		const valor = Math.random() * 1000;
		const datetime = moment().format('YYYY-MM-DD HH:mm:ss');
		const responsavel_id = 1;

		dados.push({
			// id: i + 1,
			data_pgto: data_pgto,
			erp_forma_pagamento_id: parseInt(fakerBr.random.arrayElement(idFormaPagamento)),
			erp_lcto_historico_id: parseInt(fakerBr.random.arrayElement(idLctoHistorico)),
			conta_debito: parseInt(fakerBr.random.arrayElement(idContasDebito)),
			conta_credito: parseInt(fakerBr.random.arrayElement(idContasCredito)),
			valor: valor,
			active: 'Y',
			responsavel_id: responsavel_id,
			erp_contas_pagar_id: null,
			erp_contas_receber_id: null
		});
	}

	return dados;
}
// Exporte o objeto JSON
export default lcto_tesouraria;