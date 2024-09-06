package com.project;

import com.project.client.ApiClient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(Application.class, args);
        ApiClient apiClient = context.getBean(ApiClient.class);

        // Testar listar todas as formas de pagamento
        System.out.println("Listar todas as formas de pagamento:");
        String listarFormas = apiClient.listarFormasPagamento();
        System.out.println(listarFormas);

        // Testar listar uma forma de pagamento por ID
        System.out.println("Listar forma de pagamento por ID:");
        String formaPorId = apiClient.listarFormaPagamentoPorId(1L);
        System.out.println(formaPorId);

        // Testar inserir uma nova forma de pagamento
        System.out.println("Inserir uma nova forma de pagamento:");
        String novaForma = "{\"descricao\": \"Pix\"}";
        String respostaInsercao = apiClient.inserirFormaPagamento(novaForma);
        System.out.println(respostaInsercao);

        // Testar atualizar uma forma de pagamento
        System.out.println("Atualizar uma forma de pagamento:");
        String atualizarForma = "{\"descricao\": \"Cartão de Débito\"}";
        apiClient.atualizarFormaPagamento(1L, atualizarForma);
        System.out.println("Forma de pagamento atualizada com sucesso!");

        // Testar deletar uma forma de pagamento
        System.out.println("Deletar uma forma de pagamento:");
        apiClient.deletarFormaPagamento(1L);
        System.out.println("Forma de pagamento deletada com sucesso!");
    }

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
