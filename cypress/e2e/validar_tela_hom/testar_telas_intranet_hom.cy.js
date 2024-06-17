describe('Validar telas em [https://intranet-hom.conciliadora.com.br/].', () => {

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

  // 1 > Dashboard 
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
    cy.entrarDashboard();
    cy.entrarDashboardGerencial();
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
    cy.selecionarRefo('33292')
    cy.selecionarCalendario();
    cy.validarVendasSistemas();
    cy.validarUploadsVendasSistemas();
  });

  it('Validar tela de Vendas Operadoras', () => {
    cy.visit('/Sales/Sales'); 
    cy.entrarVendas();
    cy.entrarVendasOperadoras();
    cy.selecionarRefo('33292');
    cy.selecionarCalendario();
    cy.validarVendasOperadoras();
    cy.validaUploadsVendasOperadoras();
  });

  it('Validar tela de Auditoria de Vendas', () => {
    cy.visit('/Conciliation/SalesAudit'); 
    cy.entrarVendas();
    cy.entrarAuditoriadeVendas();
    cy.selecionarRefo('33292');
    cy.selecionarCalendario();
    cy.validarAuditoriadeVendas();
    cy.validarUploadsAuditoriadeVendas();
  });

  // 3 > Pagamentos
  it('Validar tela de Pagamentos Confirmados', () => {
    cy.visit('Payments/Confirmed'); 
    cy.entrarPagamentos();
    cy.entrarPagamentosConfirmados();
    cy.selecionarRefo('33292');
    cy.selecionarCalendario();
    cy.validarPagamentosConfirmados();
  });

  it('Validar tela de Previsão de Recebimentos', () => {
    cy.visit('/Payments/ReceiptForecast'); 
    cy.entrarPagamentos();
    cy.entrarPrevisaodeRecebimentosHom();
    cy.selecionarRefo('33292');
    cy.selecionarCalendario();
    cy.validarPrevisaodeRecebimentos();
    cy.validarUploadsPrevisaodeRecebimentos();
  });

  it('Validar tela de Previsão de Recebimentos Sintético', () => {
    cy.visit('/Payments/SyntheticReceiptForecast')
    cy.entrarPagamentos();
    cy.entrarPrevisaodeRecebimentosSinteticoHomologação();
    cy.selecionarRefo('33292');
    cy.selecionarCalendario();
    cy.validarPrevisaodeRecebimentosSintetico();
    cy.validarUploadsPrevisaodeRecebimentosSintetico();
  });

  it('Validar tela de Pagamentos por conta Bancária', () => {
    cy.visit('/Payments/BankAccount')
    cy.entrarPagamentos();
    cy.entrarPagamentosporContaBancariaHomologação();
    cy.selecionarRefo('33292');
    cy.selecionarCalendario();
    cy.validarUploadsPagamentosporContaBancaria();
  });

  it('Validar tela Relatório de Baixa', () => {
    cy.visit('/Payments/DischargeReport')
    cy.entrarPagamentos();
    cy.entrarRelatoriodeBaixaHomologação();
    cy.selecionarRefo('33292');
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
    cy.selecionarRefo('33292');
    cy.selecionarCalendario();
    cy.validarFiltrosRelatoriodeTaxas();
    cy.validarUploadsConciliacaodeTaxas();
  });

  // 5 > Banco  
  it('Validar tela Conciliação Bancária', () => {
    cy.visit('/BankConciliation/NewBank')
    cy.entrarBancoHomologação();
    cy.entrarConciliacaoBancariaHomologação();
    cy.selecionarRefoConciliacaoBancaria('REDEODONT');
    cy.selecionarCalendario();
    cy.validarUploadsConciliacaobancaria();
    //cy.validarConferenciaBancaria();
  });
  it('Deslogar', () => {
    cy.visit('/BankConciliation/NewBank')
    cy.deslogar();
    })
});
