

public class Main {
    public static void main(String[] args) {
        int contador = 1;
        Elemento elemento = new Elemento(1, null, null);
        ListaEncadeada lista = new ListaEncadeada(elemento, null, contador);

        System.out.println(lista);
    }
}
