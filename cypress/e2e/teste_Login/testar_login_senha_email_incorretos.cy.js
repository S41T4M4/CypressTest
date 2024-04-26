describe('Teste de login com senha e email incorretos, logo em seguida inserir login correto', () => {
  it('Email e Senha incorretos', () => {
 

    //Segundo teste: App.
    cy.realizarLoginIncorreto("https://app-qas.conciliadora.com.br/");
    cy.validarPopupErro();
    cy.selecionarOKemPopupErro();
    cy.verificarElementosnaTela();
    cy.esqueceuaSenha();    
    cy.realizarLoginCorreto();
    cy.validarTela();
    cy.validarMenuSuspenso();
  });
});