Cypress.Commands.add('login',(url,email,senha)=>{
  cy.viewport(1920, 1080);
  cy.visit(url);
  cy.get('#login').should('be.visible').type(email);
  cy.get('#password').type(senha);
  cy.get('#btnLogin').click();
})
Cypress.Commands.add('errorPopup',()=>{
  cy.get('#swal2-title').contains('Erro');
})
Cypress.Commands.add('verificarElementosnaTela', ()=>{
  cy.get('img[src="/Img/Logo.Conciliadora.png"]').should('exist');
  cy.get('#kt_login > div > div:nth-child(2) > div.kt-grid__item.kt-grid__item--fluid.kt-grid.kt-grid--ver > div > h3').contains('Conciliando pessoas e negócios com o sucesso');
})
Cypress.Commands.add('senhaErrada',(url)=>{
  cy.login(url,"testesautomatizados@conciliadora.com.br","Teste11223");
})
Cypress.Commands.add('emailErrado',(url)=>{
  cy.login(url,"testesautatizados@conciliadora.com.br","Teste123");
})
Cypress.Commands.add('loginIncorreto', (url)=>{
  cy.login(url,"testesautzados@conciliadora.com.br","Tste123");
})
Cypress.Commands.add('selecionarOKemSenhaIncorreta',()=>{
  cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').click();
})
Cypress.Commands.add('loginCorreto',()=>{
  cy.get('#password').clear();
  cy.get('#password').clear();
  cy.get('#login').clear();
  cy.get('#login').type("testesautomatizados@conciliadora.com.br").get('#password').type('Teste123').type("{enter}");
})
Cypress.Commands.add('paginaCarregada',()=>{
  cy.get('#logoMinimized').should('exist');
})