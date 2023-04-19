using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Admistrativo.CampanhaBTG
{
    [TestClass]
    public class TesteCampanhaBTG : MetodosCampanhaBTG
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosCampanhaBTG()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirCampanhaBTG();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
