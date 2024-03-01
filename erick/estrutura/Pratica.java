public class Pratica {
    private int[] array;
    private int topo;

    public Pratica(int capacidade){
        array = new int[capacidade];
        topo = 0;
    }

    public int pop (int valor){
        int retorno = array[topo];
        topo--;

        return retorno;
    }

    public int push (int valor){
        int retorno = array[topo];
        topo++;
        
        return retorno;
    }
}