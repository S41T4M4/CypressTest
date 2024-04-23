describe('Erro de Email e Senha', () => {
  it.only('Email e Senha', () => {
    cy.login("https://intranet-hom.conciliadora.com.br/","testesautzados@conciliadora.com.br","Tste123");
    cy.get('#swal2-title').contains('Erro');
    cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').click();
    cy.login("testesautomatizados@conciliadora.com.br","Teste123");
    cy.get('#logoMinimized').should('exist');

    cy.login("https://app-qas.conciliadora.com.br/","testesautzados@conciliadora.com.br","Tste123");
    cy.get('#swal2-title').contains('Erro');
    cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').click();
    cy.login("testesautomatizados@conciliadora.com.br","Teste123");
    cy.get('#logoMinimized').should('exist');
  });
});