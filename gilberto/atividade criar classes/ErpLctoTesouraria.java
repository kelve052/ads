
import java.util.*;
import java.sql.Time;
import java.time.LocalDateTime;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

class ErpLctoTesouraria {
    private int id;
    private Date dataPgto;
    private int erpFormaPagamentoId; //class
    private int erpLctoHistoricoId; //class
    private int contaDebito;
    private int contaCredito;
    private double valor;
    private Timestamp datetime;
    private char active;
    private int responsavelId; //class
    private Integer erpContasPagarId; //class
    private Integer erpContasReceberId; //class

    public ErpLctoTesouraria(int id, Date dataPgto, int erpFormaPagamentoId, int erpLctoHistoricoId, int contaDebito, int contaCredito, double valor, Timestamp datetime, char active, int responsavelId, Integer erpContasPagarId, Integer erpContasReceberId) {
        this.id = id;
        this.dataPgto = dataPgto;
        this.erpFormaPagamentoId = erpFormaPagamentoId;
        this.erpLctoHistoricoId = erpLctoHistoricoId;
        this.contaDebito = contaDebito;
        this.contaCredito = contaCredito;
        this.valor = valor;
        this.datetime = datetime;
        this.active = active;
        this.responsavelId = responsavelId; //class
        this.erpContasPagarId = erpContasPagarId; //class
        this.erpContasReceberId = erpContasReceberId; //class
    }
}