import java.sql.Timestamp;
import java.util.Date;

public class ErpCotacao {
    private int id;
    private String finalidade;
    private int erpPessoaFornecedorId; //class
    private Date vencimentoProposta;
    private double valorTotal;
    private char active;
    private Timestamp dataLancamento;

    public ErpCotacao(int id, String finalidade, int erpPessoaFornecedorId, Date vencimentoProposta, double valorTotal, char active, Timestamp dataLancamento) {
        this.id = id;
        this.finalidade = finalidade;
        this.erpPessoaFornecedorId = erpPessoaFornecedorId;
        this.vencimentoProposta = vencimentoProposta;
        this.valorTotal = valorTotal;
        this.active = active;
        this.dataLancamento = dataLancamento;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFinalidade() {
        return finalidade;
    }

    public void setFinalidade(String finalidade) {
        this.finalidade = finalidade;
    }

    public int getErpPessoaFornecedorId() {
        return erpPessoaFornecedorId;
    }

    public void setErpPessoaFornecedorId(int erpPessoaFornecedorId) {
        this.erpPessoaFornecedorId = erpPessoaFornecedorId;
    }

    public Date getVencimentoProposta() {
        return vencimentoProposta;
    }

    public void setVencimentoProposta(Date vencimentoProposta) {
        this.vencimentoProposta = vencimentoProposta;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
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
}
