describe('Validar telas', () => {
  it('Validação de valores e validar presença de elementos', () => {
    //Test in url: [https://app.conciliadora.com.br]
    cy.logarSite('https://app.conciliadora.com.br');
    cy.validarTela();
  });

  // 1 > Dashboard 
  it('validarDashboard', () => {
    // 1.1 > Dashboard Gerencial
    
    cy.logarSite('https://app.conciliadora.com.br');
    cy.entrarDashboard();
    cy.entrarDashboardGerencial();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarDashboard();
    cy.validarUploadsDashboardGerencial();

  });

  // 2 > Vendas
  it('validarVendas', () => {
    // 2.1 > Conferencia de vendas
    cy.logarSite('https://app.conciliadora.com.br');
    cy.entrarVendas();
    cy.entrarConferenciadeVendas();
    cy.selecionarRefoCv('Empresa Modelo');
    cy.selecionarCalendarioCv();
    cy.validarValorBruto();

    // 2.2 > Vendas Sistemas
    
    cy.entrarVendas();
    cy.entrarVendasSistemas();
   // cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarVendasSistemas();
    cy.validarUploadsVendasSistemas();

    // 2.3 > Vendas Operadoras
    cy.entrarVendas();
    cy.entrarVendasOperadoras();
  //  cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarVendasOperadoras();
    cy.validaUploadsVendasOperadoras();

    // 2.4 > Auditoria de Vendas
    cy.entrarVendas();
    cy.entrarAuditoriadeVendas();
  //  cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.get('#btnApply > span').click();
    cy.validarAuditoriadeVendas();
    cy.validarUploadsAuditoriadeVendas();
  });

  // 3 > Pagamentos
  it('validarPagamentos', () => {
    // 3.1 > Pagamentos confirmados
    cy.logarSite('https://app.conciliadora.com.br');
    cy.entrarPagamentos();
    cy.entrarPagamentosConfirmados();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarPagamentosConfirmados();

    // 3.2 > Previsao de recebimentos
    cy.entrarPagamentos();
    cy.entrarPrevisaodeRecebimentos();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarPrevisaodeRecebimentos();
    cy.validarUploadsPrevisaodeRecebimentos();

    // 3.3 > Previsao de recebimentos Sintetico
    cy.entrarPagamentos();
    cy.entrarPrevisaodeRecebimentosSintetico();
    //cy.selecionarRefo('Empresa Modelo');
    //cy.selecionarCalendario();
    cy.validarPrevisaodeRecebimentosSintetico();
    cy.validarUploadsPrevisaodeRecebimentosSintetico();

    // 3.4 > Pagamentos por conta bancaria 
    cy.entrarPagamentos();
    cy.entrarPagamentosporContaBancaria();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarUploadsPagamentosporContaBancaria();

    // 3.5 > Relatorio de baixa
    cy.entrarPagamentos();
    cy.entrarRelatoriodeBaixa();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
  });

  // 4 > Taxa
  it('validarTaxa', () => {
    // 4.1 > Relatorio de taxas
    cy.logarSite('https://app.conciliadora.com.br');
    cy.entrarTaxa();
    cy.entrarRelatoriodeTaxas();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarUploadsConciliacaodeTaxas();
  });

  // 5 > Banco
  it('validarBanco', () => {
    // 5.1 > Conciliacao Bancaria
    cy.logarSite('https://app.conciliadora.com.br');
    cy.entrarBanco();
    cy.entrarConciliacaoBancaria();
    cy.selecionarRefoConciliacaoBancaria('Posto Modelo');
    cy.selecionarCalendario();
    cy.validarConferenciaBancaria();
  });
});
