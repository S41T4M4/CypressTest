using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Admistrativo.MinhasAdquirentes
{
    [TestClass]
    public class TesteMinhasAdquirentes : MetodosMinhasAdquirentes
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosMinhasAdquirentes()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirMinhasAdquirentes();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
