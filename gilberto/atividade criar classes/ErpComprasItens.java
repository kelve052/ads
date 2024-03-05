class ErpComprasItens {
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

    public String getErpComprasItens() {
      return "Id: " + id + "\n" +
             "Valor: " + valor + "\n" +
             "ID do Produto: " + erpProdutosId + "\n" +
             "Quantidade: " + qtd + "\n" +
             "ID da Compra: " + (erpComprasId != null ? erpComprasId : "null") + "\n" +
             "Data de Lançamento: " + dataLancamento;
  }
  public void setErpComprasItens(int id, double valor, int erpProdutosId, int qtd, ErpCompras erpComprasId, int dataLancamento) {
      this.id = id;
      this.valor = valor;
      this.erpProdutosId = erpProdutosId;
      this.qtd = qtd;
      this.erpComprasId = erpComprasId;
      this.dataLancamento = dataLancamento;
  }
  }
  