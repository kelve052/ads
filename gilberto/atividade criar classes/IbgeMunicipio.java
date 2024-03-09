public class IbgeMunicipio {
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCidadeCorrespondente() {
        return cidadeCorrespondente;
    }

    public void setCidadeCorrespondente(String cidadeCorrespondente) {
        this.cidadeCorrespondente = cidadeCorrespondente;
    }

    public int getIbgeEstadoId() {
        return ibgeEstadoId;
    }

    public void setIbgeEstadoId(int ibgeEstadoId) {
        this.ibgeEstadoId = ibgeEstadoId;
    }

    public int getCep() {
        return cep;
    }

    public void setCep(int cep) {
        this.cep = cep;
    }
}
