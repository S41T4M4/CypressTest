Cypress.Commands.add('login',(url,email,senha)=>{
  cy.viewport(1920, 1080);
  cy.visit(url);
  cy.get('#login').type(email);
  cy.get('#password').type(senha);
  cy.get('#btnLogin').click();
})


Cypress.Commands.add('logarSite', (url) => {
  cy.viewport(1920, 1080);
  cy.visit(url); 
  cy.get('#login').type('vitor.reis@conciliadora.com.br'); 
  cy.get('#password').type('Staff4912'); 
  cy.get('#btnLogin').click();
})

//683
Cypress.Commands.add('selecionarRefo', (valorInserido) => {
  cy.get('#dropDownSearch > div > div > div.dx-texteditor-input-container.dx-tag-container.dx-native-click > div.dx-tag > div > div').click();
  cy.wait(1000);
  cy.get('#dropDownSearch > div.dx-dropdowneditor-input-wrapper.dx-selectbox-container > div > div.dx-texteditor-input-container.dx-tag-container.dx-native-click').click();
  cy.get('#dropDownSearch > div.dx-dropdowneditor-input-wrapper.dx-selectbox-container > div > div.dx-texteditor-input-container.dx-tag-container.dx-native-click > input') .type(valorInserido).wait(1000).type('{enter}');
});


Cypress.Commands.add('selecionarCalendario', ()=> {
 
  cy.get('#dateRangePicker').click();  
  cy.wait(500);
  cy.get('select.yearselect').eq(0).should('not.be.disabled').select('2023'); 
  cy.get('select.monthselect').eq(0).should('not.be.disabled').select('Setembro');
  cy.get('body > div.daterangepicker.ltr.auto-apply.show-ranges.show-calendar.opensright > div.drp-calendar.left > div.calendar-table > table > tbody > tr:nth-child(1) > td:nth-child(5)').click(); 
  cy.get('body > div.daterangepicker.ltr.auto-apply.show-ranges.show-calendar.opensright > div.drp-calendar.left > div.calendar-table > table > tbody > tr:nth-child(5) > td:nth-child(6)').click();
  cy.wait(500);
  cy.get('#btnApply > span').click();
});


Cypress.Commands.add('deslogar', ()=>{
    cy.get('#kt_header > div > div > div.topBarItensContainer.topBarUserContainer > div.kt-header__topbar-item.kt-header__topbar-item--user > div.kt-header__topbar-wrapper > span > i').click();
    cy.get('#kt_header > div > div > div.topBarItensContainer.topBarUserContainer > div.kt-header__topbar-item.kt-header__topbar-item--user.show > div.dropdown-menu.dropdown-menu-fit.dropdown-menu-right.dropdown-menu-anim.dropdown-menu-xl.show > div.kt-notification > div > a').click(); 
    cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').click();
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
  cy.get('#kt_aside_menu > ul > li:nth-child(1) > a > i').should('exist');
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

Cypress.Commands.add('verificarCopyright',()=>{
  cy.get('body > div.kt-grid.kt-grid--hor.kt-grid--root > span').contains('Copyright © 2022 - Aliança Tecnologia');
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
  cy.verificarCopyright();
})




//Commands: Testar Telas 



//Tela Dashboard
Cypress.Commands.add('entrarDashboard',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(1) > a > i').click();
})
Cypress.Commands.add('entrarDashboardGerencial',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(1) > div > ul > li:nth-child(1) > a > span').click();
  
})

Cypress.Commands.add('validarTotalVendasDashboard',()=>{
  cy.get('#gridVendas > div > div.dx-datagrid-total-footer.dx-datagrid-nowrap > div > table > tbody > tr > td:nth-child(2) > div').should('be.visible');
})

Cypress.Commands.add('validarPagamentosDashboard',()=>{
  cy.get('#gridPagamentos > div > div.dx-datagrid-total-footer.dx-datagrid-nowrap > div > table > tbody > tr > td:nth-child(2) > div').should('be.visible');
})
Cypress.Commands.add('validarDébitosDashboard',()=>{
  cy.get('#gridPagamentos > div > div.dx-datagrid-total-footer.dx-datagrid-nowrap > div > table > tbody > tr > td:nth-child(3) > div').should('be.visible');
})
Cypress.Commands.add('validarTotalDashboard',()=>{
  cy.get('#gridPagamentos > div > div.dx-datagrid-total-footer.dx-datagrid-nowrap > div > table > tbody > tr > td:nth-child(4) > div').should('be.visible');
})
Cypress.Commands.add('validarTotaldeVendasDashboard',()=>{
  cy.get('#cardsComplementares > div:nth-child(1) > div > div > span').should('be.visible');
})
Cypress.Commands.add('validarValorMédiodasVendasDashboard',()=>{
  cy.get('#cardsComplementares > div:nth-child(2) > div > div > span').should('be.visible');
})
Cypress.Commands.add('validarTotaldeTransaçõesDashboard',()=>{
  cy.get('#cardsComplementares > div:nth-child(3) > div > div > span').should('be.visible');
})
Cypress.Commands.add('validarTransaçõesPagamentosDashboard',()=>{
  cy.get('#cardsComplementares > div:nth-child(4) > div > div > span').should('be.visible');
})
Cypress.Commands.add('validarTransaçõesVendasDashboard',()=>{
  cy.get('#cardsComplementares > div:nth-child(5) > div > div > span').should('be.visible');
})
Cypress.Commands.add('validarValorDashboard',()=>{
  cy.get('#gridTaxa > div > div.dx-datagrid-total-footer.dx-datagrid-nowrap > div > table > tbody > tr > td:nth-child(5) > div').should('be.visible');
})


Cypress.Commands.add('validarDashboard',()=>{
  cy.validarTotalVendasDashboard();
  cy.validarPagamentosDashboard();
  cy.validarDébitosDashboard();
  cy.validarTotalDashboard();
  cy.validarTotaldeVendasDashboard();
  cy.validarValorMédiodasVendasDashboard();
  cy.validarTotaldeTransaçõesDashboard();
  cy.validarTransaçõesPagamentosDashboard();
  cy.validarTransaçõesVendasDashboard();
  cy.validarValorDashboard();
})
Cypress.Commands.add('validarUploadsDashboardGerencial',()=>{
  cy.get('#gridVendas > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div.dx-item.dx-toolbar-item.dx-toolbar-button.dx-toolbar-item-auto-hide.dx-toolbar-text-auto-hide > div > div > div > i').click();
  cy.get('#gridVendas > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(2) > div > div > div > i').click();
  cy.get('#gridPagamentos > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div.dx-item.dx-toolbar-item.dx-toolbar-button.dx-toolbar-item-auto-hide.dx-toolbar-text-auto-hide > div > div > div > i').click();
  cy.get('#gridPagamentos > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(2) > div > div > div > i').click();
  cy.get('#gridTaxa > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div.dx-item.dx-toolbar-item.dx-toolbar-button.dx-toolbar-item-auto-hide.dx-toolbar-text-auto-hide > div > div > div > i').click();
  cy.get('#gridTaxa > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(2) > div > div > div > i').click();
})







//Tela Vendas
Cypress.Commands.add('entrarVendas',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(2) > a > i').click();
})
Cypress.Commands.add('entrarConferenciadeVendas',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(2) > div > ul > li:nth-child(1) > a > span').click();
  cy.wait(1500);
})
Cypress.Commands.add('selecionarRefoConferenciadeVendas',(valorInserido)=>{
  cy.get('#dropDownSearch > div.dx-dropdowneditor-input-wrapper.dx-selectbox-container > div > div.dx-texteditor-buttons-container > span > span').click();
  cy.wait(2000);
  cy.get('#dropDownSearch > div > div > div.dx-texteditor-input-container > input').click();
  cy.get('#dropDownSearch > div > div > div.dx-texteditor-input-container > input') .type(valorInserido).wait(1000).type('{enter}');
})
Cypress.Commands.add('selecionarCalendarioConferenciadeVendas',()=>{
  cy.get('#calendarioVendas > div.dx-widget.dx-calendar-navigator > a.dx-calendar-caption-button.dx-button.dx-button-normal.dx-button-mode-contained.dx-widget.dx-button-has-text > div > span').click();
  cy.get('#calendarioVendas > div.dx-widget.dx-calendar-navigator > a.dx-calendar-caption-button.dx-button.dx-button-normal.dx-button-mode-contained.dx-widget.dx-button-has-text > div').click();
  cy.get('#calendarioVendas > div.dx-calendar-body > div > div:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(1) > span').click();
  cy.get('#calendarioVendas > div.dx-calendar-body > div > div:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(1) > span').click();
  cy.get('#calendarioVendas > div.dx-calendar-body > div > div:nth-child(1) > table > tbody > tr:nth-child(4) > td.dx-calendar-cell.calendarioConciliada > span').click();
  cy.wait(2000);
})
Cypress.Commands.add('selecionarCalendarioConferenciadeVendas2',()=>{
  cy.get('#calendarioVendas > div.dx-widget.dx-calendar-navigator > a.dx-calendar-caption-button.dx-button.dx-button-normal.dx-button-mode-contained.dx-widget.dx-button-has-text > div > span').click();
  cy.get('#calendarioVendas > div.dx-widget.dx-calendar-navigator > a.dx-calendar-caption-button.dx-button.dx-button-normal.dx-button-mode-contained.dx-widget.dx-button-has-text > div').click();
  cy.get('#calendarioVendas > div.dx-calendar-body > div > div:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(1) > span').click();
  cy.get('#calendarioVendas > div.dx-calendar-body > div > div:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(1) > span').click();
  cy.get('#calendarioVendas > div.dx-calendar-body > div > div:nth-child(1) > table > tbody > tr:nth-child(2) > td.dx-calendar-cell.calendarioParcialmenteConciliada').click();
  cy.wait(2000);
})
Cypress.Commands.add('validarValorBrutoConferenciadeVendas',()=>{
  cy.get('#valorBruto > span').should('be.visible');
})
Cypress.Commands.add('validarcardValeCard',()=>{
  cy.get('#tabAdq > div.dx-tabs-scrollable.dx-scrollable.dx-visibility-change-handler.dx-scrollable-horizontal.dx-scrollable-simulated > div > div > div.dx-scrollable-content > div > div:nth-child(22)').click();
  cy.get('#tabTerminal > div > div > div.kt-widget24__details > span').should('be.visible');

})



Cypress.Commands.add('entrarVendasSistemas',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(2) > div > ul > li:nth-child(2) > a > span').click();
  cy.wait(1500);
})
Cypress.Commands.add('validarEnviadas',()=>{
  cy.get('#Enviadas > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Enviadas > div > div.kt-widget24__details.cardDetails > span').click();
  
})
Cypress.Commands.add('validarCorretas',()=>{
  cy.get('#Corretas > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Corretas > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarDivergentes',()=>{
  cy.get('#Divergentes > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Divergentes > div > div.kt-widget24__details.cardDetails > span').click();
  
})
Cypress.Commands.add('validarNaoConciliadas',()=>{
  cy.get('#NaoConciliadas > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#NaoConciliadas > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarNaoEncontradas',()=>{
  cy.get('#NaoEncontradas > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#NaoEncontradas > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarVendaemDuplicidade',()=>{
  cy.get('#VendaEmDuplicidade > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#VendaEmDuplicidade > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarNaoEnviadas',()=>{
  cy.get('#NaoEnviadas > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#NaoEnviadas > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarNaoEnviadasCanceladas',()=>{
  cy.get('#NaoEnviadasCanceladas > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#NaoEnviadasCanceladas > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('avaliarFiltrosVendasSistemas',()=>{
  cy.get('#dx-col-106').click();
  cy.get('#dx-col-108').click();
  cy.get('#dx-col-109').click();
  cy.get('#dx-col-110').click();
  cy.get('#dx-col-111').click();
  cy.get('#dx-col-112').click();
  cy.get('#dx-col-113').click();
  cy.get('#dx-col-114').click();
  cy.get('#dx-col-115').click();
  cy.get('#dx-col-116').click();
  cy.get('#dx-col-117').click();
  cy.get('#dx-col-118').click();
  cy.get('#dx-col-119').click();
  cy.get('#dx-col-120').click();
  cy.get('#dx-col-121').click();
  cy.get('#dx-col-122').click();
  cy.get('#dx-col-123').click();
  cy.get('#dx-col-124').click();
  cy.get('#dx-col-125').click();
  cy.get('#dx-col-126').click();
  cy.get('#dx-col-127').click();
})

Cypress.Commands.add('validarVendasSistemas',()=>{
  cy.validarEnviadas();
  cy.validarCorretas();
  cy.validarDivergentes();
  cy.validarNaoConciliadas();
  cy.validarNaoEncontradas();
  cy.validarVendaemDuplicidade();
  cy.validarNaoEnviadas();
  cy.validarNaoEnviadasCanceladas();
  cy.avaliarFiltrosVendasSistemas();
})
Cypress.Commands.add('validarUploadsVendasSistemas',()=>{
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(4) > div > div > div > i').click();
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(5) > div > div > div > i').click();
})


Cypress.Commands.add('entrarVendasOperadoras',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(2) > div > ul > li:nth-child(3) > a > span').click();
  cy.wait(1500);
})
Cypress.Commands.add('validarVendasBrutas',()=>{
  cy.get('#VendasBrutas > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#VendasBrutas > div > div.kt-widget24__details.cardDetails > span').click();
 
})
Cypress.Commands.add('validarTaxa',()=>{
  cy.get('#Taxa > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Taxa > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarVendasLiquidas',()=>{
  cy.get('#VendasLiquidas > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#VendasLiquidas > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarRejeitados',()=>{
  cy.get('#Rejeitados > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Rejeitados > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarTotalLiquido',()=>{
  cy.get('#TotalLiquido > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#TotalLiquido > div > div.kt-widget24__details.cardDetails > span').click();
})


Cypress.Commands.add('validarFiltrosVendasOperadoras',()=>{
  cy.get('#dx-col-95').click();
  cy.get('#dx-col-96').click();
  cy.get('#dx-col-98').click();
  cy.get('#dx-col-99').click();
  cy.get('#dx-col-100').click();
  cy.get('#dx-col-101').click();
  cy.get('#dx-col-102').click();
  cy.get('#dx-col-103').click();
  cy.get('#dx-col-104').click();
  cy.get('#dx-col-105').click();
  cy.get('#dx-col-106').click();
  cy.get('#dx-col-107').click();
  cy.get('#dx-col-108').click();
  cy.get('#dx-col-109').click();
  cy.get('#dx-col-110').click();
  cy.get('#dx-col-111').click();
  cy.get('#dx-col-112').click();
  cy.get('#dx-col-113').click();
  cy.get('#dx-col-114').click();
  cy.get('#dx-col-115').click();
  cy.get('#dx-col-116').click();
  cy.get('#dx-col-117').click();
  cy.get('#dx-col-118').click();
  cy.get('#dx-col-119').click();
  cy.get('#dx-col-120').click();
  cy.get('#dx-col-121').click();

})
Cypress.Commands.add('validarVendasOperadoras',()=>{
  cy.validarVendasBrutas();
  cy.validarTaxa();
  cy.validarVendasLiquidas();
  cy.validarRejeitados();
  cy.validarTotalLiquido();
  cy.validarFiltrosVendasOperadoras();
})
Cypress.Commands.add('validaUploadsVendasOperadoras',()=>{
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(5) > div > div > div > i').click();
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(6) > div > div > div > i').click();
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(7) > div > div > div > i').click();
})


Cypress.Commands.add('entrarAuditoriadeVendas',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(2) > div > ul > li:nth-child(4) > a > span').click();
  cy.wait(1500);
})
Cypress.Commands.add('validarVendaBrutaAuditoriadeVendas',()=>{
  cy.get('#VendaBruta > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#VendaBruta > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarTaxaAuditoriadeVendas',()=>{
  cy.get('#Taxa > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Taxa > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarVendaLiquidaAuditoriadeVendas',()=>{
  cy.get('#VendaLiquida > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#VendaLiquida > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarCancelamentoAuditoriadeVendas',()=>{
  cy.get('#Cancelamento > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Cancelamento > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarAceleradoAuditoriadeVendas',()=>{
  cy.get('#Acelerado > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Acelerado > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarRejeitadoAuditoriadeVendas',()=>{
  cy.get('#Rejeitado > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Rejeitado > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarPagoAuditoriadeVendas',()=>{
  cy.get('#Pago > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Pago > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarDivergenteAuditoriadeVendas',()=>{
  cy.get('#Divergente > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Divergente > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarAtrasadoAuditoriadeVendas',()=>{
  cy.get('#Atrasado > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Atrasado > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarCréditoAuditoriadeVendas',()=>{
  cy.get('#Credito > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Credito > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarDebitosAuditoriadeVendas',()=>{
  cy.get('#Debitos > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Debitos > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarAReceberAuditoriadeVendas',()=>{
  cy.get('#AReceber > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
})
Cypress.Commands.add('validarFiltrosAuditoriadeVendas',()=>{
  cy.get('#dx-col-95');
  cy.get('#dx-col-97');
  cy.get('#dx-col-98');
  cy.get('#dx-col-99');
  cy.get('#dx-col-100');
  cy.get('#dx-col-101');
  cy.get('#dx-col-103');
  cy.get('#dx-col-105');
  cy.get('#dx-col-106');
  cy.get('#dx-col-108');
  cy.get('#dx-col-110');
  cy.get('#dx-col-111');
  cy.get('#dx-col-112');
  cy.get('#dx-col-114');
  cy.get('#dx-col-115');
  cy.get('#dx-col-116');
  cy.get('#dx-col-117');
  cy.get('#dx-col-118');
  cy.get('#dx-col-121');
  cy.get('#dx-col-123');
  cy.get('#dx-col-124');
  cy.get('#dx-col-125');
  cy.get('#dx-col-126');
  cy.get('#dx-col-127');





})
Cypress.Commands.add('validarAuditoriadeVendas',()=>{
  cy.validarVendaBrutaAuditoriadeVendas();
  cy.validarTaxaAuditoriadeVendas();
  cy.validarVendaLiquidaAuditoriadeVendas();
  cy.validarCancelamentoAuditoriadeVendas();
  cy.validarAceleradoAuditoriadeVendas();
  cy.validarRejeitadoAuditoriadeVendas();
  cy.validarPagoAuditoriadeVendas();
  cy.validarDivergenteAuditoriadeVendas();
  cy.validarAtrasadoAuditoriadeVendas();
  cy.validarCréditoAuditoriadeVendas();
  cy.validarDebitosAuditoriadeVendas();
  cy.validarAReceberAuditoriadeVendas();
  cy.validarFiltrosAuditoriadeVendas();
  
})
Cypress.Commands.add('validarUploadsAuditoriadeVendas',()=>{
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(4) > div > div > div > i').click();
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(5) > div > div > div > i').click();
})


//Tela Pagamentos 
Cypress.Commands.add('entrarPagamentos',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(3) > a > i').click();
})
Cypress.Commands.add('entrarPagamentosConfirmados',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(3) > div > ul > li:nth-child(1) > a > span').click();
  cy.wait(1500);
})


Cypress.Commands.add('validarVendaBrutaPagamentosConfirmados',()=>{
  cy.get('#VendasBrutas > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#VendasBrutas > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarTaxaPagamentosConfirmados',()=>{
  cy.get('#Taxa > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Taxa > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarCréditoPagamentosConfirmados',()=>{
  cy.get('#Credito > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Credito > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarOperacoesPagamentosConfirmados',()=>{
  cy.get('#Operacoes > div > div:nth-child(1) > span').should('be.visible');
  cy.get('#Operacoes > div > div:nth-child(1) > span').click();
})
Cypress.Commands.add('validarVendasPagasPagamentosConfirmados',()=>{
  cy.get('#VendasPagas > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#VendasPagas > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarVendasLiquidasPagamentosConfirmados',()=>{
  cy.get('#VendasLiquidas > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#VendasLiquidas > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarVendasRejeitadasPagamentosConfirmados',()=>{
  cy.get('#VendasRejeitadas > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#VendasRejeitadas > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarDebitosPagamentosConfirmados',()=>{
  cy.get('#Debitos > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Debitos > div > div.kt-widget24__details.cardDetails > span').click();

})
Cypress.Commands.add('validarTotalPagoPagamentosConfirmados',()=>{
  cy.get('#TotalPago > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#TotalPago > div > div.kt-widget24__details.cardDetails > span').click();
})

Cypress.Commands.add('validarFiltrosPagamentosConfirmados',()=>{
  cy.get('#dx-col-108').click();
  cy.get('#dx-col-109').click();
  cy.get('#dx-col-111').click();
  cy.get('#dx-col-112').click();
  cy.get('#dx-col-113').click();
  cy.get('#dx-col-114').click();
  cy.get('#dx-col-115').click();
  cy.get('#dx-col-116').click();
  cy.get('#dx-col-117').click();
  cy.get('#dx-col-118').click();
  cy.get('#dx-col-119').click();
  cy.get('#dx-col-120').click();
  cy.get('#dx-col-121').click();
  cy.get('#dx-col-122').click();
  cy.get('#dx-col-123').click();
  cy.get('#dx-col-124').click();
  cy.get('#dx-col-125').click();
  cy.get('#dx-col-126').click();
  cy.get('#dx-col-127').click();
  cy.get('#dx-col-128').click();
  cy.get('#dx-col-129').click();
  cy.get('#dx-col-130').click();
  cy.get('#dx-col-131').click();
  cy.get('#dx-col-132').click();
  cy.get('#dx-col-137').click();
})

Cypress.Commands.add('validarPagamentosConfirmados',()=>{
 cy.validarVendaBrutaPagamentosConfirmados();
 cy.validarTaxaPagamentosConfirmados();
 cy.validarCréditoPagamentosConfirmados();
 cy.validarOperacoesPagamentosConfirmados();
 cy.validarVendasPagasPagamentosConfirmados();
 cy.validarVendasLiquidasPagamentosConfirmados();
 cy.validarVendasRejeitadasPagamentosConfirmados();
 cy.validarDebitosPagamentosConfirmados();
 cy.validarTotalPagoPagamentosConfirmados();
 cy.validarFiltrosPagamentosConfirmados();
})
Cypress.Commands.add('entrarPrevisaodeRecebimentos',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(3) > div > ul > li:nth-child(3) > a > span').click();
  cy.wait(1500);
})
Cypress.Commands.add('validarVendasBrutasPrevisaodeRecebimentos',()=>{
  cy.get('#VendasBrutas > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#VendasBrutas > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarTaxaPrevisaodeRecebimentos',()=>{
  cy.get('#Taxa > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Taxa > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarCreditoPrevisaodeRecebimentos',()=>{
  cy.get('#Credito > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Credito > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarDebitosPrevisaodeRecebimentos',()=>{
  cy.get('#Debitos > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Debitos > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarAtrasadoPrevisaodeRecebimentos',()=>{
  cy.get('#Atrasado > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
})
Cypress.Commands.add('validarAReceberPrevisaodeRecebimentos',()=>{
  cy.get('#AReceber > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#AReceber > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarFiltrosPrevisaodeRecebimentos',()=>{
  cy.get('#dx-col-80').click();
  cy.get('#dx-col-81').click();
  cy.get('#dx-col-82').click();
  cy.get('#dx-col-84').click();
  cy.get('#dx-col-85').click();
  cy.get('#dx-col-86').click();
  cy.get('#dx-col-87').click();
  cy.get('#dx-col-88').click();
  cy.get('#dx-col-89').click();
  cy.get('#dx-col-90').click();
  cy.get('#dx-col-91').click();
  cy.get('#dx-col-92').click();
  cy.get('#dx-col-93').click();
  cy.get('#dx-col-94').click();
  cy.get('#dx-col-95').click();
  cy.get('#dx-col-96').click();
  cy.get('#dx-col-97').click();
  cy.get('#dx-col-98').click();
  cy.get('#dx-col-99').click();
  cy.get('#dx-col-100').click();
  cy.get('#dx-col-101').click();
  cy.get('#dx-col-102').click();
  cy.get('#dx-col-104').click();
  
})
Cypress.Commands.add('validarPrevisaodeRecebimentos',()=>{
  cy.validarVendasBrutasPrevisaodeRecebimentos();
  cy.validarTaxaPrevisaodeRecebimentos();
  cy.validarCreditoPrevisaodeRecebimentos();
  cy.validarDebitosPrevisaodeRecebimentos();
  cy.validarAtrasadoPrevisaodeRecebimentos();
  cy.validarAReceberPrevisaodeRecebimentos();
  cy.validarFiltrosPrevisaodeRecebimentos();
})
Cypress.Commands.add('validarUploadsPrevisaodeRecebimentos',()=>{
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(4) > div > div > div > i').click();
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(5) > div > div > div > i').click();
})




Cypress.Commands.add('entrarPrevisaodeRecebimentosSintetico',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(3) > div > ul > li:nth-child(4) > a > span').click();
  cy.wait(1500);
})
Cypress.Commands.add('validarVendasBrutasPrevisaodeRecebimentosSintetico',()=>{
  cy.get('#VendasBrutas > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#VendasBrutas > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarTaxaPrevisaodeRecebimentosSintetico',()=>{
  cy.get('#Taxa > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Taxa > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarVendasLiquidasPrevisaodeRecebimentosSintetico',()=>{
  cy.get('#VendasLiquidas > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#VendasLiquidas > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarCancelamentoPrevisaodeRecebimentosSintetico',()=>{
  cy.get('#Cancelamento > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Cancelamento > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarAtrasadoPrevisaodeRecebimentosSintetico',()=>{
  cy.get('#Atrasado > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Atrasado > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarCreditoPrevisaodeRecebimentosSintetico',()=>{
  cy.get('#Credito > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Credito > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarDebitosPrevisaodeRecebimentosSintetico',()=>{
  cy.get('#Debitos > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#Debitos > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarAReceberPrevisaodeRecebimentosSintetico',()=>{
  cy.get('#AReceber > div > div.kt-widget24__details.cardDetails > span').should('be.visible');
  cy.get('#AReceber > div > div.kt-widget24__details.cardDetails > span').click();
})
Cypress.Commands.add('validarFiltrosPrevisaodeRecebimentosSintetico',()=>{
  cy.get('#dx-col-21').click();
  cy.get('#dx-col-22').click();
  cy.get('#dx-col-23').click();
  cy.get('#dx-col-24').click();
  cy.get('#dx-col-26').click();
  cy.get('#dx-col-27').click();
  cy.get('#dx-col-28').click();
  cy.get('#dx-col-29').click();
})
Cypress.Commands.add('validarPrevisaodeRecebimentosSintetico',()=>{
  cy.validarVendasBrutasPrevisaodeRecebimentosSintetico();
  cy.validarTaxaPrevisaodeRecebimentosSintetico();
  cy.validarVendasLiquidasPrevisaodeRecebimentosSintetico();
  cy.validarCancelamentoPrevisaodeRecebimentosSintetico();
  cy.validarAtrasadoPrevisaodeRecebimentosSintetico();
  cy.validarCreditoPrevisaodeRecebimentosSintetico();
  cy.validarDebitosPrevisaodeRecebimentosSintetico();
  cy.validarAReceberPrevisaodeRecebimentosSintetico();
  cy.validarFiltrosPrevisaodeRecebimentosSintetico();
})


Cypress.Commands.add('validarUploadsPrevisaodeRecebimentosSintetico',()=>{
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(4) > div > div > div > i').click();
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(5) > div > div > div').click();
})


Cypress.Commands.add('entrarPagamentosporContaBancaria',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(3) > div > ul > li:nth-child(6) > a > span').click();
  cy.wait(1500);
})
Cypress.Commands.add('validarFiltrosPagamentosporContaBancaria',()=>{
  cy.get('#dx-col-17').click();
  cy.get('#dx-col-18').click();
  cy.get('#dx-col-19').click();
  cy.get('#dx-col-20').click();
  cy.get('#dx-col-21').click();
  cy.get('#dx-col-22').click();
  cy.get('#dx-col-23').click();
  cy.get('#dx-col-24').click();
})
Cypress.Commands.add('validarPagamentosporContaBancaria',()=>{
  cy.get('#gridPrincipal > div > div.dx-datagrid-total-footer.dx-datagrid-nowrap > div > table > tbody > tr > td:nth-child(6) > div').should('be.visible');
  cy.validarFiltrosPagamentosporContaBancaria();
})
Cypress.Commands.add('validarUploadsPagamentosporContaBancaria',()=>{
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(4) > div > div > div > i').click();
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(5) > div > div > div > i').click();
})


Cypress.Commands.add('entrarRelatoriodeBaixa',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(3) > div > ul > li:nth-child(7) > a > span').click();
  cy.wait(1500);
})
Cypress.Commands.add('validarFiltrosRelatoriodeBaixa',()=>{
  cy.get("#dx-col-48").click();
  cy.get("#dx-col-49").click();
  cy.get("#dx-col-50").click();
  cy.get("#dx-col-51").click();
  cy.get("#dx-col-52").click();
  cy.get("#dx-col-53").click();
  cy.get("#dx-col-54").click();
  cy.get("#dx-col-56").click();
  cy.get("#dx-col-57").click();
  cy.get("#dx-col-58").click();
  cy.get("#dx-col-59").click();
  cy.get("#dx-col-61").click();
  cy.get("#dx-col-62").click();
})
Cypress.Commands.add('validarRelatoriodeBaixa',()=>{
  cy.validarFiltrosRelatoriodeBaixa();
})


//Tela taxa
Cypress.Commands.add('entrarTaxa',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(4) > a > i').click();
})
Cypress.Commands.add('entrarCadastrodeTaxas',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(4) > div > ul > li:nth-child(1) > a > span').click();
})
Cypress.Commands.add('validarFiltrosCadastrodeTaxas',()=>{
  cy.get('#dx-col-19').click();
  cy.get('#dx-col-20').click();
  cy.get('#dx-col-22').click();
  cy.get('#dx-col-23').click();
  cy.get('#dx-col-24').click();
  cy.get('#dx-col-25').click();
  cy.get('#dx-col-26').click();
  cy.get('#dx-col-27').click();
})
Cypress.Commands.add('validarCadastrodeTaxas',()=>{
 cy.validarFiltrosCadastrodeTaxas();
})
Cypress.Commands.add('validarUploadsCadastrodeTaxas',()=>{
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(4) > div > div > div > i').click();
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(5) > div > div > div > i').click();
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(7) > div > div > div > i').click();
})
Cypress.Commands.add('entrarRelatoriodeTaxas',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(4) > div > ul > li:nth-child(2) > a > span').click();
  cy.wait(1500);
})
Cypress.Commands.add('validarFiltrosRelatoriodeBaixa',()=>{
  cy.get('#dx-col-35').click();
  cy.get('#dx-col-36').click();
  cy.get('#dx-col-37').click();
  cy.get('#dx-col-38').click();
  cy.get('#dx-col-39').click();
  cy.get('#dx-col-40').click();
  cy.get('#dx-col-41').click();
  cy.get('#dx-col-42').click();
  cy.get('#dx-col-43').click();
  cy.get('#dx-col-44').click();
  cy.get('#dx-col-45').click();
  cy.get('#dx-col-46').click();
  cy.get('#dx-col-47').click();
  cy.get('#dx-col-48').click();
  })
  Cypress.Commands.add('validarConciliacaodeTaxas',()=>{
    cy.validarFiltrosRelatoriodeBaixa();
  })
Cypress.Commands.add('validarUploadsConciliacaodeTaxas',()=>{
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(4) > div > div > div > i').click();
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(5) > div > div > div > i').click();
})


//Tela Banco
Cypress.Commands.add('entrarBanco',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(6) > a > i').click();
})
Cypress.Commands.add('entrarConciliacaoBancaria',()=>{
  cy.get('#kt_aside_menu > ul > li:nth-child(6) > div > ul > li > a > span').click();
})
Cypress.Commands.add('selecionarRefoConciliacaoBancaria', (valorInserido) => {
  cy.get('#dropDownSearch > div.dx-dropdowneditor-input-wrapper.dx-selectbox-container > div > div.dx-texteditor-buttons-container > span > span').click();
  cy.wait(1000);
  cy.get('#dropDownSearch > div.dx-dropdowneditor-input-wrapper.dx-selectbox-container > div > div.dx-texteditor-input-container > input').click();
  cy.get('#dropDownSearch > div.dx-dropdowneditor-input-wrapper.dx-selectbox-container > div > div.dx-texteditor-input-container > input') .type(valorInserido).wait(1000).type('{enter}');
})
Cypress.Commands.add('validarFiltrosConciliacaoBancaria',()=>{
  cy.get('#dx-col-25').click();
  cy.get('#dx-col-26').click();
  cy.get('#dx-col-27').click();
  cy.get('#dx-col-28').click();
  cy.get('#dx-col-29').click();
  cy.get('#dx-col-30').click();
  cy.get('#dx-col-31').click();
  cy.get('#dx-col-32').click();
  cy.get('#dx-col-33').click();
  cy.get('#dx-col-34').click();
  cy.get('#dx-col-35').click();

})

Cypress.Commands.add('validarUploadsConciliacaobancaria',()=>{
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(4) > div > div > div > i').click();
  cy.get('#gridPrincipal > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-after > div:nth-child(5) > div > div > div > i').click();
})

Cypress.Commands.add('validarCard1',()=>{
  cy.get('#card-detalhes-banco > div:nth-child(1) > div > div.kt-widget24__details > div.bancariaPrevisto > span.kt-widget24__stats.kt-font-brand.bancariaValorPrevisto').should('be.visible');
  cy.get('#btnExpandCardBanco0').click();
  cy.get('#btnExpandCardBanco0').click();

})
Cypress.Commands.add('validarCard2',()=>{
  cy.get('#card-detalhes-banco > div:nth-child(2) > div > div.kt-widget24__details > div.bancariaPrevisto > span.kt-widget24__stats.kt-font-brand.bancariaValorPrevisto').should('be.visible');
  cy.get('#btnExpandCardBanco748').click();
  cy.get('#btnExpandCardBanco748').click();
})
Cypress.Commands.add('validarCard3',()=>{
  cy.get('#card-detalhes-banco > div:nth-child(3) > div > div.kt-widget24__details > div.bancariaPrevisto > span.kt-widget24__stats.kt-font-brand.bancariaValorPrevisto').should('be.visible');
  cy.get('#btnExpandCardBanco1').click();
  cy.get('#btnExpandCardBanco1').click();
})
Cypress.Commands.add('validarCard4',()=>{
  cy.get('#card-detalhes-banco > div:nth-child(4) > div > div.kt-widget24__details > div.bancariaPrevisto > span.kt-widget24__stats.kt-font-brand.bancariaValorPrevisto').should('be.visible');
  cy.get('#btnExpandCardBanco237').click();
  cy.get('#btnExpandCardBanco237').click();
})
Cypress.Commands.add('validarAdquirente',()=>{
  cy.get('#btnSwitchOperadora > span').click();
})
Cypress.Commands.add('validarCardsAdquirente',()=>{
  cy.get('#card-detalhes-operadora > div:nth-child(1) > div > div.kt-widget24__details > div.bancariaPrevisto > span.kt-widget24__stats.kt-font-brand.bancariaValorPrevisto').should('be.visible');
  cy.get('#btnExpandCardOperadora0').click();
  cy.get('#btnExpandCardOperadora0').click();
})
Cypress.Commands.add('validarIconeUpload',()=>{ 
  cy.get('#btnUploadBancaria').click();
  cy.wait(2000);
  cy.get('#modal-header > button').click();
})
Cypress.Commands.add('validarConferenciaBancaria',()=>{
  cy.validarCard1();
  cy.validarCard2();
  cy.validarCard3();
  cy.validarCard4();
  cy.validarAdquirente();
  cy.validarCardsAdquirente();
  cy.validarIconeUpload();
  cy.validarFiltrosConciliacaoBancaria();
})
