using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Admistrativo.AcessoSistemaGrupo
{ 
    [TestClass]
    public class TesteAcessoSistemaGrupo : MetodosAcessoSistemaGrupo
{
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosAcessoSistemaGrupo()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirAcessoSistemaGrupo();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            ValidaCarregamento();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
