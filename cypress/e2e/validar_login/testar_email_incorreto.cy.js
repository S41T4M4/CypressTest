describe('Erro de Email', () => {
  it('Email incorreto', () => {    

    //Test in url: [https://app.conciliadora.com.br/] .
    
    cy.emailErrado("https://app.conciliadora.com.br/");
    cy.validarPopupErro();
    
  });
});