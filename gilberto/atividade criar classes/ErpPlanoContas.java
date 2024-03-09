import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

public class ErpPlanoContas {
    private int id;
    private String conta;
    private String descricao;
    private char active;
    private Timestamp dataLancamento;
    private String tipoConta;
    private Integer nivelHierarquico;
    private Date dataInicio;
    private BigDecimal saldoInicial;

    public ErpPlanoContas(int id, String conta, String descricao, char active, Timestamp dataLancamento, String tipoConta, Integer nivelHierarquico, Date dataInicio, BigDecimal saldoInicial) {
        this.id = id;
        this.conta = conta;
        this.descricao = descricao;
        this.active = active;
        this.dataLancamento = dataLancamento;
        this.tipoConta = tipoConta;
        this.nivelHierarquico = nivelHierarquico;
        this.dataInicio = dataInicio;
        this.saldoInicial = saldoInicial;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getConta() {
        return conta;
    }

    public void setConta(String conta) {
        this.conta = conta;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public char getActive() {
        return active;
    }

    public void setActive(char active) {
        this.active = active;
    }

    public Timestamp getDataLancamento() {
        return dataLancamento;
    }

    public void setDataLancamento(Timestamp dataLancamento) {
        this.dataLancamento = dataLancamento;
    }

    public String getTipoConta() {
        return tipoConta;
    }

    public void setTipoConta(String tipoConta) {
        this.tipoConta = tipoConta;
    }

    public Integer getNivelHierarquico() {
        return nivelHierarquico;
    }

    public void setNivelHierarquico(Integer nivelHierarquico) {
        this.nivelHierarquico = nivelHierarquico;
    }

    public Date getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(Date dataInicio) {
        this.dataInicio = dataInicio;
    }

    public BigDecimal getSaldoInicial() {
        return saldoInicial;
    }

    public void setSaldoInicial(BigDecimal saldoInicial) {
        this.saldoInicial = saldoInicial;
    }
}
