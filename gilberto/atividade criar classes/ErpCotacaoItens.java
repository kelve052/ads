import java.util.*;
import java.sql.Time;
import java.time.LocalDateTime;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

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
}