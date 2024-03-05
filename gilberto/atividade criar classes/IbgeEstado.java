class IbgeEstado {
    private int id;
    private int codigoUf;
    private String nome;
    private String uf;
    private int ibgeRegiaoId;
  
    public IbgeEstado(int id, int codigoUf, String nome, String uf, int ibgeRegiaoId) {
        this.id = id;
        this.codigoUf = codigoUf;
        this.nome = nome;
        this.uf = uf;
        this.ibgeRegiaoId = ibgeRegiaoId;
    }
  }