using ConciliadoraTestes.Metodos;
using OpenQA.Selenium;

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
        
        [TestMethod]
        public void ChamaMetodosPagamentosConfirmados()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            try
            {
                AbrirPagamentosConfirmados();
                inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
                ValidaCards();
                inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
                ValidaGrid();
                inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
                inicializaDriver.FechaDriver();
            }
            catch (NoSuchElementException ex)
            {
                // Lidere com a exceção quando o elemento não for encontrado
                inicializaDriver.FalharTeste(ex.Message);
            }
            catch (ElementNotVisibleException ex)
            {
                // Lidere com a exceção quando o elemento não estiver visível
                inicializaDriver.FalharTeste(ex.Message);
            }
            catch (Exception ex)
            {
                inicializaDriver.FalharTeste(ex.Message);
            }
        }
    }
}
