import java.util.*;
import java.sql.Time;
import java.time.LocalDateTime;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

class ErpContasReceberItens {
    private int id;
    private String descricao;
    private double valor;
    private int erpContasReceberId;
    private Date lancamento;
  
    public ErpContasReceberItens(int id, String descricao, double valor, int erpContasReceberId, Date lancamento) {
      this.id = id;
      this.descricao = descricao;
      this.valor = valor;
      this.erpContasReceberId = erpContasReceberId;
      this.lancamento = lancamento;
    }
  }