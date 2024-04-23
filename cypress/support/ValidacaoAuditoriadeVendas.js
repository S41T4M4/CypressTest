Cypress.Commands.add('actionsAuditoriadeVendas',()=>{

    cy.get('#VendaBruta > div > div.kt-widget24__details.cardDetails > span').contains('R$ 21.066,19');
   
   
    cy.get('#Taxa > div > div.kt-widget24__details.cardDetails > span').contains('R$ 190,07');
   

    cy.get('#VendaLiquida > div > div.kt-widget24__details.cardDetails > span').contains('R$ 20.768,50');
   
 
    cy.get('#Cancelamento > div > div.kt-widget24__details.cardDetails > span').contains('-R$ 132,54');
   
   
    cy.get('#Acelerado > div > div.kt-widget24__details.cardDetails > span').contains('R$ 0,00');
   

    cy.get('#Rejeitado > div > div.kt-widget24__details.cardDetails > span').contains('R$ 0,00');
   
   
    cy.get('#Pago > div > div.kt-widget24__details.cardDetails > span').contains('R$ 7.487,19');
  
    cy.get('#Divergente > div > div.kt-widget24__details.cardDetails > span').contains('R$ 0,00');
   
   
    cy.get('#Atrasado > div > div.kt-widget24__details.cardDetails > span').contains('R$ 13.281,31');
   
  
    cy.get('#Credito > div > div.kt-widget24__details.cardDetails > span').contains('R$ 0,00');
   
  
    cy.get('#Debitos > div > div.kt-widget24__details.cardDetails > span').contains('R$ 0,00');
   

    cy.get('#AReceber > div > div.kt-widget24__details.cardDetails > span').contains('R$ 0,00');
  
    cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(4) > div > div > div > i').click();
  
    cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(5) > div > div > div > i').click();
   
});