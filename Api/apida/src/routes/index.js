import express from "express";
import users from "./systemUsersRoutes.js";
import formapagamento from "./erpFormaPagamentoRouter.js"

const routes = (app) => {
    app.route('/').get((rep, res) => {
        res.status(200).redirect("/docs") // redirecionando para documentação
    })
/*
    Vamos descomentar linha a linha para cada rota que for criada no sistema (arquivo de rotas, controller e posteriormente documentação da rota e teste de rota automático e postman)
*/

    app.use(
        express.json(),
        // compras,
        // comprasitens,
        // contaspagar,
        // contaspagaritens,
        // contas_receber,
        // contasreceberitens,
        // cotacao,
        // cotacaoitens,
        // destinacaorecurso,
         formapagamento,
        // lctohistorico,
        // lctotesouraria,
        // lctotesourariaitens,
        // pessoafornecedor,
        // planocontas,
        // produtos,
        // statuscompra,
        // tipoproduto,
        // unidademedida,
        // ibgebairro,
        // ibgecategoriaracial,
        // ibgeestado,
        // ibgelogradouros,
        // ibgemunicipio,
        // ibgeregiao,
        // accesslog,
        // accessnotificationlog,
        // changelog,
        // document,
        // documentbookmark,
        // documentcategory,
        // documentgroup,
        // documentuser,
        // folder,
        // folderbookmark,
        // foldergroup,
        // folderuser,
        // group,
        // groupprogram,
        // message,
        // notification,
        // post,
        // postcomment,
        // postlike,
        // postsharegroup,
        // posttag,
        // preference,
        // program,
        // programmethodrole,
        // requestlog,
        // role,
        // sqllog,
        // unit,
        users,
        // usergroup,
        // useroldpassword,
        // userprogram,
        // userrole,
        // userunit,
        // wikipage,
        // wikisharegroup,
        // wikitag
        )
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *        _id: 
 *          type: string
 *          example: "63759607e0a9fb91607a8c6d"
 *        nome:
 *          type: string
 *          example: "João da Silva"
 *        email:
 *          type: string
 *          example: "82493617Cesar_Batista27@gmail.com"
 *        ativo: 
 *          type: boolean
 *          example: true
 *        link_foto:
 *          type: string
 *          example: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
 *        token (recuperação de seha):
 *          type: string
 *          example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjRkNTE5Y2ViNTVkMzdmY2JmOGI1MyIsImlhdCI6MTY4MDI2ODMxOCwiZXhwIjoxNjgwMjc1NTE4fQ.desbT2UAGbnsgIa0coVlrBG798pkQlkuy15ODO-KTmg"           
 *        grupos:
 *           type: object
 *           properties:
 *             _id: 
 *               type: string
 *               example: "6424d518ceb55d37fcbf8b4c"
 *        rotas:
 *           type: object
 *           properties:
 *             _id: 
 *               type: string
 *               example: "63759607e0a9fb91607a8c6d"
 *             rota:
 *               type: string
 *               example: "/grupos"
 *             dominio:
 *               type: string
 *               example: "google.com"
 *             ativo: 
 *               type: boolean
 *               example: true
 *             verbo_get:
 *               type: boolean
 *               example: true
 *             verbo_post:  
 *               type: boolean
 *               example: true
 *             verbo_put:
 *               type: boolean
 *               example: true
 *             verbo_patch:
 *               type: boolean
 *               example: true
 *             verbo_delete:
 *               type: boolean
 *               example: true
 *    
 * 
 * 
 *    
 *     Grupo:
 *       type: object
 *       properties:
 *         _id: 
 *           type: string
 *           example: "63759607e0a9fb91607a8c6d"
 *         nome:
 *           type: string
 *           example: "/grupos"
 *         decricao:
 *           type: string
 *           example: "google.com"
 *         ativo: 
 *           type: boolean
 *           example: true
 *         unidades:
 *           type: object
 *           properties:
 *             _id: 
 *               type: string
 *               example: "63759607e0a9fb91607a8c6d"
 *             nome:
 *               type: string
 *               example: "IFRO Vilhena"
 *             localidade:
 *               type: string
 *               example: "Vilhena/RO"
 *             ativo:
 *               type: boolean
 *               example: true
 *         rotas:
 *           type: object
 *           properties:
 *             _id: 
 *               type: string
 *               example: "63759607e0a9fb91607a8c6d"
 *             rota:
 *               type: string
 *               example: "/grupos"
 *             dominio:
 *               type: string
 *               example: "google.com"
 *             ativo: 
 *               type: boolean
 *               example: true
 *             verbo_get:
 *               type: boolean
 *               example: true
 *             verbo_post:  
 *               type: boolean
 *               example: true
 *             verbo_put:
 *               type: boolean
 *               example: true
 *             verbo_patch:
 *               type: boolean
 *               example: true
 *             verbo_delete:
 *               type: boolean
 *               example: true
 *    
 *    
 *        
 *    
 *    
 *     Rota:
 *       type: object
 *       properties:
 *         _id: 
 *           type: string
 *           example: "63759607e0a9fb91607a8c6d"
 *         rota:
 *           type: string
 *           example: "/grupos"
 *         dominio:
 *           type: string
 *           example: "google.com"
 *         ativo: 
 *           type: boolean
 *           example: true
 *         verbo_get:
 *           type: boolean
 *           example: true
 *         verbo_post:  
 *           type: boolean
 *           example: true
 *         verbo_put:
 *           type: boolean
 *           example: true
 *         verbo_patch:
 *           type: boolean
 *           example: true
 *         verbo_delete:
 *           type: boolean
 *           example: true
 *      
 *     
 * 
 *                           
 *     Unidade:
 *       type: object
 *       properties:
 *         _id: 
 *           type: string
 *           example: "63759607e0a9fb91607a8c6d"
 *         nome:
 *           type: string
 *           example: "IFRO Vilhena"
 *         localidade:
 *           type: string
 *           example: "Vilhena/RO"
 *         ativo:
 *           type: boolean
 *           example: true
 *                             
 *               
 *               
 *                           
 *     recuperarsenha:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: "meuemail@gmail.com"   
 *               
 *                           
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: "gilberto.silva@ifro.edu.br"
 *         senha:
 *           type: string
 *           example: "LjsdfijlsdkfJFasfd32132"
 *               
 * 
 *     login_token_altera_senha:
 *       type: object
 *       properties:
 *         senha:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5"
 * 
 *     autorizacao:	
 *       type: object
 *       properties:
 *         code:
 *           type: string
 *           example: "200"
 *         message:
 *           type: string
 *           example: "Token válido!"
 *         user_id:
 *           type: string
 *           example: "6424d519ceb55d37fcbf8b54"
 * 
 *     permissao:	
 *       type: object
 *       properties:
 *         code:
 *           type: string
 *           example: "200"
 *         message:
 *           type: string
 *           example: "Acesso liberado!"
 * 
 * 
 *     pessoa:
 *       type: object
 *       properties:
 *        _id: 
 *          type: string
 *          example: "63759607e0a9fb91607a8c6d"
 *        nome:
 *          type: string
 *          example: "João da Silva"
 *        cpf:
 *          type: string
 *          example: "000.000.000-00"
 *        nit:
 *          type: string
 *          example: "000.000.000-00"
 *        dataNascimento:
 *          type: string
 *          example: "dd-mm-yyyy - 01-01-1980"
 *        estrangeiro: 
 *          type: boolean
 *          example: true
 *        pais:
 *          type: string
 *          example: "Brasil"
 *        cep:
 *          type: string
 *          example: "00.000-000"
 *        logradouro: 
 *          type: string
 *          example: "Rua Santos Silva"
 *        numero: 
 *          type: string
 *          example: "0000"
 *        bairro: 
 *          type: string
 *          example: "Centro"
 *        cidade: 
 *          type: string
 *          example: "Vilhena"
 *        estado: 
 *          type: string
 *          example: "RO"
 *        telefone: 
 *          type: string
 *          example: "(00)0-0000-0000"
 *        telefoneContato: 
 *          type: string
 *          example: "Maria Contato"
 * 
 * 
 * 
 * 
 *     Atendimento:
 *       type: object
 *       properties:
 *        _id: 
 *          type: string
 *          example: "63759607e0a9fb91607a8c6d"
 *        oid_pessoa:
 *          type: string
 *          example: "63759607e0a9fb91607a8c6d"
 *        nome:
 *          type: string
 *          example: "Oliveira Santos Silva"
 *        cpf:
 *          type: string
 *          example: "000.000.000-00"
 *        nit:
 *          type: string
 *          example: "000.000.000-00"
 *        tipo:
 *          type: string
 *          example: "Bolsa família"
 *        observacao:
 *          type: string
 *          example: "Incidunt animi quidem iste consequatur. Aut ut dolor voluptatem inventore laudantium. Quam aut repellendus voluptatem quis asperiores tempore error voluptatum. Vitae quas magni nihil atque id quae."
 *        dataAtendimento:
 *          type: string
 *          example: "2022-09-29T07:46:11.985Z"
 *  
 * 
 *     Sessao:
 *       type: object
 *       properties:
 *        _id: 
 *          type: string
 *          example: "63759607e0a9fb91607a8c6d"
 *        nome:
 *          type: string
 *          example: "João da Silva"
 *        email:
 *          type: string
 *          example: "82493617Cesar_Batista27@gmail.com"
 *        ativo: 
 *          type: boolean
 *          example: true
 *        link_foto:
 *          type: string
 *          example: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
 *        token (recuperação de seha):
 *          type: string
 *          example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjRkNTE5Y2ViNTVkMzdmY2JmOGI1MyIsImlhdCI6MTY4MDI2ODMxOCwiZXhwIjoxNjgwMjc1NTE4fQ.desbT2UAGbnsgIa0coVlrBG798pkQlkuy15ODO-KTmg"           
 *        grupos:
 *           type: object
 *           properties:
 *             _id: 
 *               type: string
 *               example: "6424d518ceb55d37fcbf8b4c"
 *        rotas:
 *           type: object
 *           properties:
 *             _id: 
 *               type: string
 *               example: "63759607e0a9fb91607a8c6d"
 *             rota:
 *               type: string
 *               example: "/grupos"
 *             dominio:
 *               type: string
 *               example: "google.com"
 *             ativo: 
 *               type: boolean
 *               example: true
 *             verbo_get:
 *               type: boolean
 *               example: true
 *             verbo_post:  
 *               type: boolean
 *               example: true
 *             verbo_put:
 *               type: boolean
 *               example: true
 *             verbo_patch:
 *               type: boolean
 *               example: true
 *             verbo_delete:
 *               type: boolean
 *               example: true
 
 * 
 * 
 */


export default routes