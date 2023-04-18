using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Pagamentos.PrevisaoSintetico
{
    [TestClass]
    public class TestePrevisaoSintetico : MetodosPrevisaoSintetico
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosPrevisaoSintetico()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirPrevisaoSintetico();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
