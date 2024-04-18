describe('Conciliadora intranet', () => {
  it('Login', () => {
     // Acessar site e executar o login 

    cy.viewport(1920, 1080); 
    cy.visit('https://intranet-hom.conciliadora.com.br/Login/');
    cy.get('#login').type('testesautomatizados@conciliadora.com.br');
    cy.get('#password').type('Teste123');
    cy.get('#btnLogin').click();


     // Selecionar Refo. 
     cy.get('#dropDownSearch > div > div > div.dx-texteditor-input-container.dx-tag-container.dx-native-click > div.dx-tag > div > div').click();
    cy.get('#dropDownSearch > div.dx-dropdowneditor-input-wrapper.dx-selectbox-container > div > div.dx-texteditor-input-container.dx-tag-container.dx-native-click').click();
    cy.get('#dropDownSearch > div.dx-dropdowneditor-input-wrapper.dx-selectbox-container > div > div.dx-texteditor-input-container.dx-tag-container.dx-native-click > input').type('33292').wait(2000).type('{enter}');
   

    // Selecionar data: 
    cy.get('#dateRangePicker').click();
    cy.wait(3000);
    cy.get('select.monthselect').eq(0).select('Novembro');
    cy.get('select.yearselect').eq(0).select('2023');
    cy.get('body > div.daterangepicker.ltr.auto-apply.show-ranges.show-calendar.opensright > div.drp-calendar.left > div.calendar-table > table > tbody > tr:nth-child(3) > td:nth-child(2)').dblclick(); 
    cy.get('#btnApply > span').click();

    
   
     // Actions in dashboard
      cy.get('#gridVendas > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div.dx-item.dx-toolbar-item.dx-toolbar-button.dx-toolbar-item-auto-hide.dx-toolbar-text-auto-hide > div > div > div > i').click();
      cy.get('#gridVendas > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(2) > div > div > div > i').click();
      cy.get('#gridPagamentos > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div.dx-item.dx-toolbar-item.dx-toolbar-button.dx-toolbar-item-auto-hide.dx-toolbar-text-auto-hide > div > div > div > i').click();
      cy.get('#gridPagamentos > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(2) > div > div > div > i').click();
      cy.get('#gridTaxa > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div.dx-item.dx-toolbar-item.dx-toolbar-button.dx-toolbar-item-auto-hide.dx-toolbar-text-auto-hide > div > div > div > i').click();
      cy.get('#gridTaxa > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(2) > div > div > div > i').click();
      cy.wait(3000);
      


      //Entrando em vendas 
      //Conferencia de vendas 
      cy.get('#kt_aside_menu > ul > li:nth-child(2) > a > i').click();
      cy.get('#kt_aside_menu > ul > li:nth-child(2) > div > ul > li:nth-child(1) > a > span').click();

      cy.wait(3000);
      cy.get('#dropDownSearch > div > div > div.dx-texteditor-buttons-container > span > span').click();
      cy.get('#dropDownSearch > div > div > div.dx-texteditor-input-container > input').click();
      cy.get('#dropDownSearch > div > div > div.dx-texteditor-input-container > input').type('33292').wait(3000).type('{enter}');
      cy.get('#btnApply > span').click();


      cy.get('#calendarioVendas > div.dx-widget.dx-calendar-navigator > a.dx-calendar-caption-button.dx-button.dx-button-normal.dx-button-mode-contained.dx-widget.dx-button-has-text > div > span').click();
      cy.get('#calendarioVendas > div.dx-widget.dx-calendar-navigator > a.dx-button.dx-button-normal.dx-button-mode-contained.dx-widget.dx-button-has-icon.dx-calendar-navigator-previous-view.dx-calendar-navigator-previous-month > div > i').click();
      cy.get('#calendarioVendas > div.dx-calendar-body > div > div:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(3) > span').click();
      cy.get('#calendarioVendas > div.dx-calendar-body > div > div:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(2) > span').click();
      







    
    });
  });

