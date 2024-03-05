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

    // Método para definir valores
    public void setSystemUsers(int id, String name, String email, String site, String login, String password,
            int systemUnitId, int frontpageId, String photoPath, char active, Character acceptedTermPolicy,
            String acceptedTermPolicyAt, String acceptedTermPolicyData, String phone, String address, String about,
            String functionName, String customCode, String otpSecret) {
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

    // Método para retornar informações
    public String getSystemUsers() {
        return "Id: " + id + "\n" +
               "Name: " + name + "\n" +
               "Email: " + email + "\n" +
               "Site: " + site + "\n" +
               "Login: " + login + "\n" +
               "Password: " + password + "\n" +
               "SystemUnitId: " + systemUnitId + "\n" +
               "FrontpageId: " + frontpageId + "\n" +
               "PhotoPath: " + photoPath + "\n" +
               "Active: " + active + "\n" +
               "AcceptedTermPolicy: " + acceptedTermPolicy + "\n" +
               "AcceptedTermPolicyAt: " + acceptedTermPolicyAt + "\n" +
               "AcceptedTermPolicyData: " + acceptedTermPolicyData + "\n" +
               "Phone: " + phone + "\n" +
               "Address: " + address + "\n" +
               "About: " + about + "\n" +
               "FunctionName: " + functionName + "\n" +
               "CustomCode: " + customCode + "\n" +
               "OtpSecret: " + otpSecret;
    }

    // Método main

    public SystemUsers() {
        public static void main(String[] args) {
            SystemUsers teste = new SystemUsers();
            teste.setSystemUsers(1, "Nome", "email@example.com", "example.com", "login", "senha", 
                                 1, 1, "caminhoDaFoto", 'Y', 'T', "2024-03-04", "dadosDaPolitica", 
                                 "1234567890", "Endereço exemplo", "Sobre mim", "Função exemplo", 
                                 "Código personalizado", "segredoOTP");
        
            System.out.println(teste.getSystemUsers());
        }
    }
 
    
}
