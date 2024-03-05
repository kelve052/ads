import java.util.Date;

class ErpContasPagar {
    private int id;
    private Date dataEmissao;
    private Date dataVencimento;
    private Date dataPgto;
    private double valor;
    private String statusPagamento;
    private String chaveNfe;
    private int responsavelId; // class
    private int erpLctoHistoricoId; // class
    private int erpDestinacaoRecursoId; // class
    private int erpFormaPagamentoId; // class
    private int contaDebito;
    private int erpPessoaFornecedorId; // class
    private String observacao;
    private char active;
    private Date datetime;
    private char transferidoTesouraria;
  
    public ErpContasPagar(int id, Date dataEmissao, Date dataVencimento, Date dataPgto, double valor,
        String statusPagamento, String chaveNfe, int responsavelId, int erpLctoHistoricoId, int erpDestinacaoRecursoId,
        int erpFormaPagamentoId, int contaDebito, int erpPessoaFornecedorId, String observacao, char active,
        Date datetime, char transferidoTesouraria) {
      this.id = id;
      this.dataEmissao = dataEmissao;
      this.dataVencimento = dataVencimento;
      this.dataPgto = dataPgto;
      this.valor = valor;
      this.statusPagamento = statusPagamento;
      this.chaveNfe = chaveNfe;
      this.responsavelId = responsavelId;
      this.erpLctoHistoricoId = erpLctoHistoricoId;
      this.erpDestinacaoRecursoId = erpDestinacaoRecursoId;
      this.erpFormaPagamentoId = erpFormaPagamentoId;
      this.contaDebito = contaDebito;
      this.erpPessoaFornecedorId = erpPessoaFornecedorId;
      this.observacao = observacao;
      this.active = active;
      this.datetime = datetime;
      this.transferidoTesouraria = transferidoTesouraria;
    }

    public String getErpContasPagar() {
      return "Id: " + id + "\n" +
             "Data de Emissão: " + dataEmissao + "\n" +
             "Data de Vencimento: " + dataVencimento + "\n" +
             "Data de Pagamento: " + dataPgto + "\n" +
             "Valor: " + valor + "\n" +
             "Status de Pagamento: " + statusPagamento + "\n" +
             "Chave NFe: " + chaveNfe + "\n" +
             "ID do Responsável: " + responsavelId + "\n" +
             "ID do Histórico de Lançamento: " + erpLctoHistoricoId + "\n" +
             "ID da Destinação de Recurso: " + erpDestinacaoRecursoId + "\n" +
             "ID da Forma de Pagamento: " + erpFormaPagamentoId + "\n" +
             "Conta Debito: " + contaDebito + "\n" +
             "ID do Fornecedor: " + erpPessoaFornecedorId + "\n" +
             "Observação: " + observacao + "\n" +
             "Ativo: " + active + "\n" +
             "Data e Hora: " + datetime + "\n" +
             "Transferido para Tesouraria: " + transferidoTesouraria;
  }

  public void setErpContasPagar(int id, Date dataEmissao, Date dataVencimento, Date dataPgto, double valor, String statusPagamento, String chaveNfe, int responsavelId, int erpLctoHistoricoId, int erpDestinacaoRecursoId, int erpFormaPagamentoId, int contaDebito, int erpPessoaFornecedorId, String observacao, char active, Date datetime, char transferidoTesouraria) {
      this.id = id;
      this.dataEmissao = dataEmissao;
      this.dataVencimento = dataVencimento;
      this.dataPgto = dataPgto;
      this.valor = valor;
      this.statusPagamento = statusPagamento;
      this.chaveNfe = chaveNfe;
      this.responsavelId = responsavelId;
      this.erpLctoHistoricoId = erpLctoHistoricoId;
      this.erpDestinacaoRecursoId = erpDestinacaoRecursoId;
      this.erpFormaPagamentoId = erpFormaPagamentoId;
      this.contaDebito = contaDebito;
      this.erpPessoaFornecedorId = erpPessoaFornecedorId;
      this.observacao = observacao;
      this.active = active;
      this.datetime = datetime;
      this.transferidoTesouraria = transferidoTesouraria;
  }
}