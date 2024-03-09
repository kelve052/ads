public class ErpLctoHistorico {
    private int id;
    private String descricao;
    private char active;

    public ErpLctoHistorico(int id, String descricao, char active) {
        this.id = id;
        this.descricao = descricao;
        this.active = active;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public char getActive() {
        return active;
    }

    public void setActive(char active) {
        this.active = active;
    }
}
