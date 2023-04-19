using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Admistrativo.ReprocessamentoConciliacaoBancaria
{
    [TestClass]
    public class TesteReprocessamentoConciliacaoBancaria : MetodosReprocessamentoConciliacaoBancaria
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosReprocessamentoConciliacaoBancaria()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirReprocessamentoConciliacaoBancaria();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            ValidaCarregamento();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
