import java.sql.Timestamp;

public class ErpProdutos {
    private int id;
    private String nome;
    private String descricao;
    private int erpTipoProdutoId;
    private int erpUnidadeMedidaId;
    private char active;
    private Double valorMedio;
    private Timestamp dataLancamento;
  
    public ErpProdutos(int id, String nome, String descricao, int erpTipoProdutoId, int erpUnidadeMedidaId, char active, Double valorMedio, Timestamp dataLancamento) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.erpTipoProdutoId = erpTipoProdutoId;
        this.erpUnidadeMedidaId = erpUnidadeMedidaId;
        this.active = active;
        this.valorMedio = valorMedio;
        this.dataLancamento = dataLancamento;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public int getErpTipoProdutoId() {
        return erpTipoProdutoId;
    }

    public void setErpTipoProdutoId(int erpTipoProdutoId) {
        this.erpTipoProdutoId = erpTipoProdutoId;
    }

    public int getErpUnidadeMedidaId() {
        return erpUnidadeMedidaId;
    }

    public void setErpUnidadeMedidaId(int erpUnidadeMedidaId) {
        this.erpUnidadeMedidaId = erpUnidadeMedidaId;
    }

    public char getActive() {
        return active;
    }

    public void setActive(char active) {
        this.active = active;
    }

    public Double getValorMedio() {
        return valorMedio;
    }

    public void setValorMedio(Double valorMedio) {
        this.valorMedio = valorMedio;
    }

    public Timestamp getDataLancamento() {
        return dataLancamento;
    }

    public void setDataLancamento(Timestamp dataLancamento) {
        this.dataLancamento = dataLancamento;
    }
}
