using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Admistrativo.LocalizaEstabelecimento
{ 
    [TestClass]
    public class TesteLocalizaEstabelecimento : MetodosLocalizaEstabelecimento
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosLocalizaEstabelecimento()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirLocalizaEstabelecimento();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            ValidaCarregamento();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
