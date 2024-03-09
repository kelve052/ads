import java.util.Date;

public class ErpContasReceberItens {
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

    public int getErpContasReceberId() {
        return erpContasReceberId;
    }

    public void setErpContasReceberId(int erpContasReceberId) {
        this.erpContasReceberId = erpContasReceberId;
    }

    public Date getLancamento() {
        return lancamento;
    }

    public void setLancamento(Date lancamento) {
        this.lancamento = lancamento;
    }
}
