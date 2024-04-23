describe('Conciliadora intranet', () => {
  it('Testes Conciliadora Cypress', () => {

  // Acessar site e executar o login 
  cy.logandosite('https://intranet-hom.conciliadora.com.br/Login/', 'testesautomatizados@conciliadora.com.br', 'Teste123', true);

  //Entrando na tela : DASHBOARD GERENCIAL

  //Primeira ação: Selecionar Refo. 
  cy.selecionarRefo('33292');


  //Segunda ação: Selecionar data.
  cy.selecionarCalendario();

  //Terceira ação: Validar valores e executar downloads.
  cy.actionsDashboard();
   

  //Entrando na tela: Conferencia de vendas. 
  cy.entrarEmVendas();
  cy.get('#kt_aside_menu > ul > li:nth-child(2) > div > ul > li:nth-child(1) > a > span').click();
  
      
  // Selecionar calendario: 
  cy.selecionarCalendarioConferenciadeVendas(true,true,true,true,true);
  
      
  // Ações na tela       
  cy.validacoesConferenciadeVendas(true);

  
  //Entrando na tela: Vendas operadoras.
  cy.entrarEmVendas();
  cy.get('#kt_aside_menu > ul > li:nth-child(2) > div > ul > li:nth-child(3) > a > span').click();

  //Selecionar refo
  cy.selecionarRefo('33292');

  //Selecionar calendario 
  cy.selecionarCalendario(true,true,true,true,true,true);
  
  //Validações Vendas Operadoras 
  cy.actionsVendasOperadoras(true,true,true,true,true,true,true,true,true);

  //Tela de auditoria de vendas
  cy.entrarEmVendas();
  cy.get('#kt_aside_menu > ul > li:nth-child(2) > div > ul > li:nth-child(4) > a > span').click();

  //Selecionar Refo
  cy.selecionarRefo('33292');

  //Selecionar calendario 
  cy.selecionarCalendario();

  //Ações auditoria de vendas
  cy.actionsAuditoriadeVendas();
 
  //Tela pagamentos
  //Entrando na tela: Pagamentos Confirmados
  cy.pagamentos(true);
  cy.get('#kt_aside_menu > ul > li:nth-child(3) > div > ul > li:nth-child(1) > a > span').click();
  
  //Selecionar Refo
  cy.selecionarRefo(true, true, '33292');

  //Selecionar Calendario
  cy.selecionarCalendario();
  

  cy.validacaoPagamentosConfirmados(true,true,true,true,true,true,true,true,true,true,true,true);


  
  // Deslogar
  cy.deslogar(true,true,true);

 
 });
 it('Teste Login', () => {
  cy.viewport(1920, 1080);
  cy.visit('https://intranet-hom.conciliadora.com.br/'); 
  cy.get('#login').type('testesautomatizados@conciliadora.com.br'); 
  cy.get('#password').type('Teste11223'); 
  cy.get('#btnLogin').click();
  cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').should('be.visible');
});
});

