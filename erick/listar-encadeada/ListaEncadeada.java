public class ListaEncadeada {
     public Elemento  inicio;
     public Elemento fim;
     public int tamanho;

     public ListaEncadeada() {
     this.inicio = null;
     this.fim = null;
     this.tamanho = 0;
     }

     public Integer getFirst() {
          if(tamanho == 0){
               return null;
          }else{
               return inicio.valor;
          }
     }

     public void addFirst(Elemento elemento){
         if (tamanho == 0) {
           Elemento novo  = new Elemento(elemento.valor, null, null);
           inicio = novo;
           fim = novo;
         }else if(tamanho == 1){
          Elemento novo = new Elemento(elemento.valor, null, inicio);
          fim = inicio;
          inicio = novo;
         }else{
          Elemento novo = new Elemento(elemento.valor, null, inicio);
          inicio = novo;
          }
     tamanho++;

     }

     public Integer getLast(){
          if (tamanho == 0) {
               return null;
          }else{
               return fim.valor;
          }
     }
     public int size(){
          return tamanho;
     }

     public void addLast(Elemento elemento){
          if (tamanho == 0) {
            Elemento novo  = new Elemento(elemento.valor, null, null);
            inicio = novo;
            fim = novo;
            tamanho++;
          }else if(tamanho == 1){
           Elemento novo = new Elemento(elemento.valor, inicio, null);
           fim = novo;
           tamanho++;
          }else{
           Elemento novo = new Elemento(elemento.valor, inicio, null);
           fim = novo;
           inicio.proximo = novo;
           tamanho++;
          }
 
      }

     //  public String toString(){
     //      if(tamanho == 0){
     //           return "Lista esta vazia!";
     //      }else{
     //           for (int c = 0; c < tamanho; c++){
     //                return "c = " + c;
     //           }
     //      }
     //  }

}