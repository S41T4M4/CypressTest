describe('Teste de login com senha e email incorretos, logo em seguida inserir login correto', () => {
  it('Email e Senha incorretos', () => {
    //Primeiro teste: Intranet.
    cy.loginIncorreto("https://intranet-hom.conciliadora.com.br/");
    cy.errorPopup();
    cy.selecionarOKemSenhaIncorreta();
    cy.verificarElementosnaTela();
    cy.esqueceuaSenha();
    cy.loginCorreto();
    cy.validarTela();

    //Segundo teste: App.
    cy.loginIncorreto("https://app-qas.conciliadora.com.br/");
    cy.errorPopup();
    cy.selecionarOKemSenhaIncorreta();
    cy.verificarElementosnaTela();
    cy.esqueceuaSenha();
    cy.loginCorreto();
    cy.validarTela();
   
  });
});