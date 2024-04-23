Cypress.Commands.add('ActionsPrevisaodeRecebimentos',(atrasado, aReceber)=>{
 if(atrasado){
  cy.get('#Atrasado > div > div.kt-widget24__details.cardDetails > span').contains('R$ 503,64');
 }
 if(aReceber){
  cy.get('#AReceber > div > div.kt-widget24__details.cardDetails > span').contains('R$ 503,64');
 }
})