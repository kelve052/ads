import bcrypt from "bcryptjs";
import { prisma } from "../configs/prismaClient.js";
import env from "dotenv";

env.config(); // inicializar as variáveis de ambiente

class ErpFormaPagamento {
    listar = async (req, res) => {
        try {
            const response = await prisma.erp_forma_pagamento.findMany({
            })
            console.log(response)
            res.status(200).json({response})
        } catch(error) {
            console.log(error)
            res.status(404).json({error})
        }



        // verificar se o email já está cadastrado
        //     const userExists = await prisma.erp_forma_pagamento.findFirst({
        //       where: {
        //         email: {
        //           equals: req.body.email,
        //         }
        //       },
        //     });

        //     // se o email já estiver cadastrado, retornar erro
        //     if (!userExists) {
        //     } else {
        //       erros.push({ error: true, code: 400, message: "Email já cadastrado" })
        //     }

        //     if (erros.length > 0) {
        //       return res.status(400).json(erros)
        //     }

        //     // criptografar a senha
        //     const senhaCrypt = bcrypt.hashSync(senha, parseInt(process.env.SALT));

        //     // criar o usuario
        //     const userCreated = await prisma.users.create({
        //       data: {
        //         name,
        //         email,
        //         senha: senhaCrypt,
        //         ativo,
        //       },
        //     });

        //     // retornar o usuario criado sem o campo senha
        //     delete userCreated.senha;
        //     return res.status(201).json(userCreated);

        //   } catch (err) {
        //     console.error(err);
        //     return res.status(500).json([{ error: true, code: 500, message: "Erro interno do Servidor" }])
        //   }
    }
    listarId = async (req, res) => {
        try {
            const busca = await prisma.erp_forma_pagamento.findFirst({ // pucha somente o primeiro que encontra mesmo que tenha mais dados que atenda ao parametro where
                where:{
                    id: req.params.id
                }
            })
            res.status(200).json({busca})
        } catch (error) {
            res.status(400).json({error})
        }
    }
    inserir = (req, res) => {
        const { id, name, description, active, data_lancamento, erp_compras, erp_contas_pagar, erp_contas_receber, erp_lcto_tesouraria } = req.body;

            const erros = [];

         try {
               // validar os dados
               if (!id) {
                   erros.push({ error: true, code: 400, message: "id é obrigatório" })
               }
               if (!name) {
                   erros.push({ error: true, code: 400, message: "name é obrigatório" })
               }
               if (!description) {
                   erros.push({ error: true, code: 400, message: "description é obrigatório" })
               }
               if (!active) {
                   erros.push({ error: true, code: 400, message: "active é obrigatório" })
               }
               if (!data_lancamento) {
                   erros.push({ error: true, code: 400, message: "data_lancamento é obrigatório" })
               }
            //    if (!erp_compras) {
            //        erros.push({ error: true, code: 400, message: "erp_compras é obrigatório" })
            //    }
            //    if (!erp_contas_pagar) {
            //        erros.push({ error: true, code: 400, message: "erp_contas_pagar é obrigatório" })
            //    }
            //    if (!erp_contas_receber) {
            //        erros.push({ error: true, code: 400, message: "erp_contas_receber é obrigatório" })
            //    }
            //    if (!erp_lcto_tesouraria) {
            //        erros.push({ error: true, code: 400, message: "erp_lcto_tesouraria é obrigatório" })
            //    }

               if(erros != []){
                throw Error;
               }
            const [dados] = { id, name, description, active, data_lancamento /* erp_compras, erp_contas_pagar, erp_contas_receber, erp_lcto_tesouraria*/ }
               const response = prisma.erp_forma_pagamento.createMany({
                data: [dados]
               })
               res.status(200).json({response})
         } catch (error) {
            res.status(400).json({error})
         }
    }
    atualizar = (req, res) => {
        return "atualizar"
    }
    deletar = (req, res) => {
        return "deletar"
    }
}

export default ErpFormaPagamento;