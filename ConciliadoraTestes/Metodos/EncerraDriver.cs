using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConciliadoraTestes.Metodos
{
    [TestClass]
    public class EncerraDriver
    {

        private InicializaDriver _inicializar = new InicializaDriver();

        [TestCleanup]
        public void FechaDriver()
        {
            _inicializar.ObterDriver().Close();
        }

        [TestCleanup]
        public void FalharTeste() //Sobrecarga
        {
            FechaDriver(); //O método FalharTeste() chama o método FechaDriver() declarado acima e gera a falha
            Assert.Fail();
        }

        [TestCleanup]
        public void FalharTeste(string mensagem)
        {
            FechaDriver();
            Assert.Fail(mensagem);
        }
    }
}
