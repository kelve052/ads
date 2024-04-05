import bcrypt from "bcryptjs";
import { prisma } from "../configs/prismaClient.js";
import env from "dotenv";

env.config(); // inicializar as variáveis de ambiente

class ErpUnidadeMedidaController {

  // POST - cadastrar Usuario
  static inserir = async (req, res) => {
    try {

      const { name, description, active } = req.body;

      const erros = [];

      // validar os dados
      if (!name) {
        erros.push({ error: true, code: 400, message: "name é obrigatório" })
      }
      if (!description) {
        erros.push({ error: true, code: 400, message: "description é obrigatório" })
      }
      if (active === undefined) {
        erros.push({ error: true, code: 400, message: "active é obrigatório" })
      }
      

      // verificar se o email já está cadastrado
      const userExists = await prisma.users.findFirst({
        where: {
          email: {
            equals: req.body.email,
          }
        },
      });

      // se o email já estiver cadastrado, retornar erro
      if (!userExists) {
      } else {
        erros.push({ error: true, code: 400, message: "Email já cadastrado" })
      }

      if (erros.length > 0) {
        return res.status(400).json(erros)
      }

      // criptografar a senha
      const senhaCrypt = bcrypt.hashSync(senha, parseInt(process.env.SALT));

      // criar o usuario
      const userCreated = await prisma.users.create({
        data: {
          name,
          email,
          senha: senhaCrypt,
          ativo,
        },
      });

      // retornar o usuario criado sem o campo senha
      delete userCreated.senha;
      return res.status(201).json(userCreated);

    } catch (err) {
      console.error(err);
      return res.status(500).json([{ error: true, code: 500, message: "Erro interno do Servidor" }])
    }
  }


  // // GET - listar users por name com paginação 
  // static listar = async (req, res) => {
  //   try {
  //     // // fazer uma busca no banco de dados por todos os registros em system_users
  //     const userExists = await prisma.system_users.findMany({
  //       select: {
  //         id: true,
  //         name: true,
  //         // password: false,
  //         email: true,
  //         active: true,
  //       },
  //     });

  //     return res.status(200).json(userExists);

  //   } catch (err) {
  //     console.error(err);
  //     return res.status(500).json([{ error: true, code: 500, message: "Erro interno do Servidor" }])
  //   }
  // }

  // // GET por ID - listar Usuario por ID 
  // static listarPorID = async (req, res) => {
  //   try {
  //     const userExists = await prisma.users.findFirst({
  //       where: {
  //         id: req.params.id,
  //       }
  //     },
  //     );
  //     if (userExists) {
  //       return res.status(200).json(userExists);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     return res.status(500).json([{ error: true, code: 500, message: "Erro interno do Servidor" }])
  //   }
  // }

  

  // // atualizar Usuario
  // static atualizar = async (req, res) => {
  //   try {
  //     // testar se o id do usuario foi informado
  //     if (!req.params.id) {
  //       return res.status(400).json([{ error: true, code: 400, message: "ID do usuário é obrigatório" }])
  //     }

  //     const id = req.params.id
  //     const { name, email, senha, ativo } = req.body;

  //     // validar os dados
  //     if (name || email || senha || ativo && id) {
  //     } else {
  //       return res.status(400).json([{ error: true, code: 400, message: "Algum dado deve ser informado para atualizar o usuário" }])
  //     }

  //     // buscar email do usuario no banco de dados
  //     const emailExists = await prisma.users.findFirst({
  //       where: {
  //         id: id
  //       },
  //     });

  //     console.log(email)
  //     console.log(typeof email)

  //     // verificar se o email informado é diferente do email do usuario no cadastro
  //     if (email !== undefined) {
  //       if (emailExists.email !== email) {
  //         // verificar se o email já está cadastrado para outro usuario
  //         const emailExistsOutherUser = await prisma.users.findFirst({
  //           where: {
  //             email: {
  //               equals: email,
  //             },
  //             id: {
  //               not: {
  //                 equals: id,
  //               }
  //             }
  //           },
  //         });
  //         if (emailExistsOutherUser) {
  //           return res.status(400).json([{ error: true, code: 400, message: "Email já cadastrado" }])
  //         }
  //       }
  //     }

  //     // criptografar a senha
  //     if (senha) {
  //       const senhaCrypt = bcrypt.hashSync(senha, parseInt(process.env.SALT));
  //     }

  //     // atualizar os atributos do usuario que foram informados
  //     const userUpdated = await prisma.users.update({
  //       where: {
  //         id: id,
  //       },
  //       data: {
  //         name,
  //         email,
  //         senha,
  //         ativo,
  //       },
  //     });

  //     // retornar o usuario criado sem o campo senha
  //     delete userUpdated.senha;
  //     return res.status(201).json(userUpdated);

  //   } catch (err) {
  //     console.error(err);
  //     return res.status(500).json([{ error: true, code: 500, message: "Erro interno do Servidor" }])
  //   }
  // }

  // // DELETE - EXCLUIR Usuario
  // static excluir = async (req, res) => {
  //   try {
  //     const erros = [];

  //     // testar se o id do usuario foi informado
  //     if (!req.params.id) {
  //       return res.status(400).json([{ error: true, code: 400, message: "ID do usuário é obrigatório" }])
  //     }

  //     const id = req.params.id

  //     // buscar id do usuario no banco de dados
  //     const userExists = await prisma.users.findFirst({
  //       where: {
  //         id: id,
  //       },
  //     });

  //     // verificar se o usuario existe
  //     if (!userExists) {
  //       return res.status(400).json([{ error: true, code: 400, message: "Usuário não encontrado" }])
  //     }

  //     // verificar se há informações nas tabelas de relacionamento: UsuariosRotas e UsuariosGrupos
  //     const userExistsRotas = await prisma.usuariosRotas.findMany({
  //       where: {
  //         usuario_id: id,
  //       },
  //     });

  //     const userExistsGrupos = await prisma.usuariosGrupos.findMany({
  //       where: {
  //         usuario_id: id,
  //       },
  //     });

  //     if (userExistsRotas) {
  //       erros.push({ error: true, code: 400, message: "Usuário possui rotas vinculadas, a exclusão só é permitida se o usuário não possuir rotas vinculadas" })
  //     }

  //     if (userExistsGrupos) {
  //       erros.push({ error: true, code: 400, message: "Usuário possui grupos vinculados, a exclusão só é permitida se o usuário não possuir grupos vinculados" })
  //     }

  //     if (erros.length > 0) {
  //       return res.status(400).json(erros)
  //     }

  //     // excluir o usuario
  //     const userDeleted = await prisma.users.delete({
  //       where: {
  //         id: id,
  //       },
  //     });

  //     // retornar o usuario criado
  //     return res.status(200).json(userDeleted);

  //   } catch (err) {
  //     console.error(err);
  //     return res.status(500).json([{ error: true, code: 500, message: "Erro interno do Servidor" }])
  //   }
  // }
}

export default ErpUnidadeMedidaController;