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
        private Driver _inicializar = new Driver();

        public void RealizaLogin()
        {
            try
            {
                Thread.Sleep(5000); //Login antigo
                var configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
                IWebElement campoEmail = _inicializar.ObterDriver().FindElement(By.CssSelector("input#login2"));
                campoEmail.SendKeys(configuration.GetValue<string>("Logar:Usuario"));

                //IWebElement btnProximo = _inicializar.ObterDriver().FindElement(By.XPath("//button[@id='btProximo']")); //SSO
                //btnProximo.Click();
                //_inicializar.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30); //Aguarda o elemento seguinte aparecer na tela para continuar com o fluxo.

                IWebElement campoSenha = _inicializar.ObterDriver().FindElement(By.CssSelector("input#password"));
                campoSenha.SendKeys(configuration.GetValue<string>("Logar:Senha"));

                _inicializar.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

                IWebElement btnEntrar = _inicializar.ObterDriver().FindElement(By.CssSelector("button#btnLogin"));
                btnEntrar.Click();
            }
            catch (NoSuchElementException ex)
            {
                // Lidere com a exceção quando o elemento não for encontrado
                _inicializar.SetContinuarExecucao(false); //impede a execução dos outros testes caso o login falhe
                _inicializar.FalharTeste(ex.Message);
            }
            catch (ElementNotVisibleException ex)
            {
                // Lidere com a exceção quando o elemento não estiver visível
                _inicializar.SetContinuarExecucao(false); //impede a execução dos outros testes caso o login falhe
                _inicializar.FalharTeste(ex.Message);
            }
            catch (Exception ex)
            {
                _inicializar.SetContinuarExecucao(false); //impede a execução dos outros testes caso o login falhe
                _inicializar.FalharTeste(ex.Message);
            }
        }
    }
}
