public class Main {
    public static void main(String[] args) {
        //execicio 1
       int idade = 5;
       System.out.println("exercicio 1: " + idade);

       //exercicio 2
        double valor = 5.4;
        System.out.println("exercio 2: " + valor * 2);

        //exercicio 3
        boolean verdadeiroOuFalso = false;
        if(verdadeiroOuFalso == true){
            System.out.println(("exercicio3: verdadeiro"));
        }else{
            System.out.println(("exercicio 3: false"));
        }

        //exercicio 4
        String nome = "Kelve";
        String sobrenome = "Oliveira";
        System.out.println("exercio 4: " + nome + " " + sobrenome);

        //exercicio 5
        int valor1 = 5;
        int valor2 = 10;
        int soma = valor1 + valor2;
        System.out.println("exercicio 5: valor1 = " + valor1 + " valor2 = " + valor2 + " soma = " + soma);

        //exercicio 6
        double valord1 = 5.5;
        double valord2 = 1.6;
        double mediadouble = (valord1 + valord2)/2;
        System.out.println("exercicio 6: valor1 = " + valord1 + " valor2 = " + valord2 + " media = " + mediadouble);

        // Exercício 7
        char caractere = 'a';
        if (caractere == 'a' || caractere == 'e' || caractere == 'i' || caractere == 'o' || caractere == 'u') {
            System.out.println("exercício 7: O caractere é uma vogal.");
        } else {
            System.out.println("exercício 7: O caractere não é uma vogal.");
        }

        // Exercício 8
        String frase = "Esta é uma frase.";
        System.out.println("exercício 8: O comprimento da frase é " + frase.length() + " caracteres.");

        // Exercício 9
        int numero1 = 5;
        int numero2 = 10;
        boolean comparacao = numero1 == numero2;
        System.out.println("exercício 9: " + comparacao);

        // Exercício 10
        double base = 2;
        double expoente = 3;
        double potenciacao = Math.pow(base, expoente);
        System.out.println("exercício 10: " + potenciacao);

        // Exercício 11
        String palavra = "exemplo";
        System.out.println("exercício 11: " + palavra.toUpperCase());

        // Exercício 12
        int numero = 10;
        System.out.println("exercício 12: " + Integer.toBinaryString(numero));

        // Exercício 13
        String data = "25/02/2024";
        String[] partesData = data.split("/");
        System.out.println("exercício 13: " + partesData[2]);

        // Exercício 14
        double numeroDouble = 5.6;
        System.out.println("exercício 14: " + Math.round(numeroDouble));

        // Exercício 15
        char letra = 'A';
        if (Character.isUpperCase(letra)) {
            System.out.println("exercício 15: O caractere é uma letra maiúscula.");
        } else {
            System.out.println("exercício 15: O caractere é uma letra minúscula.");
        }

        // Exercício 16
        String frase2 = "Esta é uma frase.";
        System.out.println("exercício 16: " + frase2.replace('a', 'x'));

        // Exercício 17
        int idade2 = 20;
        if (idade2 >= 18) {
            System.out.println("exercício 17: Maior de idade.");
        } else {
            System.out.println("exercício 17: Menor de idade.");
        }

        // Exercício 18
        double valorDouble = 5.6;
        System.out.println("exercício 18: " + (int) valorDouble);

        // Exercício 19
        String numeroTelefone = "(123) 456-7890";
        String apenasDigitos = numeroTelefone.replaceAll("[^0-9]", "");
        System.out.println("exercício 19: " + apenasDigitos);

        // Exercício 20
        double valorA = 10.5;
        double valorB = 7.3;
        double diferenca = Math.abs(valorA - valorB);
        System.out.println("exercício 20: " + diferenca);

        // Exercício 21
        String palavra2 = "arara";
        String palavraInvertida = new StringBuilder(palavra2).reverse().toString();
        if (palavra2.equalsIgnoreCase(palavraInvertida)) {
            System.out.println("exercício 21: É um palíndromo.");
        } else {
            System.out.println("exercício 21: Não é um palíndromo.");
        }

        // Exercício 22
        int numero3 = 7;
        if (numero3 % 2 == 0) {
            System.out.println("exercício 22: Par.");
        } else {
            System.out.println("exercício 22: Ímpar.");
        }

        // Exercício 23
        String frase3 = "Esta é uma frase.";
        String[] palavras = frase3.split(" ");
        System.out.println("exercício 23:");
        for (String palavra3 : palavras) {
            System.out.println(palavra3);
        }

        // Exercício 24
        double valorRaiz = 9.0;
        System.out.println("exercício 24: " + Math.sqrt(valorRaiz));

        // Exercício 25
        String texto = "homem";
        System.out.println("exercício 25: " + new StringBuilder(texto).reverse().toString());

        // Exercício 26
        int valorC = 5;
        int valorD = 3;
        System.out.println("exercício 26: " + (valorC * valorD));

        // Exercício 27
        String data2 = "25/02/2024";
        String[] partesData2 = data2.split("/");
        System.out.println("exercício 27: " + partesData2[0]);

        // Exercício 28
        double valorDecimal = -5.6;
        System.out.println("exercício 28: " + Math.abs(valorDecimal));

        // Exercício 29
        String palavra4 = "exemplo";
        System.out.println("exercício 29: " + palavra4.charAt(0));

        // Exercício 30
        int numero30 = 5;
        int fatorial = 1;
        for (int i = 1; i <= numero30; i++) {
            fatorial *= i;
        }
        System.out.println("exercício 30: O fatorial de " + numero30 + " é " + fatorial);

    }
}
