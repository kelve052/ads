import java.util.*;
import java.sql.Time;
import java.time.LocalDateTime;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

class ErpPessoaFornecedor {
    private int id;
    private String cnpj;
    private String responsavel;
    private String contato;
    private String telefones;
    private String fantasia;
    private String razaoSocial;
    private char active;
    private Timestamp dataLancamento;

    public ErpPessoaFornecedor(int id, String cnpj, String responsavel, String contato, String telefones, String fantasia, String razaoSocial, char active, Timestamp dataLancamento) {
        this.id = id;
        this.cnpj = cnpj;
        this.responsavel = responsavel;
        this.contato = contato;
        this.telefones = telefones;
        this.fantasia = fantasia;
        this.razaoSocial = razaoSocial;
        this.active = active;
        this.dataLancamento = dataLancamento;
    }
}