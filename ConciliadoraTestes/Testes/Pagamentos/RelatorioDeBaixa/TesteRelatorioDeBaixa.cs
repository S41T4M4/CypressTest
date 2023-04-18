using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Pagamentos.RelatorioDeBaixa
{
    [TestClass]
    public class TesteRelatorioDeBaixa : MetodosRelatorioDeBaixa
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosRelatorioDeBaixa()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirRelatorioDeBaixa();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
