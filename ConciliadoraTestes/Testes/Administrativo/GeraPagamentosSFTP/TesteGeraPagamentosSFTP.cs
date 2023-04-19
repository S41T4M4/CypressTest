using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Admistrativo.GeraPagamentosSFTP
{ 
    [TestClass]
    public class TesteGeraPagamentosSFTP : MetodosGeraPagamentosSFTP
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosGeraPagamentosSFTP()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirGeraPagamentosSFTP();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            ValidaCarregamento();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
