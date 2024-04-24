describe('Teste para validar tela Dashboard', () => {
  it('Executando testes em Dashboard', () => {
  // Acessar site intranet e executar o login 
  cy.logarSite('https://intranet-hom.conciliadora.com.br/Login/');

  //Entrando na tela : DASHBOARD GERENCIAL
  //Primeira ação: Selecionar Refo
  cy.selecionarRefo('33292');

  //Segunda ação: Selecionar data
  cy.selecionarCalendario();

  //Terceira ação: Validar valores e executar downloads
  cy.interagirDashboard();

  // Deslogar
  cy.deslogar();

 });
});

