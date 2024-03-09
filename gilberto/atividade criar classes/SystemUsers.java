import java.util.*;
import java.sql.Time;
import java.time.LocalDateTime;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

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

    // Construtor com argumentos
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

    // Métodos Get
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getSite() {
        return site;
    }

    public String getLogin() {
        return login;
    }

    public String getPassword() {
        return password;
    }

    public int getSystemUnitId() {
        return systemUnitId;
    }

    public int getFrontpageId() {
        return frontpageId;
    }

    public String getPhotoPath() {
        return photoPath;
    }

    public char getActive() {
        return active;
    }

    public Character getAcceptedTermPolicy() {
        return acceptedTermPolicy;
    }

    public String getAcceptedTermPolicyAt() {
        return acceptedTermPolicyAt;
    }

    public String getAcceptedTermPolicyData() {
        return acceptedTermPolicyData;
    }

    public String getPhone() {
        return phone;
    }

    public String getAddress() {
        return address;
    }

    public String getAbout() {
        return about;
    }

    public String getFunctionName() {
        return functionName;
    }

    public String getCustomCode() {
        return customCode;
    }

    public String getOtpSecret() {
        return otpSecret;
    }

    // Métodos Set
    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setSystemUnitId(int systemUnitId) {
        this.systemUnitId = systemUnitId;
    }

    public void setFrontpageId(int frontpageId) {
        this.frontpageId = frontpageId;
    }

    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }

    public void setActive(char active) {
        this.active = active;
    }

    public void setAcceptedTermPolicy(Character acceptedTermPolicy) {
        this.acceptedTermPolicy = acceptedTermPolicy;
    }

    public void setAcceptedTermPolicyAt(String acceptedTermPolicyAt) {
        this.acceptedTermPolicyAt = acceptedTermPolicyAt;
    }

    public void setAcceptedTermPolicyData(String acceptedTermPolicyData) {
        this.acceptedTermPolicyData = acceptedTermPolicyData;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public void setFunctionName(String functionName) {
        this.functionName = functionName;
    }

    public void setCustomCode(String customCode) {
        this.customCode = customCode;
    }

    public void setOtpSecret(String otpSecret) {
        this.otpSecret = otpSecret;
    }
}
