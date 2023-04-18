using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Pagamentos.PagamentosConfirmados
{
    /// <summary>
    /// Na variável _login, é instanciada (criada uma nova cópia) da classe Login na variável _login, que vem em seu estado inicial (vazia).
    /// O método ChamaMetodosPagamentosConfirmados() é responsável por chamar todos os métodos necessários para testar a tela.
    /// </summary>

    [TestClass]
    public class TestePagamentosConfirmados : MetodosPagamentosConfirmados
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosPagamentosConfirmados()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            AbrirPagamentosConfirmados();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            ValidaCards();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            ValidaGrid();
            encerra.FechaDriver();
        }
    }
}
