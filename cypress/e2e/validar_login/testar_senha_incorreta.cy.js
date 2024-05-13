describe('Erro de Senha', () => {
  it('Senha incorreta', () => {

    //Test in url: [https://app.conciliadora.com.br/] .

    cy.senhaErrada("https://app.conciliadora.com.br/");
    cy.validarPopupErro();
    
  });
});