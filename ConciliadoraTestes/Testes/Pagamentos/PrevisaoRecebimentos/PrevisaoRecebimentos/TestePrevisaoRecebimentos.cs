using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Pagamentos.PrevisaoRecebimentos.PrevisaoRecebimentos
{
    [TestClass]
    public class TestePrevisaoRecebimentos : MetodosPrevisaoRecebimentos
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosPagamentosConfirmados()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirPrevisaoRecebimentos();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            ValidaCards();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            ValidaGridRecebimentos();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            ValidaGridDebitos();
            encerra.FechaDriver();
        }
    }
}
