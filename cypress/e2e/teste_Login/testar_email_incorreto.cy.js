describe('Erro de Email', () => {
  it('Email incorreto', () => {
    //Primeiro teste: Intranet.
    cy.emailErrado("https://intranet-hom.conciliadora.com.br/");
    cy.errorPopup();

    //Segundo teste: App.
    cy.emailErrado("https://app-qas.conciliadora.com.br/");
    cy.errorPopup();
  });
});