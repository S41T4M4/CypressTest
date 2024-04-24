describe('Erro de Senha', () => {
  it('Senha incorreta', () => {
    //Primeiro teste: Intranet.
    cy.senhaErrada("https://intranet-hom.conciliadora.com.br/");
    cy.errorPopup();

    //Segundo teste: App.
    cy.senhaErrada("https://app-qas.conciliadora.com.br/");
    cy.errorPopup();
  });
});