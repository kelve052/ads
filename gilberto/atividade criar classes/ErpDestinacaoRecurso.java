import java.sql.Timestamp;

public class ErpDestinacaoRecurso {
    private int id;
    private String name;
    private String description;
    private char active;
    private Timestamp dataLancamento;

    public ErpDestinacaoRecurso(int id, String name, String description, char active, Timestamp dataLancamento) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.active = active;
        this.dataLancamento = dataLancamento;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public char getActive() {
        return active;
    }

    public void setActive(char active) {
        this.active = active;
    }

    public Timestamp getDataLancamento() {
        return dataLancamento;
    }

    public void setDataLancamento(Timestamp dataLancamento) {
        this.dataLancamento = dataLancamento;
    }
}
