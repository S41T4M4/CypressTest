Cypress.Commands.add('actionsVendasOperadoras',(vendasBrutas,taxa,vendasLiquidas,debitos,rejeitados,totalLiquido,download1,download2,download3,aplicar)=>{
  if(vendasBrutas){
    cy.get('#VendasBrutas > div > div.kt-widget24__details.cardDetails > span').contains('R$ 21.066,19');
  }
  if(taxa){
    cy.get('#Taxa > div > div.kt-widget24__details.cardDetails > span').contains('R$ 190,07');
  }
  if(vendasLiquidas){
    cy.get('#VendasLiquidas > div > div.kt-widget24__details.cardDetails > span').contains('R$ 20.768,50');
  }
  if(debitos){
    cy.get('#Debitos > div > div.kt-widget24__details.cardDetails > span').contains('-R$ 47,48');
  }
  if(rejeitados){
    cy.get('#Rejeitados > div > div.kt-widget24__details.cardDetails > span').contains('R$ 0,00');
  }
  if(totalLiquido){
    cy.get('#TotalLiquido > div > div.kt-widget24__details.cardDetails > span').contains('R$ 20.721,02');
  }
  if(download1){
    cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(5) > div > div > div > i').click();
  }
  if(download2){
    cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(6) > div > div > div > i').click();
  }
  if(download3){
    cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(7) > div > div > div > i').click();
  }
})
