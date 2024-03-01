public class Deivid {
    int id;
    String nome;
    String email;
    String senha;

    public Deivid(String nome, String email, String senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    
    public void escolhenome(String novoNome){
        this.nome = novoNome;
    }

    public String getNome() {
        return ("name: " + nome + "\nemail: " + email + "\nsenha: " + senha);
    }

    public static void main(String[] args) {
        Deivid usuario = new Deivid("Ana", "ana@example.com", "senha123");
        usuario.escolhenome("teste");
        System.out.println("Name: " + usuario.getNome());
    }
}
