public class SystemUnit {
    private int id;
    private int code;
    private String name;
    private String connectionName;
    private String addressZone;
    private String addressStreet;
    private String addressNumber;
    private String addressDistrict;
    private int ibgeMunicipioId;
    private String telephone;
    private String email;
    private char active;
    private String customCode;

    public SystemUnit(int id, int code, String name, String connectionName, String addressZone, String addressStreet, String addressNumber, String addressDistrict, int ibgeMunicipioId, String telephone, String email, char active, String customCode) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.connectionName = connectionName;
        this.addressZone = addressZone;
        this.addressStreet = addressStreet;
        this.addressNumber = addressNumber;
        this.addressDistrict = addressDistrict;
        this.ibgeMunicipioId = ibgeMunicipioId;
        this.telephone = telephone;
        this.email = email;
        this.active = active;
        this.customCode = customCode;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getConnectionName() {
        return connectionName;
    }

    public void setConnectionName(String connectionName) {
        this.connectionName = connectionName;
    }

    public String getAddressZone() {
        return addressZone;
    }

    public void setAddressZone(String addressZone) {
        this.addressZone = addressZone;
    }

    public String getAddressStreet() {
        return addressStreet;
    }

    public void setAddressStreet(String addressStreet) {
        this.addressStreet = addressStreet;
    }

    public String getAddressNumber() {
        return addressNumber;
    }

    public void setAddressNumber(String addressNumber) {
        this.addressNumber = addressNumber;
    }

    public String getAddressDistrict() {
        return addressDistrict;
    }

    public void setAddressDistrict(String addressDistrict) {
        this.addressDistrict = addressDistrict;
    }

    public int getIbgeMunicipioId() {
        return ibgeMunicipioId;
    }

    public void setIbgeMunicipioId(int ibgeMunicipioId) {
        this.ibgeMunicipioId = ibgeMunicipioId;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public char getActive() {
        return active;
    }

    public void setActive(char active) {
        this.active = active;
    }

    public String getCustomCode() {
        return customCode;
    }

    public void setCustomCode(String customCode) {
        this.customCode = customCode;
    }
}
