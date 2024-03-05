import java.util.*;
import java.sql.Time;
import java.time.LocalDateTime;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

class ErpProdutos {
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
  }
  