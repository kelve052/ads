import java.util.*;
import java.sql.Time;
import java.time.LocalDateTime;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

class ErpContasReceber {
  private int id;
  private Date dataEmissao;
  private Date dataVencimento;
  private Date dataRecebimento;
  private double valor;
  private String statusPagamento;
  private String chaveNfe;
  private int responsavelId; // class
  private int erpLctoHistoricoId; // class
  private int erpFormaPagamentoId; // class
  private int contaCredito;
  private String observacao;
  private char active;
  private Time datetime;
  private char transferidoTesouraria;

  public ErpContasReceber(int id, Date dataEmissao, Date dataVencimento, Date dataRecebimento, double valor,
      String statusPagamento, String chaveNfe, int responsavelId, int erpLctoHistoricoId, int erpFormaPagamentoId,
      int contaCredito, String observacao, char active, Time datetime, char transferidoTesouraria) {
    this.id = id;
    this.dataEmissao = dataEmissao;
    this.dataVencimento = dataVencimento;
    this.dataRecebimento = dataRecebimento;
    this.valor = valor;
    this.statusPagamento = statusPagamento;
    this.chaveNfe = chaveNfe;
    this.responsavelId = responsavelId;
    this.erpLctoHistoricoId = erpLctoHistoricoId;
    this.erpFormaPagamentoId = erpFormaPagamentoId;
    this.contaCredito = contaCredito;
    this.observacao = observacao;
    this.active = active;
    this.datetime = datetime;
    this.transferidoTesouraria = transferidoTesouraria;
  }

  public String getErpContasReceber() {
    return "Id: " + id + "\n" +
        "Data de Emissão: " + dataEmissao + "\n" +
        "Data de Vencimento: " + dataVencimento + "\n" +
        "Data de Recebimento: " + dataRecebimento + "\n" +
        "Valor: " + valor + "\n" +
        "Status de Pagamento: " + statusPagamento + "\n" +
        "Chave NFe: " + chaveNfe + "\n" +
        "ID do Responsável: " + responsavelId + "\n" +
        "ID do Histórico de Lançamento: " + erpLctoHistoricoId + "\n" +
        "ID da Forma de Pagamento: " + erpFormaPagamentoId + "\n" +
        "Conta Crédito: " + contaCredito + "\n" +
        "Observação: " + observacao + "\n" +
        "Ativo: " + active + "\n" +
        "Data e Hora: " + datetime + "\n" +
        "Transferido para Tesouraria: " + transferidoTesouraria;
  }

  public void setErpContasReceber(int id, Date dataEmissao, Date dataVencimento, Date dataRecebimento, double valor,
      String statusPagamento, String chaveNfe, int responsavelId, int erpLctoHistoricoId, int erpFormaPagamentoId,
      int contaCredito, String observacao, char active, Time datetime, char transferidoTesouraria) {
    this.id = id;
    this.dataEmissao = dataEmissao;
    this.dataVencimento = dataVencimento;
    this.dataRecebimento = dataRecebimento;
    this.valor = valor;
    this.statusPagamento = statusPagamento;
    this.chaveNfe = chaveNfe;
    this.responsavelId = responsavelId;
    this.erpLctoHistoricoId = erpLctoHistoricoId;
    this.erpFormaPagamentoId = erpFormaPagamentoId;
    this.contaCredito = contaCredito;
    this.observacao = observacao;
    this.active = active;
    this.datetime = datetime;
    this.transferidoTesouraria = transferidoTesouraria;
  }
}