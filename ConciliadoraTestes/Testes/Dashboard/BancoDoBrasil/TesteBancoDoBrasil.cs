using ConciliadoraTestes.Metodos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConciliadoraTestes.Testes.Dashboard.BancoDoBrasil
{
    [TestClass]
    public class TesteBancoDoBrasil : MetodosBancoDoBrasil
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosBancoDoBrasil()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            AbrirBancoDoBrasil();
            encerra.FechaDriver();
        }
    }
}
