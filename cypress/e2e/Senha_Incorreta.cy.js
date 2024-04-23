describe('Erro de Senha', () => {
  it.only('Senha', () => {
    cy.login("https://app-qas.conciliadora.com.br/","testesautomatizados@conciliadora.com.br","Teste11223");
    cy.get('#swal2-title').contains('Erro');
    cy.login("https://intranet-hom.conciliadora.com.br/","testesautomatizados@conciliadora.com.br","Teste11223");
    cy.get('#swal2-title').contains('Erro');
    
  });
});