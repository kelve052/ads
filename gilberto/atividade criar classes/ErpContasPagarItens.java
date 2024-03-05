import java.util.*;
import java.sql.Time;
import java.time.LocalDateTime;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

class ErpContasPagarItens {
    private int id;
    private String descricao;
    private double valor;
    private int erpContasPagarId; // class
    private Date lancamento;
  
    public ErpContasPagarItens(int id, String descricao, double valor, int erpContasPagarId, Date lancamento) {
      this.id = id;
      this.descricao = descricao;
      this.valor = valor;
      this.erpContasPagarId = erpContasPagarId;
      this.lancamento = lancamento;
    }

    public String getErpContasPagarItens() {
      return "Id: " + id + "\n" +
             "Descrição: " + descricao + "\n" +
             "Valor: " + valor + "\n" +
             "ID do Contas a Pagar: " + erpContasPagarId + "\n" +
             "Lançamento: " + lancamento;
  }

  public void setErpContasPagarItens(int id, String descricao, double valor, int erpContasPagarId, Date lancamento) {
      this.id = id;
      this.descricao = descricao;
      this.valor = valor;
      this.erpContasPagarId = erpContasPagarId;
      this.lancamento = lancamento;
  }
  }