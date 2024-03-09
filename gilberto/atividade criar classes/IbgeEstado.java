public class IbgeEstado {
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCodigoUf() {
        return codigoUf;
    }

    public void setCodigoUf(int codigoUf) {
        this.codigoUf = codigoUf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public int getIbgeRegiaoId() {
        return ibgeRegiaoId;
    }

    public void setIbgeRegiaoId(int ibgeRegiaoId) {
        this.ibgeRegiaoId = ibgeRegiaoId;
    }
}
