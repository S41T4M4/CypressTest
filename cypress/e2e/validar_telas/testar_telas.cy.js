describe('Validar telas em [https://app.conciliadora.com.br].', () => {

  beforeEach(() => {
    cy.logarSite('https://app.conciliadora.com.br');
    cy.verificarElementosnaTela();
    cy.validarTela();
  });

  afterEach(() => {
    cy.deslogar();
    
  });

  // 1 > Dashboard 
  it('Validar tela Dashboard Gerencial', () => {
    cy.entrarDashboard();
    cy.entrarDashboardGerencial();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarDashboard();
    cy.validarUploadsDashboardGerencial();
  });

  // 2 > Vendas
  it('Validar tela de Conferência de Vendas', () => {
    cy.entrarVendas();
    cy.entrarConferenciadeVendas();
    cy.selecionarRefoConferenciadeVendas('Empresa Modelo');
    cy.selecionarCalendarioConferenciadeVendas();
    cy.validarValorBrutoConferenciadeVendas();
    cy.validarcardValeCard();
    cy.selecionarCalendarioConferenciadeVendas2();
  });

  it('Validar tela de Vendas Sistemas', () => {
    cy.entrarVendas();
    cy.entrarVendasSistemas();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarVendasSistemas();
    cy.validarUploadsVendasSistemas();
  });

  it('Validar tela de Vendas Operadoras', () => {
    cy.entrarVendas();
    cy.entrarVendasOperadoras();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarVendasOperadoras();
    cy.validaUploadsVendasOperadoras();
  });

  it('Validar tela de Auditoria de Vendas', () => {
    cy.entrarVendas();
    cy.entrarAuditoriadeVendas();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarAuditoriadeVendas();
    cy.validarUploadsAuditoriadeVendas();
  });

  // 3 > Pagamentos
  it('Validar tela de Pagamentos Confirmados', () => {
    cy.entrarPagamentos();
    cy.entrarPagamentosConfirmados();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarPagamentosConfirmados();
  });

  it('Validar tela de Previsão de Recebimentos', () => {
    cy.entrarPagamentos();
    cy.entrarPrevisaodeRecebimentos();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarPrevisaodeRecebimentos();
    cy.validarUploadsPrevisaodeRecebimentos();
  });

  it('Validar tela de Previsão de Recebimentos Sintético', () => {
    cy.entrarPagamentos();
    cy.entrarPrevisaodeRecebimentosSintetico();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarPrevisaodeRecebimentosSintetico();
    cy.validarUploadsPrevisaodeRecebimentosSintetico();
  });

  it('Validar tela de Pagamentos por conta Bancária', () => {
    cy.entrarPagamentos();
    cy.entrarPagamentosporContaBancaria();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarPagamentosporContaBancaria();
    cy.validarUploadsPagamentosporContaBancaria();
  });

  it('Validar tela Relatório de Baixa', () => {
    cy.entrarPagamentos();
    cy.entrarRelatoriodeBaixa();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
  });

  // 4 > Taxa
  it('Validar tela Cadastro de Taxas', () => {
    cy.entrarTaxa();
    cy.entrarCadastrodeTaxas();
    cy.validarUploadsCadastrodeTaxas();
  });

  it('Validar tela Relatório de Taxas', () => {
    cy.entrarTaxa();
    cy.entrarRelatoriodeTaxas();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarUploadsConciliacaodeTaxas();
  });

  // 5 > Banco  
  it('Validar tela Conciliação Bancária', () => {
    cy.entrarBanco();
    cy.entrarConciliacaoBancaria();
    cy.selecionarRefoConciliacaoBancaria('Posto Modelo');
    cy.selecionarCalendario();
    cy.validarUploadsConciliacaobancaria();
    cy.validarConferenciaBancaria();
  });

});
