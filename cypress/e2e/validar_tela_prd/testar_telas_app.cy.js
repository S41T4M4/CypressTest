describe('Validar telas em [https://app.conciliadora.com.br].', () => {

  beforeEach(() => {
    cy.log('Starting login process');
    cy.login().then(() => {
      cy.log('Login successful, proceeding to tests');
      
      // Verificando cookies antes de cada teste
      cy.getCookies().then(cookies => {
        cy.log('Cookies before test:', cookies);
      });
    });
  });

  it('Validar tela Dashboard Gerencial', () => {
    cy.log('Visiting ManagementDashboard page');
    cy.visit('/ManagementDashboard');
    cy.location('pathname', { timeout: 10000 }).should('eq', '/ManagementDashboard')
      .then(path => {
        cy.log(`Página visitada: ${path}`);
      });

    // Verificando cookies durante o teste
    cy.getCookies().then(cookies => {
      cy.log('Cookies during test:', cookies);
    });

    cy.wait(10000);
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarDashboard();
    cy.validarUploadsDashboardGerencial();

    // Verificando cookies após o teste
    cy.getCookies().then(cookies => {
      cy.log('Cookies after test:', cookies);
    });
  });

  // 2 > Vendas

  it('Validar tela de Conferência de Vendas', () => {
    cy.visit('/Conciliation/SalesConference')
    cy.entrarVendas();
    cy.entrarConferenciadeVendas();
    cy.selecionarRefoConferenciadeVendas('Empresa Modelo');
    cy.selecionarCalendarioConferenciadeVendas();
    cy.validarValorBrutoConferenciadeVendas();
    cy.validarcardValeCard();

  });

  it('Validar tela de Vendas Sistemas', () => {
    cy.visit('/Sales/System');
    cy.entrarVendas();
    cy.entrarVendasSistemas();
    cy.selecionarRefo('Empresa Modelo')
    cy.selecionarCalendario();
    cy.validarVendasSistemas();
    cy.validarUploadsVendasSistemas();
  });

  it('Validar tela de Vendas Operadoras', () => {
    cy.visit('/Sales/Sales'); 
    cy.entrarVendas();
    cy.entrarVendasOperadoras();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarVendasOperadoras();
    cy.validaUploadsVendasOperadoras();
  });

  it('Validar tela de Auditoria de Vendas', () => {
    cy.visit('/Conciliation/SalesAudit'); 
    cy.entrarVendas();
    cy.entrarAuditoriadeVendas();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarAuditoriadeVendas();
    cy.validarUploadsAuditoriadeVendas();
  });

  // 3 > Pagamentos
  it('Validar tela de Pagamentos Confirmados', () => {
    cy.visit('/Payments/Confirmed'); 
    cy.entrarPagamentos();
    cy.entrarPagamentosConfirmados();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarPagamentosConfirmados();
  });

  it('Validar tela de Previsão de Recebimentos', () => {
    cy.visit('/Payments/ReceiptForecast'); 

    cy.entrarPagamentos();
    cy.entrarPrevisaodeRecebimentos();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarPrevisaodeRecebimentos();
    cy.validarUploadsPrevisaodeRecebimentos();
  });

  it('Validar tela de Previsão de Recebimentos Sintético', () => {
    cy.visit('/Payments/SyntheticReceiptForecast')
    cy.entrarPagamentos();
    cy.entrarPrevisaodeRecebimentosSintetico();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarPrevisaodeRecebimentosSintetico();
    cy.validarUploadsPrevisaodeRecebimentosSintetico();
  });

  it('Validar tela de Pagamentos por conta Bancária', () => {
    cy.visit('/Payments/BankAccount')
    cy.entrarPagamentos();
    cy.entrarPagamentosporContaBancaria();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarPagamentosporContaBancaria();
    cy.validarUploadsPagamentosporContaBancaria();
  });

  it('Validar tela Relatório de Baixa', () => {
    cy.visit('/Payments/DischargeReport')
    cy.entrarPagamentos();
    cy.entrarRelatoriodeBaixa();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarRelatoriodeBaixa();
  });

  // 4 > Taxa
  it('Validar tela Cadastro de Taxas', () => {
    cy.visit('/Payments/DischargeReport')
    cy.entrarTaxa();
    cy.entrarCadastrodeTaxas();
    cy.validarUploadsCadastrodeTaxas();
  });

  it('Validar tela Relatório de Taxas', () => {
    cy.visit('/Conciliation/ConciliationOfFees')
    cy.entrarTaxa();
    cy.entrarRelatoriodeTaxas();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarFiltrosRelatoriodeTaxas();
    cy.validarUploadsConciliacaodeTaxas();
  });

  // 5 > Banco  
  it('Validar tela Conciliação Bancária', () => {
    cy.visit('/BankConciliation/NewBank')
    cy.entrarBanco();
    cy.entrarConciliacaoBancaria();
    cy.selecionarRefoConciliacaoBancaria('Posto Modelo');
    cy.selecionarCalendario();
    cy.validarUploadsConciliacaobancaria();
    cy.validarConferenciaBancaria();
  });
it('Deslogar', () => {
  cy.visit('/BankConciliation/NewBank')
  cy.deslogar();
  })
});
