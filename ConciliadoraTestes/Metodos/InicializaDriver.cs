using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using Microsoft.Extensions.Configuration;

namespace ConciliadoraTestes.Metodos
{
    /// <summary>
    /// DOCUMENTAÇÃO:
    /// O método Iniciar() realiza a função de iniciar o driver do navegador (Chrome), acessar a URL e grava o estado final dessa operação na variável _driver.
    /// O método ObterDriver() retorna a variável _driver, podendo o valor gravado nessa variável ser utilizado em outras partes do código.
    /// </summary>
    
    [TestClass]
    public class InicializaDriver
    {        
        private static IWebDriver _driver;
        public WebDriverWait espera;

        [TestInitialize]
        public void Iniciar() 
        {
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
    }
}
