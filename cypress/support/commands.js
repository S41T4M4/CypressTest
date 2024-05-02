Cypress.Commands.add('login',(url,email,senha)=>{
  cy.viewport(1920, 1080);
  cy.visit(url);
  cy.get('#login').type(email);
  cy.get('#password').type(senha);
  cy.get('#btnLogin').click();
})

Cypress.Commands.add('validarPopupErro',()=>{
  cy.get('#swal2-content').contains('E-mail ou senha incorretos!');
})

Cypress.Commands.add('verificarElementosnaTela', ()=>{
  cy.get('img[src="/Img/Logo.Conciliadora.png"]').should('exist');
  cy.get('#kt_login > div > div:nth-child(2) > div.kt-grid__item.kt-grid__item--fluid.kt-grid.kt-grid--ver > div > h3').contains('Conciliando pessoas e negócios com o sucesso');
})

Cypress.Commands.add('senhaErrada',(url)=>{
  cy.login(url,"testesautomatizados@conciliadora.com.br","Teste11223");
})

Cypress.Commands.add('emailErrado',(url)=>{
  cy.login(url,"testesautatizados@conciliadora.com.br","Teste123");
})

Cypress.Commands.add('realizarLoginIncorreto', (url)=>{
  cy.login(url,"testesautzados@conciliadora.com.br","Tste123");
})

Cypress.Commands.add('selecionarOKemPopupErro',()=>{
  cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').click();
})

Cypress.Commands.add('realizarLoginCorreto',()=>{
  cy.get('#password').clear();
  cy.get('#password').clear();
  cy.get('#login').clear();
  cy.get('#login').type("testesautomatizados@conciliadora.com.br").get('#password').type('Teste123').type("{enter}");
})

Cypress.Commands.add('paginaCarregada',()=>{
  cy.get('#logoMinimized').should('exist');
})

Cypress.Commands.add('esqueceuaSenha',()=>{
  cy.get('#kt_login > div > div.kt-grid__item.kt-grid__item--fluid.kt-grid__item--order-tablet-and-mobile-1.kt-login__wrapper > div.kt-login__body > div > form > div.kt-login__actions > a').should('be.visible')
})

Cypress.Commands.add('verificarDashboard',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child) > a > i').should('exist');
})

Cypress.Commands.add('verificarVendas', ()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(2) > a > i').should('exist');
})

Cypress.Commands.add('verificarPagamentos', ()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(3) > a > i').should('exist');
})

Cypress.Commands.add('verificarTaxa', ()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(4) > a > i').should('exist');
})

Cypress.Commands.add('verificarBanco', ()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(5) > a > i').should('exist');
})

Cypress.Commands.add('verificarAdministrativo',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(6) > a > i').should('exist');
})

Cypress.Commands.add('verificarCadastro',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(7) > a > i').should('exist');
})

Cypress.Commands.add('verificarSegurança',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(8) > a > i').should('exist');
})

Cypress.Commands.add('verificarComercial',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(9) > a > i').should('exist');
})

Cypress.Commands.add('validarMenuSuspenso',()=>{
  cy.get('#dropDownSearch').should('exist');
  cy.get('#dateRangePicker').should('exist');
  cy.get('#containerAjuda > div.kt-header__topbar-wrapper > span > i').should('exist');
  cy.get('#containerNotificacoes > div.kt-header__topbar-wrapper > span.kt-header__topbar-icon.kt-header__topbar-icon--success > i').should('exist');
  cy.get('#kt_header > div > div > div.topBarItensContainer.topBarUserContainer > div.kt-header__topbar-item.kt-header__topbar-item--user > div.kt-header__topbar-wrapper > span > i').should('exist');
  cy.get('#md-app-widget > div.md-chat-widget-btn-container').should('exist');
  cy.get('#dropDownSwitchType').should('exist');
  cy.get('#btnApply > span').should('exist');
})

Cypress.Commands.add('validarTela',()=>{
      cy.paginaCarregada();
      cy.verificarDashboard();
      cy.verificarVendas();
      cy.verificarPagamentos();
      cy.verificarTaxa();
      cy.verificarBanco();
      cy.verificarAdministrativo();
      cy.verificarCadastro();
      cy.verificarSegurança();
      cy.verificarComercial();
      cy.validarMenuSuspenso();
})