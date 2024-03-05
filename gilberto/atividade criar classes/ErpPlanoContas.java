import java.util.*;
import java.sql.Time;
import java.time.LocalDateTime;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

class ErpPlanoContas {
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
}