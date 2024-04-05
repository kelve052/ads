import fakerBr from 'faker-br';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Buscar todos os id dos forncedores do banco de dados
const IdContaspagar = async () => {
	const contas = await prisma.erp_contas_pagar.findMany({ select: { id: true, }, });
	return contas.map(conta => conta.id);
}

const custos = [
	"Aluguel de Escritório",
	"Salários e Benefícios dos Funcionários",
	"Conta de Energia Elétrica e Água",
	"Internet e Telefone",
	"Manutenção Predial",
	"Despesas de Marketing",
	"Taxas de Associação e Licenças",
	"Impostos e Taxas Governamentais",
	"Seguro",
	"Comissões de Corretores",
	"Manutenção de Software",
	"Serviços Jurídicos",
	"Despesas de Viagem e Transporte",
	"Manutenção de Jardim e Paisagismo",
	"Despesas de Manutenção de Propriedades",
	"Taxas de Condomínio",
	"Inspeções de Propriedades",
	"Serviços de Limpeza",
	"Despesas de Renovação",
	"Despesas Legais de Locação",
	"Taxas de Avaliação de Propriedade",
	"Despesas de Armazenamento",
	"Treinamento de Funcionários",
	"Despesas de Viagem para Inspeções e Visitas",
	"Segurança e Monitoramento",
	"Serviços de Contabilidade e Auditoria",
	"Despesas de Estoque de Materiais de Escritório",
	"Despesas de TI",
	"Comissões de Parceiros e Afiliados",
	"Despesas de Publicidade Online",
	"Despesas de Conferências e Eventos",
	"Taxas de Serviços Bancários",
	"Despesas de Depreciação de Ativos",
	"Despesas de Certificação e Treinamento de Agentes",
	"Despesas de Gestão de Propriedade",
	"Seguro de Responsabilidade Profissional",
	"Despesas de Consultoria",
	"Despesas de Desenvolvimento de Software",
	"Honorários de Contabilidade Gerencial",
	"Despesas de Melhoria da Qualidade do Serviço",
	"Despesas de Armazenamento de Documentos Físicos",
	"Despesas de Certificação Energética",
	"Despesas de Software de Gerenciamento de Propriedades",
	"Despesas de Pesquisa de Mercado",
	"Despesas de Digitalização de Documentos",
	"Despesas de Certificação de Qualidade",
	"Despesas de Fornecedores de Serviços",
	"Taxas de Conformidade com Regulamentos",
	"Despesas de Manutenção de Site e Aplicativo",
	"Despesas de Tradução e Localização",
	"Despesas de Rastreamento de Leads",
	"Despesas de Sustentabilidade",
	"Despesas de Auditoria de Qualidade de Serviço",
	"Despesas de Renovação de Licenças e Certificações",
	"Despesas de Arbitragem e Mediação",
	"Despesas de Substituição de Equipamentos",
	"Despesas de Desenvolvimento de Parcerias",
	"Despesas de Programas de Fidelidade para Clientes",
	"Despesas de Segurança Cibernética"
]


const contaspagarItens = async (quantidade) => {
	// Gerando dados com os critérios especificados
	const dados = [];
	for (let i = 0; i < quantidade; i++) {
		const descricao = fakerBr.random.arrayElement(custos);
		const erp_contas_pagar_id = parseInt(fakerBr.random.arrayElement(await IdContaspagar()));
		const valor = Math.random() * 100;
		// Adicionando os dados ao array
		dados.push({ descricao, valor, erp_contas_pagar_id });
	}
	return dados;
}

export default contaspagarItens;