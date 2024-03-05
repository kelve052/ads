import java.util.*;
import java.sql.Time;
import java.time.LocalDateTime;
import java.math.BigDecimal;
import java.sql.Timestamp;
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

  public String getErpCompras() {
    return "Id: " + id + "\n" +
        "Número de Requisição: " + numero_requisicao + "\n" +
        "Membro Comprador: " + membro_comprador_system_users_id + "\n" +
        "ID da Forma de Pagamento: " + erp_forma_pagamento_id + "\n" +
        "ID da Destinação de Recurso: " + erp_destinacao_recurso_id + "\n" +
        "ID da Cotação: " + erp_cotacao_id + "\n" +
        "Valor Total: " + valor_total + "\n" +
        "Data da Compra: " + data_compra.toString() + "\n" +
        "ID do Status da Compra: " + erp_status_compra_id + "\n" +
        "Ativo: " + active + "\n" +
        "Data de Lançamento: " + data_lancamento.toString();
  }

  public void setErpCompras(int id, String numero_requisicao, SystemUsers membro_comprador_system_users_id,
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