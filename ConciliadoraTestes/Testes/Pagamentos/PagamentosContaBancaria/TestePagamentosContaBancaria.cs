using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Pagamentos.PagamentosContaBancaria
{
    [TestClass]
    public class TestePagamentosContaBancaria : MetodosPagamentosContaBancaria
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosPagamentosContaBancaria()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirPagamentosContaBancaria();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
