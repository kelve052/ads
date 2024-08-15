

public class Main {
    public static void main(String[] args) {
        Elemento elemento1 = new Elemento(1, null, null);
        Elemento elemento2 = new Elemento(2, null, null);
        Elemento elemento3 = new Elemento(3, null, null);
        Elemento elemento4 = new Elemento(4, null, null);
        ListaEncadeada lista = new ListaEncadeada();
        
        // lista.addFirst(elemento4);
        // lista.addLast(elemento1);
        // lista.addFirst(elemento1);
        // lista.addFirst(elemento1);
        // lista.addFirst(elemento1);
        // lista.addFirst(elemento1);
        // lista.addFirst(elemento3);
        // lista.addFirst(elemento2);

        

        System.out.println("Inicio: " + lista.getFirst());
        System.out.println("Fim: " + lista.getLast());
        System.out.println("Tamanho: " + lista.size());
        System.out.println("Tamanho: " + lista.toString());
    }
}
