describe('Erro de Senha', () => {
  it('Senha incorreta', () => {

    //Test in url: [https://app-qas.conciliadora.com.br/] .

    cy.senhaErrada("https://app-qas.conciliadora.com.br/");
    cy.validarPopupErro();
    
  });
});