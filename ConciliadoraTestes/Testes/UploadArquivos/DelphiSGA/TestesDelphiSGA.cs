﻿using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.UploadArquivos.DelphiSGA
{
    [TestClass]
    public class TesteDelphiSGA : MetodosDelphiSGA
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosDelphiSGAp()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirDelphiSGA();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            ValidaCarregamento();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
