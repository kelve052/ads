import java.util.*;
import java.sql.Time;
import java.time.LocalDateTime;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

class ErpCotacao {
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
}
