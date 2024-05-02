describe('Erro de Email', () => {
  it('Email incorreto', () => {    

    //Test in url: [https://app-qas.conciliadora.com.br/] .
    
    cy.emailErrado("https://app-qas.conciliadora.com.br/");
    cy.validarPopupErro();
    
  });
});