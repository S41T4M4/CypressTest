using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.UploadArquivos.Shop9
{
    [TestClass]
    public class TesteShop9 : MetodosShop9
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosShop9()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirShop9();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            ValidaCarregamento();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
