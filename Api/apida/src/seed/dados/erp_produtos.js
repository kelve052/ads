const dados =
	[
		{
			"nome": "Smartphone de Última Geração",
			"descricao": "Telefone inteligente com tecnologia avançada.",
			"erp_tipo_produto_id": 15,
			"erp_unidade_medida_id": 16,
			"valor_medio": 2500.00
		},
		{
			"nome": "Geladeira Frost Free",
			"descricao": "Geladeira com tecnologia frost free para maior praticidade.",
			"erp_tipo_produto_id": 2,
			"erp_unidade_medida_id": 16,
			"valor_medio": 3500.00
		},
		{
			"nome": "Camiseta Casual",
			"descricao": "Camiseta confortável para uso diário.",
			"erp_tipo_produto_id": 3,
			"erp_unidade_medida_id": 16,
			"valor_medio": 30.00
		},
		{
			"nome": "Creme Hidratante Facial",
			"descricao": "Creme para hidratação da pele do rosto.",
			"erp_tipo_produto_id": 4,
			"erp_unidade_medida_id": 16,
			"valor_medio": 25.00
		},
		{
			"nome": "Arroz Integral",
			"descricao": "Arroz integral de alta qualidade.",
			"erp_tipo_produto_id": 5,
			"erp_unidade_medida_id": 3,
			"valor_medio": 10.00
		},
		{
			"nome": "Pneu Aro 17",
			"descricao": "Pneu esportivo para carros de passeio.",
			"erp_tipo_produto_id": 6,
			"erp_unidade_medida_id": 16,
			"valor_medio": 400.00
		},
		{
			"nome": "Bola de Futebol Profissional",
			"descricao": "Bola de futebol oficial para jogos profissionais.",
			"erp_tipo_produto_id": 7,
			"erp_unidade_medida_id": 16,
			"valor_medio": 80.00
		},
		{
			"nome": "Sofá de Couro Legítimo",
			"descricao": "Sofá de couro legítimo para sala de estar.",
			"erp_tipo_produto_id": 8,
			"erp_unidade_medida_id": 16,
			"valor_medio": 2000.00
		},
		{
			"nome": "Suplemento de Vitamina C",
			"descricao": "Suplemento vitamínico para fortalecimento do sistema imunológico.",
			"erp_tipo_produto_id": 9,
			"erp_unidade_medida_id": 16,
			"valor_medio": 40.00
		},
		{
			"nome": "Livro Best-seller",
			"descricao": "Livro mais vendido do momento.",
			"erp_tipo_produto_id": 10,
			"erp_unidade_medida_id": 16,
			"valor_medio": 45.00
		},
		{
			"nome": "Quebra-Cabeça de 1000 Peças",
			"descricao": "Quebra-cabeça desafiador para entretenimento.",
			"erp_tipo_produto_id": 11,
			"erp_unidade_medida_id": 5,
			"valor_medio": 50.00
		},
		{
			"nome": "Furadeira Elétrica",
			"descricao": "Furadeira potente para trabalhos domésticos.",
			"erp_tipo_produto_id": 12,
			"erp_unidade_medida_id": 16,
			"valor_medio": 150.00
		},
		{
			"nome": "Bloco de Notas Pautado",
			"descricao": "Bloco de notas para anotações.",
			"erp_tipo_produto_id": 13,
			"erp_unidade_medida_id": 16,
			"valor_medio": 5.00
		},
		{
			"nome": "Vaso de Plantas Decorativo",
			"descricao": "Vaso decorativo para plantas.",
			"erp_tipo_produto_id": 14,
			"erp_unidade_medida_id": 16,
			"valor_medio": 35.00
		},
		{
			"nome": "Monitor Gamer LED 24 polegadas",
			"descricao": "Monitor de alta definição para jogos.",
			"erp_tipo_produto_id": 15,
			"erp_unidade_medida_id": 16,
			"valor_medio": 600.00
		},
		{
			"nome": "Detergente Multiuso",
			"descricao": "Detergente para limpeza de superfícies diversas.",
			"erp_tipo_produto_id": 16,
			"erp_unidade_medida_id": 16,
			"valor_medio": 7.00
		},
		{
			"nome": "Cadeira de Escritório Ergonômica",
			"descricao": "Cadeira confortável para uso prolongado.",
			"erp_tipo_produto_id": 17,
			"erp_unidade_medida_id": 16,
			"valor_medio": 300.00
		},
		{
			"nome": "Violão Acústico",
			"descricao": "Violão clássico para iniciantes.",
			"erp_tipo_produto_id": 18,
			"erp_unidade_medida_id": 16,
			"valor_medio": 400.00
		},
		{
			"nome": "Relógio de Pulso Analógico",
			"descricao": "Relógio clássico para uso diário.",
			"erp_tipo_produto_id": 19,
			"erp_unidade_medida_id": 16,
			"valor_medio": 150.00
		},
		{
			"nome": "Ração para Cães Adultos",
			"descricao": "Ração balanceada para cães adultos.",
			"erp_tipo_produto_id": 20,
			"erp_unidade_medida_id": 12,
			"valor_medio": 50.00
		},
		{
			"nome": "Mala de Viagem Grande",
			"descricao": "Mala espaçosa para viagens longas.",
			"erp_tipo_produto_id": 21,
			"erp_unidade_medida_id": 16,
			"valor_medio": 200.00
		},
		{
			"nome": "Kit de Pintura em Tela",
			"descricao": "Kit completo para pintura artística em tela.",
			"erp_tipo_produto_id": 22,
			"erp_unidade_medida_id": 6,
			"valor_medio": 80.00
		},
		{
			"nome": "Câmera Fotográfica DSLR",
			"descricao": "Câmera profissional para fotografias de alta qualidade.",
			"erp_tipo_produto_id": 23,
			"erp_unidade_medida_id": 16,
			"valor_medio": 1200.00
		},
		{
			"nome": "Lâmpada LED Econômica",
			"descricao": "Lâmpada de baixo consumo de energia para iluminação eficiente.",
			"erp_tipo_produto_id": 29,
			"erp_unidade_medida_id": 16,
			"valor_medio": 15.00
		},
		{
			"nome": "Cadeado Anti-Roubo",
			"descricao": "Cadeado resistente para proteção contra roubo.",
			"erp_tipo_produto_id": 30,
			"erp_unidade_medida_id": 16,
			"valor_medio": 20.00
		},
		{
			"nome": "Tablet Multifuncional",
			"descricao": "Tablet com diversas funcionalidades para uso cotidiano.",
			"erp_tipo_produto_id": 15,
			"erp_unidade_medida_id": 16,
			"valor_medio": 800.00
		},
		{
			"nome": "Liquidificador Potente",
			"descricao": "Liquidificador com motor de alta potência para preparo de alimentos.",
			"erp_tipo_produto_id": 2,
			"erp_unidade_medida_id": 16,
			"valor_medio": 150.00
		},
		{
			"nome": "Calça Jeans Casual",
			"descricao": "Calça jeans versátil para uso diário.",
			"erp_tipo_produto_id": 3,
			"erp_unidade_medida_id": 16,
			"valor_medio": 60.00
		},
		{
			"nome": "Shampoo Antiqueda",
			"descricao": "Shampoo para prevenção da queda de cabelo.",
			"erp_tipo_produto_id": 4,
			"erp_unidade_medida_id": 16,
			"valor_medio": 20.00
		},
		{
			"nome": "Chocolate Amargo 70%",
			"descricao": "Chocolate amargo com alto teor de cacau.",
			"erp_tipo_produto_id": 5,
			"erp_unidade_medida_id": 3,
			"valor_medio": 12.00
		},
		{
			"nome": "Kit Ferramentas Automotivas",
			"descricao": "Kit completo de ferramentas para manutenção de veículos.",
			"erp_tipo_produto_id": 6,
			"erp_unidade_medida_id": 6,
			"valor_medio": 200.00
		},
		{
			"nome": "Bicicleta Mountain Bike",
			"descricao": "Bicicleta esportiva para trilhas e aventuras ao ar livre.",
			"erp_tipo_produto_id": 7,
			"erp_unidade_medida_id": 16,
			"valor_medio": 800.00
		},
		{
			"nome": "Tapete Persa",
			"descricao": "Tapete artesanal persa para decoração de ambientes.",
			"erp_tipo_produto_id": 8,
			"erp_unidade_medida_id": 16,
			"valor_medio": 1000.00
		},
		{
			"nome": "Massageador Elétrico",
			"descricao": "Massageador portátil para alívio do estresse e relaxamento muscular.",
			"erp_tipo_produto_id": 9,
			"erp_unidade_medida_id": 16,
			"valor_medio": 50.00
		},
		{
			"nome": "Coleção de DVDs Clássicos",
			"descricao": "Coleção de filmes clássicos em DVD.",
			"erp_tipo_produto_id": 10,
			"erp_unidade_medida_id": 11,
			"valor_medio": 100.00
		},
		{
			"nome": "Quebra-Cabeça 3D",
			"descricao": "Quebra-cabeça tridimensional para desafiar a mente.",
			"erp_tipo_produto_id": 11,
			"erp_unidade_medida_id": 5,
			"valor_medio": 70.00
		},
		{
			"nome": "Chave de Fenda Profissional",
			"descricao": "Chave de fenda de alta qualidade para trabalhos de precisão.",
			"erp_tipo_produto_id": 12,
			"erp_unidade_medida_id": 16,
			"valor_medio": 20.00
		},
		{
			"nome": "Caderno de Anotações Ecológico",
			"descricao": "Caderno feito com material reciclado para anotações.",
			"erp_tipo_produto_id": 13,
			"erp_unidade_medida_id": 16,
			"valor_medio": 15.00
		},
		{
			"nome": "Pá para Jardim",
			"descricao": "Pá resistente para trabalhos de jardinagem.",
			"erp_tipo_produto_id": 14,
			"erp_unidade_medida_id": 16,
			"valor_medio": 25.00
		},
		{
			"nome": "Teclado Mecânico Gamer",
			"descricao": "Teclado mecânico de alta performance para jogos.",
			"erp_tipo_produto_id": 15,
			"erp_unidade_medida_id": 16,
			"valor_medio": 200.00
		},
		{
			"nome": "Desinfetante de Superfícies",
			"descricao": "Desinfetante para limpeza e desinfecção de superfícies.",
			"erp_tipo_produto_id": 16,
			"erp_unidade_medida_id": 16,
			"valor_medio": 8.00
		},
		{
			"nome": "Calculadora Científica",
			"descricao": "Calculadora avançada para cálculos científicos.",
			"erp_tipo_produto_id": 17,
			"erp_unidade_medida_id": 16,
			"valor_medio": 30.00
		},
		{
			"nome": "Violino Profissional",
			"descricao": "Violino de alta qualidade para músicos profissionais.",
			"erp_tipo_produto_id": 18,
			"erp_unidade_medida_id": 16,
			"valor_medio": 1000.00
		},
		{
			"nome": "Relógio de Parede Decorativo",
			"descricao": "Relógio de parede decorativo para ambientes internos.",
			"erp_tipo_produto_id": 19,
			"erp_unidade_medida_id": 16,
			"valor_medio": 50.00
		},
		{
			"nome": "Areia Sanitária para Gatos",
			"descricao": "Areia absorvente para bandejas sanitárias de gatos.",
			"erp_tipo_produto_id": 20,
			"erp_unidade_medida_id": 14,
			"valor_medio": 20.00
		},
		{
			"nome": "Mala de Viagem Pequena",
			"descricao": "Mala compacta para viagens curtas.",
			"erp_tipo_produto_id": 21,
			"erp_unidade_medida_id": 16,
			"valor_medio": 80.00
		},
		{
			"nome": "Tinta Acrílica para Artesanato",
			"descricao": "Tinta de alta qualidade para trabalhos artesanais.",
			"erp_tipo_produto_id": 22,
			"erp_unidade_medida_id": 7,
			"valor_medio": 10.00
		},
		{
			"nome": "Tripé para Câmera Fotográfica",
			"descricao": "Tripé resistente e ajustável para estabilizar câmeras fotográficas.",
			"erp_tipo_produto_id": 23,
			"erp_unidade_medida_id": 16,
			"valor_medio": 50.00
		},
		{
			"nome": "Luminária de Teto Moderna",
			"descricao": "Luminária de teto com design moderno para iluminação decorativa.",
			"erp_tipo_produto_id": 29,
			"erp_unidade_medida_id": 16,
			"valor_medio": 120.00
		},
		{
			"nome": "Cadeado Eletrônico com Sensor Biométrico",
			"descricao": "Cadeado eletrônico com tecnologia de sensor biométrico para máxima segurança.",
			"erp_tipo_produto_id": 30,
			"erp_unidade_medida_id": 16,
			"valor_medio": 80.00
		},
		{
			"nome": "Smartwatch Fitness",
			"descricao": "Smartwatch com monitor de atividades físicas e saúde.",
			"erp_tipo_produto_id": 1,
			"erp_unidade_medida_id": 16,
			"valor_medio": 300.00
		},
		{
			"nome": "Forno Elétrico Embutido",
			"descricao": "Forno elétrico embutido para cozinha moderna.",
			"erp_tipo_produto_id": 2,
			"erp_unidade_medida_id": 16,
			"valor_medio": 700.00
		},
		{
			"nome": "Blusa de Frio Estilosa",
			"descricao": "Blusa de frio elegante para dias mais frescos.",
			"erp_tipo_produto_id": 3,
			"erp_unidade_medida_id": 16,
			"valor_medio": 80.00
		},
		{
			"nome": "Perfume Masculino Intenso",
			"descricao": "Perfume masculino com fragrância intensa.",
			"erp_tipo_produto_id": 4,
			"erp_unidade_medida_id": 16,
			"valor_medio": 90.00
		},
		{
			"nome": "Café Especial em Grãos",
			"descricao": "Café gourmet em grãos de alta qualidade.",
			"erp_tipo_produto_id": 5,
			"erp_unidade_medida_id": 3,
			"valor_medio": 25.00
		},
		{
			"nome": "Kit de Limpeza Automotiva",
			"descricao": "Kit completo para limpeza e manutenção de veículos.",
			"erp_tipo_produto_id": 6,
			"erp_unidade_medida_id": 11,
			"valor_medio": 50.00
		},
		{
			"nome": "Bola de Basquete Oficial",
			"descricao": "Bola oficial de basquete para jogos profissionais.",
			"erp_tipo_produto_id": 7,
			"erp_unidade_medida_id": 16,
			"valor_medio": 40.00
		},
		{
			"nome": "Quadro Decorativo Abstrato",
			"descricao": "Quadro decorativo com arte abstrata para ambientes modernos.",
			"erp_tipo_produto_id": 8,
			"erp_unidade_medida_id": 16,
			"valor_medio": 120.00
		},
		{
			"nome": "Massageador de Pés Shiatsu",
			"descricao": "Massageador de pés com tecnologia shiatsu para relaxamento profundo.",
			"erp_tipo_produto_id": 9,
			"erp_unidade_medida_id": 16,
			"valor_medio": 100.00
		},
		{
			"nome": "Coleção de CDs Clássicos",
			"descricao": "Coleção de CDs com músicas clássicas de diversos gêneros.",
			"erp_tipo_produto_id": 10,
			"erp_unidade_medida_id": 11,
			"valor_medio": 60.00
		},
		{
			"nome": "Quebra-Cabeça de Madeira",
			"descricao": "Quebra-cabeça de madeira artesanal para entretenimento.",
			"erp_tipo_produto_id": 11,
			"erp_unidade_medida_id": 5,
			"valor_medio": 25.00
		},
		{
			"nome": "Serra Elétrica Portátil",
			"descricao": "Serra elétrica compacta para pequenos trabalhos de corte.",
			"erp_tipo_produto_id": 12,
			"erp_unidade_medida_id": 16,
			"valor_medio": 70.00
		},
		{
			"nome": "Bloco de Notas Criativo",
			"descricao": "Bloco de notas com design criativo para inspiração.",
			"erp_tipo_produto_id": 13,
			"erp_unidade_medida_id": 16,
			"valor_medio": 10.00
		},
		{
			"nome": "Vaso de Plantas Suspenso",
			"descricao": "Vaso suspenso para plantas decorativas.",
			"erp_tipo_produto_id": 14,
			"erp_unidade_medida_id": 16,
			"valor_medio": 40.00
		},
		{
			"nome": "Caixa de Som Bluetooth Portátil",
			"descricao": "Caixa de som portátil com conexão Bluetooth para reprodução de música.",
			"erp_tipo_produto_id": 15,
			"erp_unidade_medida_id": 16,
			"valor_medio": 120.00
		},
		{
			"nome": "Sabão Líquido Antibacteriano",
			"descricao": "Sabão líquido com ação antibacteriana para limpeza eficaz.",
			"erp_tipo_produto_id": 16,
			"erp_unidade_medida_id": 16,
			"valor_medio": 12.00
		},
		{
			"nome": "Calculadora Financeira",
			"descricao": "Calculadora especializada em cálculos financeiros.",
			"erp_tipo_produto_id": 17,
			"erp_unidade_medida_id": 16,
			"valor_medio": 50.00
		},
		{
			"nome": "Teclado Digital para Piano",
			"descricao": "Teclado digital com sons de piano realistas.",
			"erp_tipo_produto_id": 18,
			"erp_unidade_medida_id": 16,
			"valor_medio": 300.00
		},
		{
			"nome": "Relógio de Pulso Esportivo",
			"descricao": "Relógio de pulso com design esportivo e funções específicas para atividades físicas.",
			"erp_tipo_produto_id": 19,
			"erp_unidade_medida_id": 16,
			"valor_medio": 70.00
		},
		{
			"nome": "Comedouro Automático para Cães",
			"descricao": "Comedouro automático programável para cães.",
			"erp_tipo_produto_id": 20,
			"erp_unidade_medida_id": 16,
			"valor_medio": 60.00
		},
		{
			"nome": "Mala de Viagem Média",
			"descricao": "Mala de tamanho médio para viagens de curta duração.",
			"erp_tipo_produto_id": 21,
			"erp_unidade_medida_id": 16,
			"valor_medio": 100.00
		},
		{
			"nome": "Tintas para Pintura em Tecido",
			"descricao": "Tintas especiais para pintura artística em tecido.",
			"erp_tipo_produto_id": 22,
			"erp_unidade_medida_id": 6,
			"valor_medio": 20.00
		},
		{
			"nome": "Lente Telefoto para Câmera",
			"descricao": "Lente telefoto de alta qualidade para ampliação de imagens em câmeras fotográficas.",
			"erp_tipo_produto_id": 23,
			"erp_unidade_medida_id": 16,
			"valor_medio": 300.00
		},
		{
			"nome": "Luminária LED para Escritório",
			"descricao": "Luminária LED de mesa para iluminação de escritórios.",
			"erp_tipo_produto_id": 29,
			"erp_unidade_medida_id": 16,
			"valor_medio": 40.00
		},
		{
			"nome": "Kit de Segurança Residencial",
			"descricao": "Kit completo de segurança para residências.",
			"erp_tipo_produto_id": 30,
			"erp_unidade_medida_id": 6,
			"valor_medio": 200.00
		},
		{
			"nome": "Câmera de Segurança Wi-Fi",
			"descricao": "Câmera de segurança com conexão Wi-Fi para monitoramento remoto.",
			"erp_tipo_produto_id": 1,
			"erp_unidade_medida_id": 16,
			"valor_medio": 150.00
		},
		{
			"nome": "Geladeira Frost Free",
			"descricao": "Geladeira com tecnologia Frost Free para evitar acúmulo de gelo.",
			"erp_tipo_produto_id": 2,
			"erp_unidade_medida_id": 16,
			"valor_medio": 2000.00
		},
		{
			"nome": "Vestido de Festa Elegante",
			"descricao": "Vestido de festa elegante para ocasiões especiais.",
			"erp_tipo_produto_id": 3,
			"erp_unidade_medida_id": 16,
			"valor_medio": 150.00
		},
		{
			"nome": "Creme Anti-Idade",
			"descricao": "Creme facial anti-idade para redução de rugas e linhas de expressão.",
			"erp_tipo_produto_id": 4,
			"erp_unidade_medida_id": 16,
			"valor_medio": 30.00
		},
		{
			"nome": "Café Solúvel Premium",
			"descricao": "Café solúvel premium de alta qualidade e sabor.",
			"erp_tipo_produto_id": 5,
			"erp_unidade_medida_id": 3,
			"valor_medio": 18.00
		},
		{
			"nome": "Kit Ferramentas Profissional",
			"descricao": "Kit completo de ferramentas profissionais para uso variado.",
			"erp_tipo_produto_id": 6,
			"erp_unidade_medida_id": 6,
			"valor_medio": 300.00
		},
		{
			"nome": "Bola de Futebol Profissional",
			"descricao": "Bola de futebol oficial para partidas profissionais.",
			"erp_tipo_produto_id": 7,
			"erp_unidade_medida_id": 16,
			"valor_medio": 60.00
		},
		{
			"nome": "Vaso Decorativo de Cerâmica",
			"descricao": "Vaso decorativo de cerâmica para plantas ornamentais.",
			"erp_tipo_produto_id": 8,
			"erp_unidade_medida_id": 16,
			"valor_medio": 50.00
		},
		{
			"nome": "Máscara Facial de Colágeno",
			"descricao": "Máscara facial de colágeno para hidratação e rejuvenescimento da pele.",
			"erp_tipo_produto_id": 9,
			"erp_unidade_medida_id": 16,
			"valor_medio": 5.00
		},
		{
			"nome": "Livro Best-seller Internacional",
			"descricao": "Livro de sucesso internacional em edição especial.",
			"erp_tipo_produto_id": 10,
			"erp_unidade_medida_id": 16,
			"valor_medio": 40.00
		},
		{
			"nome": "Quebra-Cabeça 1000 Peças",
			"descricao": "Quebra-cabeça desafiador com 1000 peças.",
			"erp_tipo_produto_id": 11,
			"erp_unidade_medida_id": 5,
			"valor_medio": 35.00
		},
		{
			"nome": "Furadeira de Impacto Profissional",
			"descricao": "Furadeira de impacto de alta potência para uso profissional.",
			"erp_tipo_produto_id": 12,
			"erp_unidade_medida_id": 16,
			"valor_medio": 120.00
		},
		{
			"nome": "Caneta Esferográfica Premium",
			"descricao": "Caneta esferográfica de qualidade premium para escrita suave.",
			"erp_tipo_produto_id": 13,
			"erp_unidade_medida_id": 16,
			"valor_medio": 15.00
		},
		{
			"nome": "Plantas Ornamentais para Jardim",
			"descricao": "Plantas ornamentais para decoração de jardins e ambientes externos.",
			"erp_tipo_produto_id": 14,
			"erp_unidade_medida_id": 16,
			"valor_medio": 30.00
		},
		{
			"nome": "Fone de Ouvido Bluetooth",
			"descricao": "Fone de ouvido sem fio com tecnologia Bluetooth.",
			"erp_tipo_produto_id": 15,
			"erp_unidade_medida_id": 16,
			"valor_medio": 80.00
		},
		{
			"nome": "Sabonete Líquido Neutro",
			"descricao": "Sabonete líquido neutro para uso diário.",
			"erp_tipo_produto_id": 16,
			"erp_unidade_medida_id": 16,
			"valor_medio": 10.00
		},
		{
			"nome": "Calculadora Científica Avançada",
			"descricao": "Calculadora científica com funções avançadas para cálculos complexos.",
			"erp_tipo_produto_id": 17,
			"erp_unidade_medida_id": 16,
			"valor_medio": 40.00
		},
		{
			"nome": "Guitarra Elétrica Profissional",
			"descricao": "Guitarra elétrica profissional de alta qualidade sonora.",
			"erp_tipo_produto_id": 18,
			"erp_unidade_medida_id": 16,
			"valor_medio": 800.00
		},
		{
			"nome": "Relógio de Pulso Elegante",
			"descricao": "Relógio de pulso elegante para ocasiões formais.",
			"erp_tipo_produto_id": 19,
			"erp_unidade_medida_id": 16,
			"valor_medio": 150.00
		},
		{
			"nome": "Ração Premium para Gatos",
			"descricao": "Ração premium para gatos de todas as idades.",
			"erp_tipo_produto_id": 20,
			"erp_unidade_medida_id": 2,
			"valor_medio": 50.00
		},
		{
			"nome": "Mala de Viagem Grande",
			"descricao": "Mala de viagem grande com rodinhas e alça retrátil.",
			"erp_tipo_produto_id": 21,
			"erp_unidade_medida_id": 16,
			"valor_medio": 150.00
		},
		{
			"nome": "Pincéis Artísticos de Alta Qualidade",
			"descricao": "Pincéis artísticos de alta qualidade para pintura em tela.",
			"erp_tipo_produto_id": 22,
			"erp_unidade_medida_id": 16,
			"valor_medio": 30.00
		},
		{
			"nome": "Câmera Instantânea Polaroid",
			"descricao": "Câmera instantânea estilo Polaroid para fotos instantâneas.",
			"erp_tipo_produto_id": 23,
			"erp_unidade_medida_id": 16,
			"valor_medio": 150.00
		},
		{
			"nome": "Abajur de Mesa Clássico",
			"descricao": "Abajur de mesa clássico para iluminação suave em ambientes.",
			"erp_tipo_produto_id": 29,
			"erp_unidade_medida_id": 16,
			"valor_medio": 50.00
		},
		{
			"nome": "Cadeado Eletrônico com Controle Remoto",
			"descricao": "Cadeado eletrônico com controle remoto para fácil acesso.",
			"erp_tipo_produto_id": 30,
			"erp_unidade_medida_id": 16,
			"valor_medio": 90.00
		}

	];
// Exporte o objeto JSON
export default dados;