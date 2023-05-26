using ConciliadoraTestes.Metodos;
using OpenQA.Selenium;

namespace ConciliadoraTestes.Testes.Admistrativo.ReprocessamentoProcesso
{
    [TestClass]
    public class TesteReprocessamentoProcesso : MetodosReprocessamentoProcesso
    {
        private Login _login = new Login();
        

        [TestMethod]
        public void ChamaMetodosReprocessamentoProcesso()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            try
            {
                AbrirReprocessamentoProcesso();
                inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
                ValidaCarregamento();
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
