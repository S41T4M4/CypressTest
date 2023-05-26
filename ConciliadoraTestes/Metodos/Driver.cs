using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium;
using Microsoft.Extensions.Configuration;
using OpenQA.Selenium.Interactions;

namespace ConciliadoraTestes.Metodos
{
    /// <summary>
    /// DOCUMENTAÇÃO:
    /// O método Iniciar() realiza a função de iniciar o driver do navegador (Chrome), acessar a URL e grava o estado final dessa operação na variável _driver.
    /// O método ObterDriver() retorna a variável _driver, podendo o valor gravado nessa variável ser utilizado em outras partes do código.
    /// </summary>
    
    [TestClass]
    public class Driver
    {        
        private static IWebDriver _driver;
        public WebDriverWait espera;
        private static bool _continuarExecucao = true;  //variável que armazena se ele deve continuar os testes

        public void SetContinuarExecucao(bool valor)  //Altera o valor da variavel continuarExecucao
        {
            _continuarExecucao = valor;
        }
        #region TestInitialize
        [TestInitialize]
        public void Iniciar() 
        {
            if (!_continuarExecucao)  //Testa se deve continuar ou não a execução dos testes.
            {
                throw new AssertInconclusiveException("Um teste anterior falhou. Pulando este teste");
            }

            var configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
            _driver = new ChromeDriver(configuration.GetValue<string>("Inicializar:DriverChrome"));
            espera = new WebDriverWait(_driver, TimeSpan.FromSeconds(10));

            _driver.Manage().Window.Maximize();
            _driver.Navigate().GoToUrl(configuration.GetValue<string>("Inicializar:URL"));
        }

        public IWebDriver ObterDriver()
        {
            return _driver;
        }

        public void Scroll(IWebElement barra, int horizontal, int vertical) //Método para rolar um elemento da tela.
        {
            WheelInputDevice.ScrollOrigin scrollOrigin = new WheelInputDevice.ScrollOrigin
            {
                Element = barra
            };
            new Actions(_driver).ScrollFromOrigin(scrollOrigin, horizontal, vertical).Perform();
        }
        #endregion
        #region TestCleanup
        [TestCleanup]
        public void FechaDriver()
        {
            _driver.Close();
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
#endregion