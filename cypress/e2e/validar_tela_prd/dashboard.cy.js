describe('verificar dashboard', () => {
    beforeEach(() => {
      cy.login()
      cy.visit('/ManagementDashboard')

    })
it('Validar tela Dashboard Gerencial', () => {
    cy.get('.kt-header-mobile__logo > img').click()
     cy.entrarDashboard();
    cy.entrarDashboardGerencial();
    cy.selecionarRefo('Empresa Modelo');
    cy.selecionarCalendario();
    cy.validarDashboard();
    cy.validarUploadsDashboardGerencial();
  })
});