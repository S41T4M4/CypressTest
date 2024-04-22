
describe('Conciliadora intranet', () => {
  it('Testes Conciliadora Cypress', () => {

  // Acessar site e executar o login 
  cy.login('https://intranet-hom.conciliadora.com.br/Login/', 'testesautomatizados@conciliadora.com.br', 'Teste123', true);

  //Entrando na tela : DASHBOARD GERENCIAL

  //Primeira ação: Selecionar Refo. 
  cy.selecionarRefo(true, true, '33292');

  //Segunda ação: Selecionar data.
  cy.selecionarCalendario(true,true,true,true,true,true);

  //Terceira ação: Validar valores e executar downloads.
  cy.actionsDashboard(true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true);
   

  //Entrando na tela: Conferencia de vendas. 
  cy.entrandoEmVendas(true);
  cy.get('#kt_aside_menu > ul > li:nth-child(2) > div > ul > li:nth-child(1) > a > span').click();
  
      
  // Selecionar calendario: 
  cy.selecionarCalendarioConferenciadeVendas(true,true,true,true,true);
  
      
  // Ações na tela       
  cy.validacoesConferenciadeVendas(true);

  
  //Entrando na tela: Vendas operadoras.
  cy.entrandoEmVendas(true);
  cy.get('#kt_aside_menu > ul > li:nth-child(2) > div > ul > li:nth-child(3) > a > span').click();

  //Selecionar refo
  cy.selecionarRefo(true, true, '33292');

  //Selecionar calendario 
  cy.selecionarCalendario(true,true,true,true,true,true);

  //Validações Vendas Operadoras 
  cy.actionsVendasOperadoras(true,true,true,true,true,true,true,true,true);

  //Tela de auditoria de vendas
  cy.entrandoEmVendas(true);
  cy.get('#kt_aside_menu > ul > li:nth-child(2) > div > ul > li:nth-child(4) > a > span').click();

  //Selecionar Refo
  cy.selecionarRefo(true, true, '33292');

  //Selecionar calendario 
  cy.selecionarCalendario(true,true,true,true,true,true);

  //Ações auditoria de vendas
  cy.actionsAuditoriadeVendas(true,true,true,true,true,true,true,true,true);
 
  //Tela pagamentos
  //Entrando na tela: Pagamentos Confirmados
  cy.pagamentos(true);
  cy.get('#kt_aside_menu > ul > li:nth-child(3) > div > ul > li:nth-child(1) > a > span').click();
  
  //Selecionar Refo
  cy.selecionarRefo(true, true, '33292');

  //Selecionar Calendario
  cy.selecionarCalendario(true,true,true,true,true,true);
  

  cy.validacaoPagamentosConfirmados(true,true,true,true,true,true,true,true,true,true,true,true);


  
  // Deslogar
  

 
 });
 
});


