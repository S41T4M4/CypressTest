describe('Validar telas em [https://intranet-hom.conciliadora.com.br].', () => {

  beforeEach(() => {
    cy.logar();
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
    cy.selecionarRefo('33292');
    cy.selecionarCalendario();
    cy.validarDashboard();
    cy.validarUploadsDashboardGerencial();
  });

  // 2 > Vendas

  it('Validar tela de Conferência de Vendas', () => {
    cy.entrarVendas();
    cy.entrarConferenciadeVendas();
    cy.selecionarRefoConferenciadeVendas('33292');
  });

  it('Validar tela de Vendas Sistemas', () => {
    cy.entrarVendas();
    cy.entrarVendasSistemas();
    cy.selecionarRefo('33292')
    cy.selecionarCalendario();
    cy.validarVendasSistemas();
    cy.validarUploadsVendasSistemas();
  });

  it('Validar tela de Vendas Operadoras', () => {
    cy.entrarVendas();
    cy.entrarVendasOperadoras();
    cy.selecionarRefo('33292');
    cy.selecionarCalendario();
    cy.validarVendasOperadoras();
    cy.validaUploadsVendasOperadoras();
  });

  it('Validar tela de Auditoria de Vendas', () => {
    cy.entrarVendas();
    cy.entrarAuditoriadeVendas();
    cy.selecionarRefo('33292');
    cy.selecionarCalendario();
    cy.validarAuditoriadeVendas();
    cy.validarUploadsAuditoriadeVendas();
  });

  // 3 > Pagamentos
  it('Validar tela de Pagamentos Confirmados', () => {
    cy.entrarPagamentos();
    cy.entrarPagamentosConfirmados();
    cy.selecionarRefo('33292');
    cy.selecionarCalendario();
    cy.validarPagamentosConfirmados();
  });

  it('Validar tela de Previsão de Recebimentos', () => {
    cy.entrarPagamentos();
    cy.entrarPrevisaodeRecebimentosHom();
    cy.selecionarRefo('33292');
    cy.selecionarCalendario();
    cy.validarPrevisaodeRecebimentos();
    cy.validarUploadsPrevisaodeRecebimentos();
  });

  it('Validar tela de Previsão de Recebimentos Sintético', () => {
    cy.entrarPagamentos();
    cy.entrarPrevisaodeRecebimentosSinteticoHomologação();
    cy.selecionarRefo('33292');
    cy.selecionarCalendario();
    cy.validarPrevisaodeRecebimentosSintetico();
    cy.validarUploadsPrevisaodeRecebimentosSintetico();
  });

  it('Validar tela de Pagamentos por conta Bancária', () => {
    cy.entrarPagamentos();
    cy.entrarPagamentosporContaBancariaHomologação();
    cy.selecionarRefo('33292');
    cy.selecionarCalendario();
    cy.validarUploadsPagamentosporContaBancaria();
  });

  it('Validar tela Relatório de Baixa', () => {
    cy.entrarPagamentos();
    cy.entrarRelatoriodeBaixaHomologação();
    cy.selecionarRefo('33292');
    cy.selecionarCalendario();
    cy.validarRelatoriodeBaixa();
  
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
    cy.selecionarRefo('33292');
    cy.selecionarCalendario();
    cy.validarFiltrosRelatoriodeTaxas();
    cy.validarUploadsConciliacaodeTaxas();
  });

  // 5 > Banco  
  it('Validar tela Conciliação Bancária', () => {
    cy.entrarBancoHomologação();
    cy.entrarConciliacaoBancariaHomologação();
    cy.selecionarRefoConciliacaoBancaria('REDEODONT');
    cy.selecionarCalendario();
    cy.validarUploadsConciliacaobancaria();
    //cy.validarConferenciaBancaria();
  });
});
