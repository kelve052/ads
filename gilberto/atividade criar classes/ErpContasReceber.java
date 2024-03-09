import java.sql.Time;
import java.util.Date;

public class ErpContasReceber {
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
                             String statusPagamento, String chaveNfe, int responsavelId, int erpLctoHistoricoId,
                             int erpFormaPagamentoId, int contaCredito, String observacao, char active, Time datetime,
                             char transferidoTesouraria) {
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDataEmissao() {
        return dataEmissao;
    }

    public void setDataEmissao(Date dataEmissao) {
        this.dataEmissao = dataEmissao;
    }

    public Date getDataVencimento() {
        return dataVencimento;
    }

    public void setDataVencimento(Date dataVencimento) {
        this.dataVencimento = dataVencimento;
    }

    public Date getDataRecebimento() {
        return dataRecebimento;
    }

    public void setDataRecebimento(Date dataRecebimento) {
        this.dataRecebimento = dataRecebimento;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public String getStatusPagamento() {
        return statusPagamento;
    }

    public void setStatusPagamento(String statusPagamento) {
        this.statusPagamento = statusPagamento;
    }

    public String getChaveNfe() {
        return chaveNfe;
    }

    public void setChaveNfe(String chaveNfe) {
        this.chaveNfe = chaveNfe;
    }

    public int getResponsavelId() {
        return responsavelId;
    }

    public void setResponsavelId(int responsavelId) {
        this.responsavelId = responsavelId;
    }

    public int getErpLctoHistoricoId() {
        return erpLctoHistoricoId;
    }

    public void setErpLctoHistoricoId(int erpLctoHistoricoId) {
        this.erpLctoHistoricoId = erpLctoHistoricoId;
    }

    public int getErpFormaPagamentoId() {
        return erpFormaPagamentoId;
    }

    public void setErpFormaPagamentoId(int erpFormaPagamentoId) {
        this.erpFormaPagamentoId = erpFormaPagamentoId;
    }

    public int getContaCredito() {
        return contaCredito;
    }

    public void setContaCredito(int contaCredito) {
        this.contaCredito = contaCredito;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }

    public char getActive() {
        return active;
    }

    public void setActive(char active) {
        this.active = active;
    }

    public Time getDatetime() {
        return datetime;
    }

    public void setDatetime(Time datetime) {
        this.datetime = datetime;
    }

    public char getTransferidoTesouraria() {
        return transferidoTesouraria;
    }

    public void setTransferidoTesouraria(char transferidoTesouraria) {
        this.transferidoTesouraria = transferidoTesouraria;
    }
}
