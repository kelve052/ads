// import java.util.*;
// import java.sql.Time;
// import java.time.LocalDateTime;
// import java.math.BigDecimal;
// import java.sql.Timestamp;
import java.util.Date;

public class ErpCompras {
    private int id;
    private String numero_requisicao;
    private SystemUsers membro_comprador_system_users_id; // class
    private int erp_forma_pagamento_id;
    private int erp_destinacao_recurso_id;
    private int erp_cotacao_id;
    private double valor_total;
    private Date data_compra;
    private int erp_status_compra_id;
    private char active;
    private Date data_lancamento;

    public ErpCompras(int id, String numero_requisicao, SystemUsers membro_comprador_system_users_id,
        int erp_forma_pagamento_id, int erp_destinacao_recurso_id, int erp_cotacao_id, double valor_total,
        Date data_compra, int erp_status_compra_id, char active, Date data_lancamento) {
        this.id = id;
        this.numero_requisicao = numero_requisicao;
        this.membro_comprador_system_users_id = membro_comprador_system_users_id;
        this.erp_forma_pagamento_id = erp_forma_pagamento_id;
        this.erp_destinacao_recurso_id = erp_destinacao_recurso_id;
        this.erp_cotacao_id = erp_cotacao_id;
        this.valor_total = valor_total;
        this.data_compra = data_compra;
        this.erp_status_compra_id = erp_status_compra_id;
        this.active = active;
        this.data_lancamento = data_lancamento;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNumero_requisicao() {
        return numero_requisicao;
    }

    public void setNumero_requisicao(String numero_requisicao) {
        this.numero_requisicao = numero_requisicao;
    }

    public SystemUsers getMembro_comprador_system_users_id() {
        return membro_comprador_system_users_id;
    }

    public void setMembro_comprador_system_users_id(SystemUsers membro_comprador_system_users_id) {
        this.membro_comprador_system_users_id = membro_comprador_system_users_id;
    }

    public int getErp_forma_pagamento_id() {
        return erp_forma_pagamento_id;
    }

    public void setErp_forma_pagamento_id(int erp_forma_pagamento_id) {
        this.erp_forma_pagamento_id = erp_forma_pagamento_id;
    }

    public int getErp_destinacao_recurso_id() {
        return erp_destinacao_recurso_id;
    }

    public void setErp_destinacao_recurso_id(int erp_destinacao_recurso_id) {
        this.erp_destinacao_recurso_id = erp_destinacao_recurso_id;
    }

    public int getErp_cotacao_id() {
        return erp_cotacao_id;
    }

    public void setErp_cotacao_id(int erp_cotacao_id) {
        this.erp_cotacao_id = erp_cotacao_id;
    }

    public double getValor_total() {
        return valor_total;
    }

    public void setValor_total(double valor_total) {
        this.valor_total = valor_total;
    }

    public Date getData_compra() {
        return data_compra;
    }

    public void setData_compra(Date data_compra) {
        this.data_compra = data_compra;
    }

    public int getErp_status_compra_id() {
        return erp_status_compra_id;
    }

    public void setErp_status_compra_id(int erp_status_compra_id) {
        this.erp_status_compra_id = erp_status_compra_id;
    }

    public char getActive() {
        return active;
    }

    public void setActive(char active) {
        this.active = active;
    }

    public Date getData_lancamento() {
        return data_lancamento;
    }

    public void setData_lancamento(Date data_lancamento) {
        this.data_lancamento = data_lancamento;
    }
}
