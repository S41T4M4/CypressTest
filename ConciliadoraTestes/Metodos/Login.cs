using Microsoft.Extensions.Configuration;
using OpenQA.Selenium;

namespace ConciliadoraTestes.Metodos
{
    /// <summary>
    /// DOCUMENTAÇAO:
    /// Na variável _inicializar, é instanciada (criada uma nova cópia) da classe InicializarDriver na variável _inicializar, que vem em seu estado inicial (vazia).
    /// O método RealizaLogin() cria uma variável para puxar os dados do appsettings.json, localiza os elementos pelo FindElement e insere os dados passados pelo appsettings pelas SendKeys.
    /// A chamada _inicializar.ObterDriver() chama o método ObterDriver() presente na variável _inicializar, que pertence ao método InicializaDriver. Ele obtem o retorno da variável driver.
    /// </summary>
    
    [TestClass]
    public class Login
    {
        private InicializaDriver _inicializar = new InicializaDriver();

        public void RealizaLogin()
        {
            var configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
            IWebElement campoEmail = _inicializar.ObterDriver().FindElement(By.XPath("//input[@name='Email']"));
            campoEmail.SendKeys(configuration.GetValue<string>("Logar:Usuario"));

            IWebElement btnProximo = _inicializar.ObterDriver().FindElement(By.XPath("//button[@id='btProximo']"));
            btnProximo.Click();

            _inicializar.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30); //Aguarda o elemento seguinte aparecer na tela para continuar com o fluxo.

            IWebElement campoSenha = _inicializar.ObterDriver().FindElement(By.XPath("//input[@name='Senha']"));
            campoSenha.SendKeys(configuration.GetValue<string>("Logar:Senha"));

            IWebElement btnEntrar = _inicializar.ObterDriver().FindElement(By.XPath("//button[@id='btLogin']"));
            btnEntrar.Click();
        }

    }
}
