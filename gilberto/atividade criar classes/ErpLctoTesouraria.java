import java.sql.Timestamp;
import java.util.Date;

public class ErpLctoTesouraria {
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDataPgto() {
        return dataPgto;
    }

    public void setDataPgto(Date dataPgto) {
        this.dataPgto = dataPgto;
    }

    public int getErpFormaPagamentoId() {
        return erpFormaPagamentoId;
    }

    public void setErpFormaPagamentoId(int erpFormaPagamentoId) {
        this.erpFormaPagamentoId = erpFormaPagamentoId;
    }

    public int getErpLctoHistoricoId() {
        return erpLctoHistoricoId;
    }

    public void setErpLctoHistoricoId(int erpLctoHistoricoId) {
        this.erpLctoHistoricoId = erpLctoHistoricoId;
    }

    public int getContaDebito() {
        return contaDebito;
    }

    public void setContaDebito(int contaDebito) {
        this.contaDebito = contaDebito;
    }

    public int getContaCredito() {
        return contaCredito;
    }

    public void setContaCredito(int contaCredito) {
        this.contaCredito = contaCredito;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public Timestamp getDatetime() {
        return datetime;
    }

    public void setDatetime(Timestamp datetime) {
        this.datetime = datetime;
    }

    public char getActive() {
        return active;
    }

    public void setActive(char active) {
        this.active = active;
    }

    public int getResponsavelId() {
        return responsavelId;
    }

    public void setResponsavelId(int responsavelId) {
        this.responsavelId = responsavelId;
    }

    public Integer getErpContasPagarId() {
        return erpContasPagarId;
    }

    public void setErpContasPagarId(Integer erpContasPagarId) {
        this.erpContasPagarId = erpContasPagarId;
    }

    public Integer getErpContasReceberId() {
        return erpContasReceberId;
    }

    public void setErpContasReceberId(Integer erpContasReceberId) {
        this.erpContasReceberId = erpContasReceberId;
    }
}
