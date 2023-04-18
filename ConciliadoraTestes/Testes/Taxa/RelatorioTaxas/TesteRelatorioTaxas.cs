using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Taxa.RelatorioTaxas
{ 
    [TestClass]
    public class TesteRelatorioTaxas : MetodosRelatorioTaxas
{
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosRelatorioTaxas()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirRelatorioTaxas();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
