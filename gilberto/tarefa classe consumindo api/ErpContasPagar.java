import java.util.Date;

public class ErpContasPagar {
    private int id;
    private Date dataEmissao;
    private Date dataVencimento;
    private Date dataPgto;
    private double valor;
    private String statusPagamento;
    private String chaveNfe;
    private int responsavelId; // class
    private int erpLctoHistoricoId; // class
    private int erpDestinacaoRecursoId; // class
    private int erpFormaPagamentoId; // class
    private int contaDebito;
    private int erpPessoaFornecedorId; // class
    private String observacao;
    private char active;
    private Date datetime;
    private char transferidoTesouraria;
  
    public ErpContasPagar(int id, Date dataEmissao, Date dataVencimento, Date dataPgto, double valor,
        String statusPagamento, String chaveNfe, int responsavelId, int erpLctoHistoricoId, int erpDestinacaoRecursoId,
        int erpFormaPagamentoId, int contaDebito, int erpPessoaFornecedorId, String observacao, char active,
        Date datetime, char transferidoTesouraria) {
        this.id = id;
        this.dataEmissao = dataEmissao;
        this.dataVencimento = dataVencimento;
        this.dataPgto = dataPgto;
        this.valor = valor;
        this.statusPagamento = statusPagamento;
        this.chaveNfe = chaveNfe;
        this.responsavelId = responsavelId;
        this.erpLctoHistoricoId = erpLctoHistoricoId;
        this.erpDestinacaoRecursoId = erpDestinacaoRecursoId;
        this.erpFormaPagamentoId = erpFormaPagamentoId;
        this.contaDebito = contaDebito;
        this.erpPessoaFornecedorId = erpPessoaFornecedorId;
        this.observacao = observacao;
        this.active = active;
        this.datetime = datetime;
        this.transferidoTesouraria = transferidoTesouraria;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDataEmissao() {
        return dataEmissao;
    }

    public void setDataEmissao(Date dataEmissao) {
        this.dataEmissao = dataEmissao;
    }

    public Date getDataVencimento() {
        return dataVencimento;
    }

    public void setDataVencimento(Date dataVencimento) {
        this.dataVencimento = dataVencimento;
    }

    public Date getDataPgto() {
        return dataPgto;
    }

    public void setDataPgto(Date dataPgto) {
        this.dataPgto = dataPgto;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public String getStatusPagamento() {
        return statusPagamento;
    }

    public void setStatusPagamento(String statusPagamento) {
        this.statusPagamento = statusPagamento;
    }

    public String getChaveNfe() {
        return chaveNfe;
    }

    public void setChaveNfe(String chaveNfe) {
        this.chaveNfe = chaveNfe;
    }

    public int getResponsavelId() {
        return responsavelId;
    }

    public void setResponsavelId(int responsavelId) {
        this.responsavelId = responsavelId;
    }

    public int getErpLctoHistoricoId() {
        return erpLctoHistoricoId;
    }

    public void setErpLctoHistoricoId(int erpLctoHistoricoId) {
        this.erpLctoHistoricoId = erpLctoHistoricoId;
    }

    public int getErpDestinacaoRecursoId() {
        return erpDestinacaoRecursoId;
    }

    public void setErpDestinacaoRecursoId(int erpDestinacaoRecursoId) {
        this.erpDestinacaoRecursoId = erpDestinacaoRecursoId;
    }

    public int getErpFormaPagamentoId() {
        return erpFormaPagamentoId;
    }

    public void setErpFormaPagamentoId(int erpFormaPagamentoId) {
        this.erpFormaPagamentoId = erpFormaPagamentoId;
    }

    public int getContaDebito() {
        return contaDebito;
    }

    public void setContaDebito(int contaDebito) {
        this.contaDebito = contaDebito;
    }

    public int getErpPessoaFornecedorId() {
        return erpPessoaFornecedorId;
    }

    public void setErpPessoaFornecedorId(int erpPessoaFornecedorId) {
        this.erpPessoaFornecedorId = erpPessoaFornecedorId;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }

    public char getActive() {
        return active;
    }

    public void setActive(char active) {
        this.active = active;
    }

    public Date getDatetime() {
        return datetime;
    }

    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }

    public char getTransferidoTesouraria() {
        return transferidoTesouraria;
    }

    public void setTransferidoTesouraria(char transferidoTesouraria) {
        this.transferidoTesouraria = transferidoTesouraria;
    }
}
