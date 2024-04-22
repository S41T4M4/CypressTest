
describe('Conciliadora intranet', () => {
  it('Teste Login', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://intranet-hom.conciliadora.com.br/'); 
    cy.get('#login').type('testesautomatizados@conciliadora.com.br'); 
    cy.get('#password').type('Teste11223'); 
    cy.get('#btnLogin').click();
    cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').contains('OK');
    cy.get('')

 });
 
});