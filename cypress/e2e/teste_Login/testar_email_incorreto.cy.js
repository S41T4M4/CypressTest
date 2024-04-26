describe('Erro de Email', () => {
  it('Email incorreto', () => {
    //Primeiro teste: Intranet.
    
    
    //Segundo teste: App.
    cy.emailErrado("https://app-qas.conciliadora.com.br/");
    cy.validarPopupErro();
    
  });
});