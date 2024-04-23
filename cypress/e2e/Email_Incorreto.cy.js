describe('Erro de Email', () => {
  it.only('Email', () => {
    cy.login("https://app-qas.conciliadora.com.br/","testesauttizados@conciliadora.com.br","Teste123");
    cy.get('#swal2-title').contains('Erro');
    cy.login("https://intranet-hom.conciliadora.com.br/","testesautatizados@conciliadora.com.br","Teste123");
    cy.get('#swal2-title').contains('Erro');
    
  });
});