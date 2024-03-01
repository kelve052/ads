class Pilha {
    private String[] array;
    private int topo;

    public Pilha(int tamanho) {
        array = new String[tamanho];
        topo = -1;
    }

    public void push(String elemento) {
        if (topo == array.length - 1) {
            System.out.println("Pilha cheia");
        } else {
            topo++;
            array[topo] = elemento;
        }
    }

    public String pop() {
        if (topo == -1) {
            System.out.println("pilha esta vasie");
            return null;
        } else {
            String elemento = array[topo];
            topo--;
            return elemento;
        }
    }

    public boolean esvasiar() {
        return topo == -1;
    }
}
