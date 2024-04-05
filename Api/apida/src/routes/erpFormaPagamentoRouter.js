import express from "express";
import ErpFormaPagamento from "../controllers/erpFormaPagamentoController.js";

const routerFormaPagamento = express.Router();
const formaPagamento = new ErpFormaPagamento();

routerFormaPagamento
  .get("/formapagamento", formaPagamento.listar.bind(formaPagamento))
  .get("/formapagamento/:id", formaPagamento.listarId.bind(formaPagamento))
  .post("/formapagamento", formaPagamento.inserir.bind(formaPagamento))
  .patch("/formapagamento/:id", formaPagamento.atualizar.bind(formaPagamento))
  .delete("/formapagamento/:id", formaPagamento.deletar.bind(formaPagamento));

export default routerFormaPagamento;
