public class ErpComprasItens {
  private int id;
  private double valor;
  private int erpProdutosId; // class
  private int qtd;
  private ErpCompras erpComprasId;
  private int dataLancamento; // class

  public ErpComprasItens(int id, double valor, int erpProdutosId, int qtd, ErpCompras erpComprasId,
      int dataLancamento) {
      this.id = id;
      this.valor = valor;
      this.erpProdutosId = erpProdutosId;
      this.qtd = qtd;
      this.erpComprasId = erpComprasId;
      this.dataLancamento = dataLancamento;
  }

  public int getId() {
      return id;
  }

  public void setId(int id) {
      this.id = id;
  }

  public double getValor() {
      return valor;
  }

  public void setValor(double valor) {
      this.valor = valor;
  }

  public int getErpProdutosId() {
      return erpProdutosId;
  }

  public void setErpProdutosId(int erpProdutosId) {
      this.erpProdutosId = erpProdutosId;
  }

  public int getQtd() {
      return qtd;
  }

  public void setQtd(int qtd) {
      this.qtd = qtd;
  }

  public ErpCompras getErpComprasId() {
      return erpComprasId;
  }

  public void setErpComprasId(ErpCompras erpComprasId) {
      this.erpComprasId = erpComprasId;
  }

  public int getDataLancamento() {
      return dataLancamento;
  }

  public void setDataLancamento(int dataLancamento) {
      this.dataLancamento = dataLancamento;
  }
}
