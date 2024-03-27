class Pessoa {
    private String nome;
    private int idade;

    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Métodos getters e setters para nome
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    // Métodos getters e setters para idade
    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }
}




class Usuario extends Pessoa {
    private int id;
    private String corPreferida;

    public Usuario(String nome, int idade, String fornecedor) {
        super(nome, idade);
        this.id = id;
        this.corPreferida = corPreferida;
    } 

    public String grtCorPreferida() {
        return fornecedor;
    }

    public void setCorPreferida(String corPreferida) {
        this.corPreferida = corPreferida;
    }
}
