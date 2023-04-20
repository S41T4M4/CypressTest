using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.UploadArquivos.Cshop
{
    [TestClass]
    public class TesteCshop : MetodosCshop
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosCshop()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirCshop();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            ValidaCarregamento();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
