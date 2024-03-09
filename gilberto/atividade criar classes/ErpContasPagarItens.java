import java.util.Date;

public class ErpContasPagarItens {
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public int getErpContasPagarId() {
        return erpContasPagarId;
    }

    public void setErpContasPagarId(int erpContasPagarId) {
        this.erpContasPagarId = erpContasPagarId;
    }

    public Date getLancamento() {
        return lancamento;
    }

    public void setLancamento(Date lancamento) {
        this.lancamento = lancamento;
    }
}
