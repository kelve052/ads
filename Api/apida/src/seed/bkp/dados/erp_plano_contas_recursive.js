
// função para auto incrementar o id
let id = 1;
function autoIncrementId() {
    return id++;
}

const dados =
	[
		{
			"id": autoIncrementId(),
			"conta": 1000,
			"descricao": "Ativo",
			"tipo_conta": "Ativo",
			
			"nivel_hierarquico": 1,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1100,
			"descricao": "Ativo Circulante",
			"tipo_conta": "Ativo",
		
			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1110,
			"descricao": "Caixa e Equivalentes de Caixa",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1120,
			"descricao": "Contas a Receber",
			"tipo_conta": "Ativo",
			


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1121,
			"descricao": "Clientes",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1122,
			"descricao": "Duplicatas a Receber",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1130,
			"descricao": "Estoque de Imóveis para Venda",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1140,
			"descricao": "Despesas Antecipadas",
			"tipo_conta": "Ativo",
			


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1141,
			"descricao": "Seguros Antecipados",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1142,
			"descricao": "Despesas Pagas Antecipadamente",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1200,
			"descricao": "Ativo Não Circulante",
			"tipo_conta": "Ativo",
			


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1210,
			"descricao": "Imobilizado",
			"tipo_conta": "Ativo",
			


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1211,
			"descricao": "Terrenos",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1212,
			"descricao": "Edificações",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1213,
			"descricao": "Máquinas e Equipamentos",
			"tipo_conta": "Ativo",
			


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 12131,
			"descricao": "Veículos",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 5,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 12132,
			"descricao": "Ferramentas",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 5,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1220,
			"descricao": "Investimentos",
			"tipo_conta": "Ativo",
			


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1221,
			"descricao": "Participações Societárias",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1222,
			"descricao": "Investimentos Financeiros",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1230,
			"descricao": "Intangível",
			"tipo_conta": "Ativo",
			


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1231,
			"descricao": "Marcas e Patentes",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1232,
			"descricao": "Softwares",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1233,
			"descricao": "Goodwill",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1300,
			"descricao": "Ativo Diferido",
			"tipo_conta": "Ativo",
			


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1310,
			"descricao": "Despesas de Organização",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 1320,
			"descricao": "Despesas Pré-Operacionais",
			"tipo_conta": "Ativo",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2000,
			"descricao": "Passivo",
			"tipo_conta": "Passivo",
			


			"nivel_hierarquico": 1,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2100,
			"descricao": "Passivo Circulante",
			"tipo_conta": "Passivo",
			


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2110,
			"descricao": "Fornecedores",
			"tipo_conta": "Passivo",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2120,
			"descricao": "Empréstimos e Financiamentos de Curto Prazo",
			"tipo_conta": "Passivo",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2130,
			"descricao": "Contas a Pagar",
			"tipo_conta": "Passivo",
			


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2131,
			"descricao": "Contas a Pagar Diversas",
			"tipo_conta": "Passivo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2132,
			"descricao": "Faturas Pendentes",
			"tipo_conta": "Passivo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2200,
			"descricao": "Passivo Não Circulante",
			"tipo_conta": "Passivo",
			


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2210,
			"descricao": "Empréstimos e Financiamentos de Longo Prazo",
			"tipo_conta": "Passivo",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2220,
			"descricao": "Provisões",
			"tipo_conta": "Passivo",
			


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2221,
			"descricao": "Provisão para Férias e 13º Salário",
			"tipo_conta": "Passivo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2222,
			"descricao": "Provisão para Contingências",
			"tipo_conta": "Passivo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2300,
			"descricao": "Patrimônio Líquido",
			"tipo_conta": "Passivo",
			


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2310,
			"descricao": "Capital Social",
			"tipo_conta": "Passivo",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2320,
			"descricao": "Reservas de Lucros",
			"tipo_conta": "Passivo",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2330,
			"descricao": "Lucros ou Prejuízos Acumulados",
			"tipo_conta": "Passivo",
			


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2331,
			"descricao": "Ações em Tesouraria",
			"tipo_conta": "Passivo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 2332,
			"descricao": "Dividendos a Pagar",
			"tipo_conta": "Passivo",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0.

		},
		{
			"id": autoIncrementId(),
			"conta": 3000,
			"descricao": "Receitas",
			"tipo_conta": "Receitas",
			


			"nivel_hierarquico": 1,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 3100,
			"descricao": "Receitas de Vendas de Imóveis",
			"tipo_conta": "Receitas",
			"subconta": false,


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 3200,
			"descricao": "Comissões sobre Vendas",
			"tipo_conta": "Receitas",
			"subconta": false,


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 3300,
			"descricao": "Taxas de Administração de Imóveis Alugados",
			"tipo_conta": "Receitas",
			"subconta": false,


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 3400,
			"descricao": "Receitas Financeiras",
			"tipo_conta": "Receitas",
			


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 3410,
			"descricao": "Juros sobre Investimentos",
			"tipo_conta": "Receitas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 3420,
			"descricao": "Rendimentos de Aplicações Financeiras",
			"tipo_conta": "Receitas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 3500,
			"descricao": "Outras Receitas Operacionais",
			"tipo_conta": "Receitas",
			


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 3510,
			"descricao": "Ganhos na Venda de Ativos Fixos",
			"tipo_conta": "Receitas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 3520,
			"descricao": "Subsídios Governamentais",
			"tipo_conta": "Receitas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4000,
			"descricao": "Despesas",
			"tipo_conta": "Despesas",
			


			"nivel_hierarquico": 1,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4100,
			"descricao": "Despesas Administrativas",
			"tipo_conta": "Despesas",
			


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4110,
			"descricao": "Salários e Encargos",
			"tipo_conta": "Despesas",
			


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4111,
			"descricao": "Salários Administrativos",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4112,
			"descricao": "Encargos Sociais",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 4,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4120,
			"descricao": "Aluguel e Condomínio",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4130,
			"descricao": "Despesas com Água, Luz e Telefone",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4140,
			"descricao": "Material de Escritório",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4150,
			"descricao": "Despesas Bancárias",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4200,
			"descricao": "Despesas com Vendas",
			"tipo_conta": "Despesas",
			


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4210,
			"descricao": "Comissões de Corretores",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4220,
			"descricao": "Publicidade e Propaganda",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4230,
			"descricao": "Despesas com Viagens e Representação Comercial",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4300,
			"descricao": "Despesas Financeiras",
			"tipo_conta": "Despesas",
			


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4310,
			"descricao": "Juros sobre Empréstimos e Financiamentos",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4320,
			"descricao": "Tarifas Bancárias",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4400,
			"descricao": "Despesas com Depreciação",
			"tipo_conta": "Despesas",
			


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4410,
			"descricao": "Depreciação de Veículos",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4420,
			"descricao": "Depreciação de Máquinas e Equipamentos",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4500,
			"descricao": "Outras Despesas Operacionais",
			"tipo_conta": "Despesas",
			


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4510,
			"descricao": "Perdas na Venda de Ativos Fixos",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4520,
			"descricao": "Despesas com Seguros",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4530,
			"descricao": "Despesas com Manutenção",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4540,
			"descricao": "Despesas com Viagens e Representação",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 4550,
			"descricao": "Despesas com Treinamento e Capacitação",
			"tipo_conta": "Despesas",
			"subconta": false,


			"nivel_hierarquico": 3,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 5000,
			"descricao": "Resultados",
			"tipo_conta": "Resultados",
			


			"nivel_hierarquico": 1,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 5100,
			"descricao": "Lucro Bruto",
			"tipo_conta": "Resultados",
			"subconta": false,


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 5200,
			"descricao": "Lucro Operacional",
			"tipo_conta": "Resultados",
			"subconta": false,


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 5300,
			"descricao": "Resultado Financeiro",
			"tipo_conta": "Resultados",
			"subconta": false,


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 5400,
			"descricao": "Lucro antes do Imposto de Renda",
			"tipo_conta": "Resultados",
			"subconta": false,


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 5500,
			"descricao": "Imposto de Renda e Contribuição Social",
			"tipo_conta": "Resultados",
			"subconta": false,


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 5600,
			"descricao": "Lucro Líquido",
			"tipo_conta": "Resultados",
			"subconta": false,


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 6000,
			"descricao": "OUTRAS CONTAS",
			"tipo_conta": "OUTRAS CONTAS",
			"subconta": false,


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 6100,
			"descricao": "Correção Monetária",
			"tipo_conta": "OUTRAS CONTAS",
			"subconta": false,


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 6200,
			"descricao": "Provisões para Contingências",
			"tipo_conta": "OUTRAS CONTAS",
			"subconta": false,


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 6300,
			"descricao": "Ajustes de Exercícios Anteriores",
			"tipo_conta": "OUTRAS CONTAS",
			"subconta": false,


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 6400,
			"descricao": "Reservas de Reavaliação",
			"tipo_conta": "OUTRAS CONTAS",
			"subconta": false,


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,
		},
		{
			"id": autoIncrementId(),
			"conta": 6500,
			"descricao": "Reservas de Capital",
			"tipo_conta": "OUTRAS CONTAS",
			"subconta": false,


			"nivel_hierarquico": 2,
			"data_inicio": "2024-01-01",
			"saldo_inicial": 0,

		}
	];

// Exporte o objeto JSON
export default dados;