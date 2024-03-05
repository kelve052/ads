class SystemUnit {
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

    public String getAllFields() {
        return "Id: " + id + "\n" +
               "Code: " + code + "\n" +
               "Name: " + name + "\n" +
               "Connection Name: " + connectionName + "\n" +
               "Address Zone: " + addressZone + "\n" +
               "Address Street: " + addressStreet + "\n" +
               "Address Number: " + addressNumber + "\n" +
               "Address District: " + addressDistrict + "\n" +
               "IBGE Municipio Id: " + ibgeMunicipioId + "\n" +
               "Telephone: " + telephone + "\n" +
               "Email: " + email + "\n" +
               "Active: " + active + "\n" +
               "Custom Code: " + customCode;
    }

    public void setAllFields(int id, int code, String name, String connectionName, String addressZone, String addressStreet, String addressNumber, String addressDistrict, int ibgeMunicipioId, String telephone, String email, char active, String customCode) {
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
  }

