
Cypress.Commands.add('logarSite', (url) => {
  cy.viewport(1920, 1080);
  cy.visit(url); 
  cy.get('#login').type('testesautomatizados@conciliadora.com.br'); 
  cy.get('#password').type('Teste123'); 
  cy.get('#btnLogin').click();
})
Cypress.Commands.add('selecionarRefo', (valorInserido) => {
  cy.get('#dropDownSearch > div > div > div.dx-texteditor-input-container.dx-tag-container.dx-native-click > div.dx-tag > div > div').click();
  cy.wait(1000);
  cy.get('#dropDownSearch > div.dx-dropdowneditor-input-wrapper.dx-selectbox-container > div > div.dx-texteditor-input-container.dx-tag-container.dx-native-click').click();
  cy.get('#dropDownSearch > div.dx-dropdowneditor-input-wrapper.dx-selectbox-container > div > div.dx-texteditor-input-container.dx-tag-container.dx-native-click > input') .type(valorInserido).wait(1000).type('{enter}');
});

Cypress.Commands.add('selecionarCalendario', ()=> {
  cy.get('#dateRangePicker').click();  
  cy.get('select.monthselect').eq(0).select('Novembro');
  cy.get('select.yearselect').eq(0).select('2023');
  cy.get('body > div.daterangepicker.ltr.auto-apply.show-ranges.show-calendar.opensright > div.drp-calendar.left > div.calendar-table > table > tbody > tr:nth-child(1) > td:nth-child(3)').click(); 
  cy.get('body > div.daterangepicker.ltr.auto-apply.show-ranges.show-calendar.opensright > div.drp-calendar.left > div.calendar-table > table > tbody > tr:nth-child(5) > td:nth-child(4)').click();
  cy.wait(1000);
  cy.get('#btnApply > span').click();
});

Cypress.Commands.add('deslogar', ()=>{
  
    cy.get('#kt_header > div > div > div.topBarItensContainer.topBarUserContainer > div.kt-header__topbar-item.kt-header__topbar-item--user > div.kt-header__topbar-wrapper > span > i').click();
    cy.get('#kt_header > div > div > div.topBarItensContainer.topBarUserContainer > div.kt-header__topbar-item.kt-header__topbar-item--user.show > div.dropdown-menu.dropdown-menu-fit.dropdown-menu-right.dropdown-menu-anim.dropdown-menu-xl.show > div.kt-notification > div > a').click(); 
    cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').click();
})

