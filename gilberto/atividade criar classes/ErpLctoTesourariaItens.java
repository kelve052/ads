import java.util.*;
import java.sql.Time;
import java.time.LocalDateTime;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

class ErpLctoTesourariaItens {
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
}