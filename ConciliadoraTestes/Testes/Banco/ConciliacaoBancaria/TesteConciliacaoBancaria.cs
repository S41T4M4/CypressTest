using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Banco.ConciliacaoBancaria
{
    [TestClass]
    public class TesteConciliacaoBancaria : MetodosConciliacaoBancaria
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosConciliacaoBancaria()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirConciliacaoBancaria();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            ValidaCarregamento();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            //encerra.FechaDriver();
        }
    }
}
