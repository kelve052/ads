import java.sql.Timestamp;

public class ErpLctoTesourariaItens {
    private int id;
    private int erpLctoTesourariaId;
    private double valor;
    private int systemUnitId;
    private Timestamp datetime;

    public ErpLctoTesourariaItens(int id, int erpLctoTesourariaId, double valor, int systemUnitId, Timestamp datetime) {
        this.id = id;
        this.erpLctoTesourariaId = erpLctoTesourariaId;
        this.valor = valor;
        this.systemUnitId = systemUnitId;
        this.datetime = datetime;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getErpLctoTesourariaId() {
        return erpLctoTesourariaId;
    }

    public void setErpLctoTesourariaId(int erpLctoTesourariaId) {
        this.erpLctoTesourariaId = erpLctoTesourariaId;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public int getSystemUnitId() {
        return systemUnitId;
    }

    public void setSystemUnitId(int systemUnitId) {
        this.systemUnitId = systemUnitId;
    }

    public Timestamp getDatetime() {
        return datetime;
    }

    public void setDatetime(Timestamp datetime) {
        this.datetime = datetime;
    }
}
