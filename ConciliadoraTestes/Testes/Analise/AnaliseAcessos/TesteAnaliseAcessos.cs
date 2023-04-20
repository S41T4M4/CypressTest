using ConciliadoraTestes.Metodos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConciliadoraTestes.Testes.Analise.AnaliseAcessos
{
    [TestClass]
    public class TesteAnaliseAcessos : MetodosAnaliseAcessos
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosAnaliseAcessos()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            AbrirAnaliseAcessos();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            ValidaCarregamento();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
