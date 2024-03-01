import java.util.Scanner;

public class VerificarSequencia {

    public static boolean verificaSequencia(String sequencia) {
        Pilha pilha = new Pilha(sequencia.length());

        for (int i = 0; i < sequencia.length(); i++) {
            char caractere = sequencia.charAt(i);

            if (caractere == '(' || caractere == '[' || caractere == '{') {
                pilha.push(Character.toString(caractere));
            } else if (caractere == ')' || caractere == ']' || caractere == '}') {
                if (pilha.esvasiar()) {
                    return false;
                }

                String topoPilha = pilha.pop();

                if ((caractere == ')' && !topoPilha.equals("(")) ||
                    (caractere == ']' && !topoPilha.equals("[")) ||
                    (caractere == '}' && !topoPilha.equals("{"))) {
                    return false;
                }
            }
        }

        return pilha.esvasiar();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite: [] {} ()");
        String sequencia = scanner.nextLine();

        if (verificaSequencia(sequencia)) {
            System.out.println("deu certo a abertura");
        } else {
            System.out.println("deu errado a abertura e fechamento");
        }

        scanner.close();
    }
}