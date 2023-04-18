using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Admistrativo.MonitorFluxoConcessao
{
    [TestClass]
    public class TesteMonitorFluxoConcessao : MetodosMonitorFluxoConcessao
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosMonitorFluxoConcessao()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirMonitorFluxoConcessao();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
