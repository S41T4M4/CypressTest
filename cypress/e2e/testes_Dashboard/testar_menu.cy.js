describe('Testar se menus estão aparecendo', ()=>{
     it('Verificando se os menus existem', ()=>{
      cy.logarSite('https://intranet-hom.conciliadora.com.br/');
      cy.validarTela();
      cy.deslogar();

      cy.logarSite('https://app-qas.conciliadora.com.br/');
      cy.validarTela();
      cy.deslogar();
     })
})