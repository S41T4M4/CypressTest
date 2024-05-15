describe('Validar telas em [https://app.conciliadora.com.br].', () => {
  // 1 > Dashboard 
  it('Validar tela Dashboard', () => {
    // 1.1 > Dashboard Gerencial
    cy.logarSite('https://app.conciliadora.com.br');
    cy.entrarDashboard();
    cy.entrarDashboardGerencial();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarDashboard();
    cy.validarUploadsDashboardGerencial();
    cy.deslogar();

  });

  // 2 > Vendas
  it('Validar tela de Vendas', () => {
    // 2.1 > Conferencia de vendas
    cy.logarSite('https://app.conciliadora.com.br');
    cy.entrarVendas();
    cy.entrarConferenciadeVendas();
    cy.selecionarRefoCv('Empresa Modelo');
    cy.selecionarCalendarioCv();
    cy.validarValorBrutoCv();
    cy.validarcardValeCard();

    // 2.2 > Vendas Sistemas
    cy.entrarVendas();
    cy.entrarVendasSistemas();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarVendasSistemas();
    cy.validarUploadsVendasSistemas();

    // 2.3 > Vendas Operadoras
    cy.entrarVendas();
    cy.entrarVendasOperadoras();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarVendasOperadoras();
    cy.validaUploadsVendasOperadoras();

    // 2.4 > Auditoria de Vendas
    cy.entrarVendas();
    cy.entrarAuditoriadeVendas();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarAuditoriadeVendas();
    cy.validarUploadsAuditoriadeVendas();
    cy.deslogar();
  });

  // 3 > Pagamentos
  it('Validar tela de Pagamentos', () => {
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
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
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
    cy.deslogar();
  });
  // 4 > Taxa
  it('Validar tela Taxa', () => {
    // 4.1 > Relatorio de taxas
    cy.logarSite('https://app.conciliadora.com.br');
    cy.entrarTaxa();
    cy.entrarRelatoriodeTaxas();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarUploadsConciliacaodeTaxas();
    cy.deslogar();

  });

  // 5 > Banco  
  it('Validar tela Banco', () => {
    // 5.1 > Conciliacao Bancaria
    cy.logarSite('https://app.conciliadora.com.br');
    cy.entrarBanco();
    cy.entrarConciliacaoBancaria();
    cy.selecionarRefoConciliacaoBancaria('Posto Modelo');
    cy.selecionarCalendario();
    cy.validarUploadsConciliacaobancaria();
    cy.validarConferenciaBancaria();
    cy.deslogar();

  });
});
