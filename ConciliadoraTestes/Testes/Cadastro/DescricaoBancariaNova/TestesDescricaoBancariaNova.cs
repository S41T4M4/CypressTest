using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Cadastro.DescricaoBancariaNova
{
    [TestClass]
    public class TesteDescricaoBancariaNova : MetodosDescricaoBancariaNova
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosDescricaoBancariaNova()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirDescricaoBancariaNova();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            ValidaCarregamento();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
