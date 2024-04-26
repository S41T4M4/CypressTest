describe('Erro de Email', () => {
  it('Email incorreto', () => {    
    //Teste: App.
    cy.emailErrado("https://app-qas.conciliadora.com.br/");
    cy.validarPopupErro();
    
  });
});