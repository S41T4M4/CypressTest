Cypress.Commands.add('selecionarCalendarioConferenciadeVendas',(year,month,november,day,aplicar)=>{
  if(year){
    cy.get('#calendarioVendas > div.dx-widget.dx-calendar-navigator > a.dx-calendar-caption-button.dx-button.dx-button-normal.dx-button-mode-contained.dx-widget.dx-button-has-text > div > span').click();
  }
  if(month){
    cy.get('#calendarioVendas > div.dx-widget.dx-calendar-navigator > a.dx-button.dx-button-normal.dx-button-mode-contained.dx-widget.dx-button-has-icon.dx-calendar-navigator-previous-view.dx-calendar-navigator-previous-month > div > i').click();
  }
  if(november){
    cy.get('#calendarioVendas > div.dx-calendar-body > div > div:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(3) > span').click();
  }
  if(day){
    cy.get('#calendarioVendas > div.dx-calendar-body > div > div:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(2) > span').click();
  }
  if(aplicar){
    cy.get('#btnApply > span').click();
}

})
Cypress.Commands.add('validacoesConferenciadeVendas',(valorBruto)=>{
  if(valorBruto){
    cy.wait(2000);
    cy.get('#valorBruto > span').contains('Valor Bruto: R$ 21.066,19');
  }
})
