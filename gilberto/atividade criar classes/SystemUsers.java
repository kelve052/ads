public class SystemUsers {
    private int id;
    private String name;
    private String email;
    private String site;
    private String login;
    private String password;
    private int systemUnitId;
    private int frontpageId;
    private String photoPath;
    private char active;
    private Character acceptedTermPolicy;
    private String acceptedTermPolicyAt;
    private String acceptedTermPolicyData;
    private String phone;
    private String address;
    private String about;
    private String functionName;
    private String customCode;
    private String otpSecret;

    public SystemUsers(int id, String name, String email, String site, String login, String password, int systemUnitId,
            int frontpageId, String photoPath, char active, Character acceptedTermPolicy, String acceptedTermPolicyAt,
            String acceptedTermPolicyData, String phone, String address, String about, String functionName,
            String customCode, String otpSecret) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.site = site;
        this.login = login;
        this.password = password;
        this.systemUnitId = systemUnitId;
        this.frontpageId = frontpageId;
        ;
        this.photoPath = photoPath;
        this.active = active;
        this.acceptedTermPolicy = acceptedTermPolicy;
        this.acceptedTermPolicyAt = acceptedTermPolicyAt;
        this.acceptedTermPolicyData = acceptedTermPolicyData;
        this.phone = phone;
        this.address = address;
        this.about = about;
        this.functionName = functionName;
        this.customCode = customCode;
        this.otpSecret = otpSecret;
    }
}
