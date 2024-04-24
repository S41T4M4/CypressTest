Cypress.Commands.add('interagirDashboard', ()=> {
 
    cy.get('#gridVendas > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div.dx-item.dx-toolbar-item.dx-toolbar-button.dx-toolbar-item-auto-hide.dx-toolbar-text-auto-hide > div > div > div > i').click();
    cy.get('#gridVendas > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(2) > div > div > div > i').click();
  
 
    cy.get('#gridPagamentos > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div.dx-item.dx-toolbar-item.dx-toolbar-button.dx-toolbar-item-auto-hide.dx-toolbar-text-auto-hide > div > div > div > i').click();
  
 
    cy.get('#gridPagamentos > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(2) > div > div > div > i').click();
  
 
    cy.get('#gridTaxa > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div.dx-item.dx-toolbar-item.dx-toolbar-button.dx-toolbar-item-auto-hide.dx-toolbar-text-auto-hide > div > div > div > i').click();

    cy.get('#gridTaxa > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(2) > div > div > div > i').click();
   
  

    cy.get('#gridVendas > div > div.dx-datagrid-total-footer.dx-datagrid-nowrap > div > table > tbody > tr > td:nth-child(2) > div').contains('21.066,19');
  

    cy.get('#gridPagamentos > div > div.dx-datagrid-total-footer.dx-datagrid-nowrap > div > table > tbody > tr > td:nth-child(2) > div').contains('38.080,42');
  
 
    cy.get('#gridPagamentos > div > div.dx-datagrid-total-footer.dx-datagrid-nowrap > div > table > tbody > tr > td:nth-child(3) > div').contains('-676,27');
  
 
    cy.get('#gridPagamentos > div > div.dx-datagrid-total-footer.dx-datagrid-nowrap > div > table > tbody > tr > td:nth-child(4) > div').contains('37.404,15');
  
    cy.get('#cardsComplementares > div:nth-child(1) > div > div > span').contains('803');
  
    cy.get('#cardsComplementares > div:nth-child(2) > div > div > span').contains('R$ 26,23');
  
    cy.get('#cardsComplementares > div:nth-child(3) > div > div > span').contains('2.318');
  

    cy.get('#cardsComplementares > div:nth-child(4) > div > div > span').contains('1.506');
  
  
    cy.get('#cardsComplementares > div:nth-child(5) > div > div > span').contains('812');

    cy.get('#gridTaxa > div > div.dx-datagrid-total-footer.dx-datagrid-nowrap > div > table > tbody > tr > td:nth-child(5) > div').contains('21.066,19');
  
  });