using ConciliadoraTestes.Metodos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConciliadoraTestes.Testes.Cadastro.GrupoEmpresas
{
    [TestClass]
    public class TesteGrupoEmpresas : MetodosGrupoEmpresas
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosGrupoEmpresas()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            AbrirGrupoEmpresas();
            ValidaTela();
            //ValidaCreate();
            encerra.FechaDriver();
        }
    }
}
