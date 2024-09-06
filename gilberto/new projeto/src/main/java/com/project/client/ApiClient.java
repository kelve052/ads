package com.project.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class ApiClient {

    @Autowired
    private RestTemplate restTemplate;

    private final String baseUrl = "http://localhost:3051/formapagamento";

    public String listarFormasPagamento() {
        return restTemplate.getForObject(baseUrl, String.class);
    }

    public String listarFormaPagamentoPorId(Long id) {
        return restTemplate.getForObject(baseUrl + "/" + id, String.class);
    }

    public String inserirFormaPagamento(Object formaPagamento) {
        return restTemplate.postForObject(baseUrl, formaPagamento, String.class);
    }

    public void atualizarFormaPagamento(Long id, Object formaPagamento) {
        restTemplate.patchForObject(baseUrl + "/" + id, formaPagamento, String.class);
    }

    public void deletarFormaPagamento(Long id) {
        restTemplate.delete(baseUrl + "/" + id);
    }
}
