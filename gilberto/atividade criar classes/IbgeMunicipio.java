class IbgeMunicipio {
    private int id;
    private int codigo;
    private String nome;
    private String cidadeCorrespondente;
    private int ibgeEstadoId;
    private int cep;
  
    public IbgeMunicipio(int id, int codigo, String nome, String cidadeCorrespondente, int ibgeEstadoId, int cep) {
        this.id = id;
        this.codigo = codigo;
        this.nome = nome;
        this.cidadeCorrespondente = cidadeCorrespondente;
        this.ibgeEstadoId = ibgeEstadoId;
        this.cep = cep;
    }
  }