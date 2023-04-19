using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Admistrativo.ArquivosEstabelecimento
{ 
    [TestClass]
    public class TesteArquivosEstabelecimento : MetodosArquivosEstabelecimento
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosArquivosEstabelecimento()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirArquivosEstabelecimento();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            ValidaCarregamento();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
