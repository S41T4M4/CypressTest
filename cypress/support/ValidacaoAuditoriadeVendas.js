Cypress.Commands.add('actionsAuditoriadeVendas',(vendaBruta,taxa,vendaLiquida,cancelamento,acelerado,rejeitado,pago,divergente,atrasado,credito,debitos,aReceber,exportarCSV,exportarTodososDados)=>{
   if(vendaBruta){
    cy.get('#VendaBruta > div > div.kt-widget24__details.cardDetails > span').contains('R$ 21.066,19');
   }
   if(taxa){
    cy.get('#Taxa > div > div.kt-widget24__details.cardDetails > span').contains('R$ 190,07');
   }
   if(vendaLiquida){
    cy.get('#VendaLiquida > div > div.kt-widget24__details.cardDetails > span').contains('R$ 20.768,50');
   }
   if(cancelamento){
    cy.get('#Cancelamento > div > div.kt-widget24__details.cardDetails > span').contains('-R$ 132,54');
   }
   if(acelerado){
    cy.get('#Acelerado > div > div.kt-widget24__details.cardDetails > span').contains('R$ 0,00');
   }
   if(rejeitado){
    cy.get('#Rejeitado > div > div.kt-widget24__details.cardDetails > span').contains('R$ 0,00');
   }
   if(pago){
    cy.get('#Pago > div > div.kt-widget24__details.cardDetails > span').contains('R$ 7.487,19');
   }
   if(divergente){
    cy.get('#Divergente > div > div.kt-widget24__details.cardDetails > span').contains('R$ 0,00');
   }
   if(atrasado){
    cy.get('#Atrasado > div > div.kt-widget24__details.cardDetails > span').contains('R$ 13.281,31');
   }
   if(credito){
    cy.get('#Credito > div > div.kt-widget24__details.cardDetails > span').contains('R$ 0,00');
   }
   if(debitos){
    cy.get('#Debitos > div > div.kt-widget24__details.cardDetails > span').contains('R$ 0,00');
   }
   if(aReceber){
    cy.get('#AReceber > div > div.kt-widget24__details.cardDetails > span').contains('R$ 0,00');
   }
   if(exportarCSV){
      cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(4) > div > div > div > i').click();
   }
   if(exportarTodososDados){
   cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(5) > div > div > div > i').click();
   }
});