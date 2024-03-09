import java.sql.Timestamp;

public class ErpCotacaoItens {
    private int id;
    private double valor;
    private Integer erpProdutosId; //class 
    private double qtd;
    private Integer erpCotacaoId; //class
    private Timestamp dataLancamento;

    public ErpCotacaoItens(int id, double valor, Integer erpProdutosId, double qtd, Integer erpCotacaoId, Timestamp dataLancamento) {
        this.id = id;
        this.valor = valor;
        this.erpProdutosId = erpProdutosId;
        this.qtd = qtd;
        this.erpCotacaoId = erpCotacaoId;
        this.dataLancamento = dataLancamento;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public Integer getErpProdutosId() {
        return erpProdutosId;
    }

    public void setErpProdutosId(Integer erpProdutosId) {
        this.erpProdutosId = erpProdutosId;
    }

    public double getQtd() {
        return qtd;
    }

    public void setQtd(double qtd) {
        this.qtd = qtd;
    }

    public Integer getErpCotacaoId() {
        return erpCotacaoId;
    }

    public void setErpCotacaoId(Integer erpCotacaoId) {
        this.erpCotacaoId = erpCotacaoId;
    }

    public Timestamp getDataLancamento() {
        return dataLancamento;
    }

    public void setDataLancamento(Timestamp dataLancamento) {
        this.dataLancamento = dataLancamento;
    }
}
