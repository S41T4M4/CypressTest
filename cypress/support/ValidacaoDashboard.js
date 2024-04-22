Cypress.Commands.add('actionsDashboard', (one,two,three,four,five,six,vendas,pagamentos,débitos,total,totaldeVendas,valorMédiodasVendas,totaldeTransacoes,transacoesPagamentos,transaçõesdeVendas,valor)=> {
  if(one){
    cy.get('#gridVendas > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div.dx-item.dx-toolbar-item.dx-toolbar-button.dx-toolbar-item-auto-hide.dx-toolbar-text-auto-hide > div > div > div > i').click();
  }
  if(two){
    cy.get('#gridVendas > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(2) > div > div > div > i').click();
  }
  if(three){
    cy.get('#gridPagamentos > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div.dx-item.dx-toolbar-item.dx-toolbar-button.dx-toolbar-item-auto-hide.dx-toolbar-text-auto-hide > div > div > div > i').click();
  }
  if(four){
    cy.get('#gridPagamentos > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(2) > div > div > div > i').click();
  }
  if(five){
    cy.get('#gridTaxa > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div.dx-item.dx-toolbar-item.dx-toolbar-button.dx-toolbar-item-auto-hide.dx-toolbar-text-auto-hide > div > div > div > i').click();
  }
  if(six){
    cy.get('#gridTaxa > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(2) > div > div > div > i').click();
   
  }
  if(vendas){
    cy.get('#gridVendas > div > div.dx-datagrid-total-footer.dx-datagrid-nowrap > div > table > tbody > tr > td:nth-child(2) > div').contains('21.066,19');
  }
  if(pagamentos){
    cy.get('#gridPagamentos > div > div.dx-datagrid-total-footer.dx-datagrid-nowrap > div > table > tbody > tr > td:nth-child(2) > div').contains('38.080,42');
  }
  if(débitos){
    cy.get('#gridPagamentos > div > div.dx-datagrid-total-footer.dx-datagrid-nowrap > div > table > tbody > tr > td:nth-child(3) > div').contains('-676,27');
  }
  if(total){
    cy.get('#gridPagamentos > div > div.dx-datagrid-total-footer.dx-datagrid-nowrap > div > table > tbody > tr > td:nth-child(4) > div').contains('37.404,15');
  }
  if(totaldeVendas){
    cy.get('#cardsComplementares > div:nth-child(1) > div > div > span').contains('803');
  }
  if(valorMédiodasVendas){
    cy.get('#cardsComplementares > div:nth-child(2) > div > div > span').contains('R$ 26,23');
  }
  if(totaldeTransacoes){
    cy.get('#cardsComplementares > div:nth-child(3) > div > div > span').contains('2.318');
  }
  if(transacoesPagamentos){
    cy.get('#cardsComplementares > div:nth-child(4) > div > div > span').contains('1.506');
  }
  if(transaçõesdeVendas){
    cy.get('#cardsComplementares > div:nth-child(5) > div > div > span').contains('812');
  }
  if(valor){
    cy.get('#gridTaxa > div > div.dx-datagrid-total-footer.dx-datagrid-nowrap > div > table > tbody > tr > td:nth-child(5) > div').contains('21.066,19');
  }
  });