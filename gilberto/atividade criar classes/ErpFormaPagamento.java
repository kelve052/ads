import java.util.*;
import java.sql.Time;
import java.time.LocalDateTime;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

class ErpFormaPagamento {
    private int id;
    private String name;
    private String description;
    private char active;
    private Timestamp dataLancamento;

    public ErpFormaPagamento(int id, String name, String description, char active, Timestamp dataLancamento) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.active = active;
        this.dataLancamento = dataLancamento;
    }
}