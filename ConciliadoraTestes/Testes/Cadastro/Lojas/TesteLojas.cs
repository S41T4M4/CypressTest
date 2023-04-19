﻿using ConciliadoraTestes.Metodos;

namespace ConciliadoraTestes.Testes.Cadastro.Lojas
{
    [TestClass]
    public class TesteLojas : MetodosLojas
    {
        private Login _login = new Login();
        private EncerraDriver encerra = new EncerraDriver();

        [TestMethod]
        public void ChamaMetodosLojas()
        {
            inicializaDriver.Iniciar();
            _login.RealizaLogin();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            AbrirLojas();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            ValidaCarregamento();
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            encerra.FechaDriver();
        }
    }
}
