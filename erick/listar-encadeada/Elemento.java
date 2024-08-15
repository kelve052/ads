public class Elemento {
    public int valor;
     public Elemento anterior;
     public Elemento proximo;

     public Elemento(int valor, Elemento anterior, Elemento proximo) {
     this.valor = valor;
     this.anterior = anterior;
     this.proximo = proximo;
     }
}
