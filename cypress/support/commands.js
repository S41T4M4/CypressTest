Cypress.Commands.add('login',(url,email,senha)=>{
  cy.viewport(1920, 1080);
  cy.visit(url);
  cy.get('#login').should('be.visible').type(email);
  cy.get('#password').type(senha);
  cy.get('#btnLogin').click();
})