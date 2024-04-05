/*
ATIVO
1.1. Ativo Circulante
1.1.1. Caixa e Equivalentes de Caixa
1.1.2. Contas a Receber
1.1.2.1. Clientes
1.1.2.2. Duplicatas a Receber
1.1.3. Estoque de Imóveis para Venda
1.1.4. Despesas Antecipadas
1.1.4.1. Seguros Antecipados
1.1.4.2. Despesas Pagas Antecipadamente
1.2. Ativo Não Circulante
1.2.1. Imobilizado
1.2.1.1. Terrenos
1.2.1.2. Edificações
1.2.1.3. Máquinas e Equipamentos
1.2.1.3.1. Veículos
1.2.1.3.2. Ferramentas
1.2.2. Investimentos
1.2.2.1. Participações Societárias
1.2.2.2. Investimentos Financeiros
1.2.3. Intangível
1.2.3.1. Marcas e Patentes
1.2.3.2. Softwares
1.2.3.3. Goodwill
1.3. Ativo Diferido
1.3.1. Despesas de Organização
1.3.2. Despesas Pré-Operacionais

PASSIVO
2.1. Passivo Circulante
2.1.1. Fornecedores
2.1.2. Empréstimos e Financiamentos de Curto Prazo
2.1.3. Contas a Pagar
2.1.3.1. Contas a Pagar Diversas
2.1.3.2. Faturas Pendentes
2.2. Passivo Não Circulante
2.2.1. Empréstimos e Financiamentos de Longo Prazo
2.2.2. Provisões
2.2.2.1. Provisão para Férias e 13º Salário
2.2.2.2. Provisão para Contingências
2.3. Patrimônio Líquido
2.3.1. Capital Social
2.3.2. Reservas de Lucros
2.3.3. Lucros ou Prejuízos Acumulados
2.3.3.1. Ações em Tesouraria
2.3.3.2. Dividendos a Pagar

RECEITAS
3.1. Receitas de Vendas de Imóveis
3.2. Comissões sobre Vendas
3.3. Taxas de Administração de Imóveis Alugados
3.4. Receitas Financeiras
3.4.1. Juros sobre Investimentos
3.4.2. Rendimentos de Aplicações Financeiras
3.5. Outras Receitas Operacionais
3.5.1. Ganhos na Venda de Ativos Fixos
3.5.2. Subsídios Governamentais

DESPESAS
4.1. Despesas Administrativas
4.1.1. Salários e Encargos
4.1.1.1. Salários Administrativos
4.1.1.2. Encargos Sociais
4.1.2. Aluguel e Condomínio
4.1.3. Despesas com Água, Luz e Telefone
4.1.4. Material de Escritório
4.1.5. Despesas Bancárias
4.2. Despesas com Vendas
4.2.1. Comissões de Corretores
4.2.2. Publicidade e Propaganda
4.2.3. Despesas com Viagens e Representação Comercial
4.3. Despesas Financeiras
4.3.1. Juros sobre Empréstimos e Financiamentos
4.3.2. Tarifas Bancárias
4.4. Despesas com Depreciação
4.4.1. Depreciação de Veículos
4.4.2. Depreciação de Máquinas e Equipamentos
4.5. Outras Despesas Operacionais
4.5.1. Perdas na Venda de Ativos Fixos
4.5.2. Multas e Penalidades

RESULTADO
5.1. Lucro Bruto
5.2. Lucro Operacional
5.3. Resultado Financeiro
5.4. Lucro Antes do Imposto de Renda
5.5. Imposto de Renda e Contribuição Social
5.6. Lucro Líquido

OUTRAS CONTAS
6.1. Correção Monetária
6.2. Provisões para Contingências
6.3. Ajustes de Exercícios Anteriores
6.4. Reservas de Reavaliação
6.5. Reservas de Capital

*/

/*
{
  "plano_de_contas": [
    {
      "conta": 1000,
      "descricao": "Ativo",
      "tipo_conta": "Ativo",
      "subconta": true,
      "NaturezaConta": "",
      "CentroCustoDepartamento": "",
      "nivel_hierarquico": 1,
      "data_inicio": "2024-01-01",
      "saldo_inicial": 0,
      "ReferenciasLegais": ""
    },
  ]
}
*/

// seguindo a estrutura acima, vamos criar um plano de contas para uma empresa de imóveis com as contas acima

const plano_de_contas = [
    {
        "conta": 1000,
        "descricao": "Ativo",
        "tipo_conta": "Ativo",
        "subconta": true,
        "nivel_hierarquico": 1,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1100,
        "descricao": "Ativo Circulante",
        "tipo_conta": "Ativo",
        "subconta": true,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1110,
        "descricao": "Caixa e Equivalentes de Caixa",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1120,
        "descricao": "Contas a Receber",
        "tipo_conta": "Ativo",
        "subconta": true,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1121,
        "descricao": "Clientes",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1122,
        "descricao": "Duplicatas a Receber",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1130,
        "descricao": "Estoque de Imóveis para Venda",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1140,
        "descricao": "Despesas Antecipadas",
        "tipo_conta": "Ativo",
        "subconta": true,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1141,
        "descricao": "Seguros Antecipados",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1142,
        "descricao": "Despesas Pagas Antecipadamente",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1200,
        "descricao": "Ativo Não Circulante",
        "tipo_conta": "Ativo",
        "subconta": true,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1210,
        "descricao": "Imobilizado",
        "tipo_conta": "Ativo",
        "subconta": true,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1211,
        "descricao": "Terrenos",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1212,
        "descricao": "Edificações",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1213,
        "descricao": "Máquinas e Equipamentos",
        "tipo_conta": "Ativo",
        "subconta": true,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 12131,
        "descricao": "Veículos",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 5,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 12132,
        "descricao": "Ferramentas",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 5,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1220,
        "descricao": "Investimentos",
        "tipo_conta": "Ativo",
        "subconta": true,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1221,
        "descricao": "Participações Societárias",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1222,
        "descricao": "Investimentos Financeiros",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1230,
        "descricao": "Intangível",
        "tipo_conta": "Ativo",
        "subconta": true,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1231,
        "descricao": "Marcas e Patentes",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1232,
        "descricao": "Softwares",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1233,
        "descricao": "Goodwill",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1300,
        "descricao": "Ativo Diferido",
        "tipo_conta": "Ativo",
        "subconta": true,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1310,
        "descricao": "Despesas de Organização",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 1320,
        "descricao": "Despesas Pré-Operacionais",
        "tipo_conta": "Ativo",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2000,
        "descricao": "Passivo",
        "tipo_conta": "Passivo",
        "subconta": true,


        "nivel_hierarquico": 1,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2100,
        "descricao": "Passivo Circulante",
        "tipo_conta": "Passivo",
        "subconta": true,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2110,
        "descricao": "Fornecedores",
        "tipo_conta": "Passivo",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2120,
        "descricao": "Empréstimos e Financiamentos de Curto Prazo",
        "tipo_conta": "Passivo",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2130,
        "descricao": "Contas a Pagar",
        "tipo_conta": "Passivo",
        "subconta": true,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2131,
        "descricao": "Contas a Pagar Diversas",
        "tipo_conta": "Passivo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2132,
        "descricao": "Faturas Pendentes",
        "tipo_conta": "Passivo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2200,
        "descricao": "Passivo Não Circulante",
        "tipo_conta": "Passivo",
        "subconta": true,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2210,
        "descricao": "Empréstimos e Financiamentos de Longo Prazo",
        "tipo_conta": "Passivo",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2220,
        "descricao": "Provisões",
        "tipo_conta": "Passivo",
        "subconta": true,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2221,
        "descricao": "Provisão para Férias e 13º Salário",
        "tipo_conta": "Passivo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2222,
        "descricao": "Provisão para Contingências",
        "tipo_conta": "Passivo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2300,
        "descricao": "Patrimônio Líquido",
        "tipo_conta": "Passivo",
        "subconta": true,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2310,
        "descricao": "Capital Social",
        "tipo_conta": "Passivo",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2320,
        "descricao": "Reservas de Lucros",
        "tipo_conta": "Passivo",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2330,
        "descricao": "Lucros ou Prejuízos Acumulados",
        "tipo_conta": "Passivo",
        "subconta": true,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2331,
        "descricao": "Ações em Tesouraria",
        "tipo_conta": "Passivo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 2332,
        "descricao": "Dividendos a Pagar",
        "tipo_conta": "Passivo",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0.

    },
    {
        "conta": 3000,
        "descricao": "Receitas",
        "tipo_conta": "Receitas",
        "subconta": true,


        "nivel_hierarquico": 1,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 3100,
        "descricao": "Receitas de Vendas de Imóveis",
        "tipo_conta": "Receitas",
        "subconta": false,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 3200,
        "descricao": "Comissões sobre Vendas",
        "tipo_conta": "Receitas",
        "subconta": false,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 3300,
        "descricao": "Taxas de Administração de Imóveis Alugados",
        "tipo_conta": "Receitas",
        "subconta": false,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 3400,
        "descricao": "Receitas Financeiras",
        "tipo_conta": "Receitas",
        "subconta": true,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 3410,
        "descricao": "Juros sobre Investimentos",
        "tipo_conta": "Receitas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 3420,
        "descricao": "Rendimentos de Aplicações Financeiras",
        "tipo_conta": "Receitas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 3500,
        "descricao": "Outras Receitas Operacionais",
        "tipo_conta": "Receitas",
        "subconta": true,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 3510,
        "descricao": "Ganhos na Venda de Ativos Fixos",
        "tipo_conta": "Receitas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 3520,
        "descricao": "Subsídios Governamentais",
        "tipo_conta": "Receitas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4000,
        "descricao": "Despesas",
        "tipo_conta": "Despesas",
        "subconta": true,


        "nivel_hierarquico": 1,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4100,
        "descricao": "Despesas Administrativas",
        "tipo_conta": "Despesas",
        "subconta": true,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4110,
        "descricao": "Salários e Encargos",
        "tipo_conta": "Despesas",
        "subconta": true,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4111,
        "descricao": "Salários Administrativos",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4112,
        "descricao": "Encargos Sociais",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 4,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4120,
        "descricao": "Aluguel e Condomínio",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4130,
        "descricao": "Despesas com Água, Luz e Telefone",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4140,
        "descricao": "Material de Escritório",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4150,
        "descricao": "Despesas Bancárias",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4200,
        "descricao": "Despesas com Vendas",
        "tipo_conta": "Despesas",
        "subconta": true,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4210,
        "descricao": "Comissões de Corretores",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4220,
        "descricao": "Publicidade e Propaganda",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4230,
        "descricao": "Despesas com Viagens e Representação Comercial",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4300,
        "descricao": "Despesas Financeiras",
        "tipo_conta": "Despesas",
        "subconta": true,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4310,
        "descricao": "Juros sobre Empréstimos e Financiamentos",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4320,
        "descricao": "Tarifas Bancárias",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4400,
        "descricao": "Despesas com Depreciação",
        "tipo_conta": "Despesas",
        "subconta": true,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4410,
        "descricao": "Depreciação de Veículos",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4420,
        "descricao": "Depreciação de Máquinas e Equipamentos",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4500,
        "descricao": "Outras Despesas Operacionais",
        "tipo_conta": "Despesas",
        "subconta": true,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4510,
        "descricao": "Perdas na Venda de Ativos Fixos",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4520,
        "descricao": "Despesas com Seguros",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4530,
        "descricao": "Despesas com Manutenção",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4540,
        "descricao": "Despesas com Viagens e Representação",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 4550,
        "descricao": "Despesas com Treinamento e Capacitação",
        "tipo_conta": "Despesas",
        "subconta": false,


        "nivel_hierarquico": 3,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 5000,
        "descricao": "Resultados",
        "tipo_conta": "Resultados",
        "subconta": true,


        "nivel_hierarquico": 1,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 5100,
        "descricao": "Lucro Bruto",
        "tipo_conta": "Resultados",
        "subconta": false,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 5200,
        "descricao": "Lucro Operacional",
        "tipo_conta": "Resultados",
        "subconta": false,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 5300,
        "descricao": "Resultado Financeiro",
        "tipo_conta": "Resultados",
        "subconta": false,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 5400,
        "descricao": "Lucro antes do Imposto de Renda",
        "tipo_conta": "Resultados",
        "subconta": false,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 5500,
        "descricao": "Imposto de Renda e Contribuição Social",
        "tipo_conta": "Resultados",
        "subconta": false,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 5600,
        "descricao": "Lucro Líquido",
        "tipo_conta": "Resultados",
        "subconta": false,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 6000,
        "descricao": "OUTRAS CONTAS",
        "tipo_conta": "OUTRAS CONTAS",
        "subconta": false,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 6100,
        "descricao": "Correção Monetária",
        "tipo_conta": "OUTRAS CONTAS",
        "subconta": false,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 6200,
        "descricao": "Provisões para Contingências",
        "tipo_conta": "OUTRAS CONTAS",
        "subconta": false,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 6300,
        "descricao": "Ajustes de Exercícios Anteriores",
        "tipo_conta": "OUTRAS CONTAS",
        "subconta": false,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 6400,
        "descricao": "Reservas de Reavaliação",
        "tipo_conta": "OUTRAS CONTAS",
        "subconta": false,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,
    },
    {
        "conta": 6500,
        "descricao": "Reservas de Capital",
        "tipo_conta": "OUTRAS CONTAS",
        "subconta": false,


        "nivel_hierarquico": 2,
        "data_inicio": "2024-01-01",
        "saldo_inicial": 0,

    }
]
return contas;