describe('Erro de Senha', () => {
  it('Senha incorreta', () => {
    //Teste App.
    cy.senhaErrada("https://app-qas.conciliadora.com.br/");
    cy.validarPopupErro();
  });
});