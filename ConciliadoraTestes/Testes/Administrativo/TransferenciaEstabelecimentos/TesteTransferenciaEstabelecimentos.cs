using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Admistrativo.TransferenciaEstabelecimentos
{
    [TestClass]
    public class TesteTransferenciaEstabelecimentos : MetodosTransferenciaEstabelecimentos
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosTransferenciaEstabelecimentos()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirTransferenciaEstabelecimentos();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            ValidaCarregamento();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
