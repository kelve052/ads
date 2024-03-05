class IbgeLogradouros {
    private int id;
    private int numCep;
    private int ibgeBairroId;
    private String descLogradouro;
    private String descTipo;
  
    public IbgeLogradouros(int id, int numCep, int ibgeBairroId, String descLogradouro, String descTipo) {
        this.id = id;
        this.numCep = numCep;
        this.ibgeBairroId = ibgeBairroId;
        this.descLogradouro = descLogradouro;
        this.descTipo = descTipo;
    }
  }