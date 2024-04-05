import fakerBr from 'faker-br';

// criar função para gerar na quantidade conforme parâmetro
const fornecedores = (quantidade) => {
    const dados = [];

    for (let i = 0; i < quantidade; i++) {
        const cnpj = fakerBr.br.cnpj();
        const responsavel = fakerBr.name.findName();
        const contato = fakerBr.name.findName();
        const telefones = fakerBr.phone.phoneNumber();
        const fantasia = fakerBr.company.companyName();
        const razao_social = fantasia + " LTDA";
        const active = "Y";

        dados.push({
            cnpj,
            responsavel,
            contato,
            telefones,
            fantasia,
            razao_social,
            active
        });
    }
	return dados;
}

// Exporte a função
export default fornecedores;


