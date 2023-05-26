using ConciliadoraTestes.Metodos;
using OpenQA.Selenium;

namespace ConciliadoraTestes.Testes.Pagamentos.PrevisaoRecebimentos
{
    [TestClass]
    public class TestePrevisaoRecebimentos : MetodosPrevisaoRecebimentos
    {
        private Login _login = new Login();
        

        [TestMethod]
        public void ChamaMetodosPrevisaoRecebimentos()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            try
            {
                AbrirPrevisaoRecebimentos();
                inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
                ValidaCards();
                inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
                ValidaGridDebitos();
                inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
                ValidaGridRecebimentos();
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
