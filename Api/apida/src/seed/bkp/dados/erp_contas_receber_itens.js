import fakerBr from 'faker-br';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Buscar todos os id dos forncedores do banco de dados
const IdContasReceber = async () => {
		const contas = await prisma.erp_contas_receber.findMany({ select: { id: true, }, });
		return contas.map(conta => conta.id);
}

const servicosPrestaveis = [
	"Mediação na compra e venda de imóveis.",
	"Avaliação de propriedades.",
	"Consultoria imobiliária para clientes.",
	"Gestão de arrendamento e locação.",
	"Marketing e divulgação de imóveis.",
	"Negociação de contratos de compra, venda e locação.",
	"Gestão documental e legalização de imóveis.",
	"Análise de viabilidade para investimentos imobiliários.",
	"Assistência na obtenção de financiamento imobiliário.",
	"Organização e realização de visitas aos imóveis.",
	"Acompanhamento em inspeções e vistorias.",
	"Assessoria jurídica em transações imobiliárias.",
	"Preparação de contratos e documentos legais.",
	"Administração de condomínios.",
	"Gestão de propriedades para aluguel por temporada.",
	"Serviços de manutenção e reparos.",
	"Avaliação de riscos e segurança imobiliária.",
	"Consultoria em projetos de construção e reforma.",
	"Serviços de avaliação técnica de imóveis.",
	"Assessoria em questões fiscais e tributárias relacionadas a propriedades.",
	"Consultoria em investimentos imobiliários.",
	"Pesquisa de mercado e análise de tendências.",
	"Gestão de propriedades de investidores ausentes.",
	"Consultoria em estratégias de valorização de imóveis.",
	"Serviços de home staging para otimização da apresentação dos imóveis.",
	"Assessoria em questões ambientais e de sustentabilidade relacionadas a imóveis.",
	"Serviços de seguro imobiliário.",
	"Organização de eventos e feiras imobiliárias.",
	"Consultoria em financiamento e refinanciamento imobiliário.",
	"Assessoria em questões de zoneamento e regulação urbana.",
	"Consultoria em gestão patrimonial.",
	"Serviços de concierge para clientes de alto padrão.",
	"Assessoria em transações internacionais de imóveis.",
	"Avaliação de propriedades para fins de herança e partilha.",
	"Consultoria em estratégias de investimento imobiliário em mercados estrangeiros.",
	"Gerenciamento de propriedades comerciais e corporativas.",
	"Serviços de consultoria em planejamento urbano.",
	"Mediação em casos de disputas de propriedade.",
	"Assessoria em questões de acessibilidade e adaptação de imóveis.",
	"Consultoria em questões de conformidade regulatória e legislativa."
];

const contasReceberItens = async (quantidade) => {
	// Gerando dados com os critérios especificados
	const dados = [];
	for (let i = 0; i < quantidade; i++) {
		const descricao = fakerBr.random.arrayElement(servicosPrestaveis);
		const erp_contas_receber_id = parseInt(fakerBr.random.arrayElement(await IdContasReceber()));
		const valor = Math.random() * 100;
		// Adicionando os dados ao array
		dados.push({ descricao, valor, erp_contas_receber_id });
	}
	return dados;
}

export default contasReceberItens;