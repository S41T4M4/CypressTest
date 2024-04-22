Cypress.Commands.add('validacaoPagamentosConfirmados',(vendasBrutas,taxa,credito,operacoes,vendasPagas,vendasLiquidas,vendasRejeitadas,debitos,totalPago,exportarCSV,exportarPDF,exportarTodososDados)=>{
  if(vendasBrutas){
  cy.get('#VendasBrutas > div > div.kt-widget24__details.cardDetails > span').contains('R$ 38.622,55');   
  }
  if(taxa){
  cy.get('#Taxa > div > div.kt-widget24__details.cardDetails > span').contains('R$ 345,56');
  }
  if(credito){
  cy.get('#Credito > div > div.kt-widget24__details.cardDetails > span').contains('R$ 0,00');
  }
  if(operacoes){
  cy.get('#Operacoes > div > div:nth-child(1) > span').contains('R$ 0,00');
  }
  if(vendasPagas){
  cy.get('#VendasPagas > div > div.kt-widget24__details.cardDetails > span').contains('R$ 38.080,42');
  }
  if(vendasLiquidas){
  cy.get('#VendasLiquidas > div > div.kt-widget24__details.cardDetails > span').contains('R$ 38.080,42');
  }
  if(vendasRejeitadas){
  cy.get('#VendasRejeitadas > div > div.kt-widget24__details.cardDetails > span').contains('R$ 0,00');
  }
  if(debitos){
  cy.get('#Debitos > div > div.kt-widget24__details.cardDetails > span').contains('-R$ 676,27');
  }
  if(totalPago){
  cy.get('#TotalPago > div > div.kt-widget24__details.cardDetails > span').contains('R$ 37.404,15');
  }
  if(exportarCSV){
    cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(5) > div > div > div > i').click();
  }
  if(exportarPDF){
    cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(6) > div > div > div').click();
  }
  if(exportarTodososDados){
    cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(7) > div > div > div > i');
  }
})