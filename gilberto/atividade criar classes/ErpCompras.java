import java.util.*;
import java.time.LocalDateTime;

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
}
