public class Filas {
    int tamanho;
    String[] fila;
    int tamanhoAtual;

    public Filas(int tamanho) {
        this.tamanho = tamanho;
        this.fila = new String[tamanho];
        this.tamanhoAtual = 0;

        for (int i = 0; i < tamanho; i++) {
            fila[i] = "";
        }
    }

    public void enqueue(String e) {
        if (tamanhoAtual < tamanho) {
            fila[tamanhoAtual] = e;
            tamanhoAtual++;
        } else {
            System.out.println("Fila cheia. Não é possível adicionar mais elementos.");
        }
    }
    
    public int size(){
        return tamanhoAtual;
    }
    public boolean isEmpty(){
        boolean response = true;
        for (String string : fila) {
            if(string != ""){
                response = false;
                break;
            }
        }
        return response;
    }
    public String dequeue(){
        if(isEmpty() == true){
            return "Imposivel retirar da fila pois fila esta vaisa";
        }else{
            for (int i = 0; i < tamanho; i++) {
                if(fila[i] != ""){
                    fila[i] = "";
                    break;
                }
            }
            tamanhoAtual--;
            for (int i = 0; i < tamanhoAtual - 1; i++) {
                fila[i] = fila[i + 1];
            }
            return "Um item voi terado da fila";
        }
    }
    public static void main (String[] args){
        Filas teste = new Filas(3);

        System.out.println("Inserindo 3 valores...");
        teste.enqueue("Ameixa");
        teste.enqueue("Batata");
        teste.enqueue("Cupuaçu");

        System.out.println("Tamanho:" + teste.size());
        System.out.println("Removeu --> " + teste.dequeue());
        System.out.println("Removeu --> " + teste.dequeue());
        System.out.println("Removeu --> " + teste.dequeue());
        System.out.println("Removeu --> " + teste.dequeue());
        System.out.println("Removeu --> " + teste.dequeue()); //testando o limite
        System.out.println("Removeu --> " + teste.dequeue());

        System.out.println("Fila Vazia? "+ teste.isEmpty());

    }
}