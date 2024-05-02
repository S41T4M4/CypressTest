describe('Validar telas', ()=>{
  it('Validação de valores e validar presença de elementos',()=>{
    //Test in url: [https://app.conciliadora.com.br]
    cy.logarSite('https://app.conciliadora.com.br');
    cy.validarTela();

    // 1 : Dashboard 
    cy.entrarDashboard();
    cy.entrarDashboardGerencial();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();


    // 2 : Vendas
    cy.entrarVendas();
    cy.entrarConferenciadeVendas();

    cy.entrarVendas();
    cy.entrarVendasSistemas();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();

    cy.entrarVendas();
    cy.entrarVendasOperadoras();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();

    cy.entrarVendas();
    cy.entrarAuditoriadeVendas();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    
    // 3 : Pagamentos
    cy.entrarPagamentos();
    cy.entrarPagamentosConfirmados();
    cy.entrarPagamentos();
    cy.entrarDebitosConfirmados();
    cy.entrarPagamentos();
    cy.entrarPrevisaodeRecebimentos();
    cy.entrarPagamentos();
    cy.entrarPrevisaodeRecebimentosSintetico();
    cy.entrarPagamentos();
    cy.entrarPagamentosaReceber();
    cy.entrarPagamentos();
    cy.entrarPagamentosporContaBancaria();
    cy.entrarPagamentos();
    cy.entrarRelatoriodeBaixa();


    // 4 : Taxa
    cy.entrarTaxa();
    cy.entrarRelatoriodeTaxas();
 
    // 5 : Banco
    cy.entrarBanco();
    cy.entrarConciliacaoBancaria();
  })
})