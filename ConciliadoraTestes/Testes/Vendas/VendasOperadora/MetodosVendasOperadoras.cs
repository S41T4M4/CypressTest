using ConciliadoraTestes.Metodos;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium.Support.UI;
using SeleniumExtras.WaitHelpers;

namespace ConciliadoraTestes.Testes.Vendas.VendasOperadoras
{
    public class MetodosVendasOperadoras
    {
        protected Driver inicializaDriver = new Driver();
        

        public void AbrirVendasOperadoras()
        {
            Actions acao = new Actions(inicializaDriver.ObterDriver()); //Cria uma variável do tipo ação para automação de ações do teclado e mouse
            IWebElement barra = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='kt_aside_menu']")); // o id foi pego através de copiar o XPATH.
            acao.MoveToElement(barra).Perform();  // usa-se o moveToElement para mover o ponteiro para o elemento e utiliza-se o Perform para executar a ação

            IWebElement vendas = inicializaDriver.ObterDriver().FindElement(By.XPath("//i[@class='kt-menu__link-icon menuSideIcon fas fa-search-dollar']")); // Localiza o ícone de pagamentos e clica
            vendas.Click();

            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            IWebElement vendasOperadoras = inicializaDriver.ObterDriver().FindElement(By.XPath("//span[text()='Vendas Operadoras']")); //Localiza pelo texto exibido
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            vendasOperadoras.Click();
        }
        public void ValidaCarregamento()
        {
            var wait = new WebDriverWait(inicializaDriver.ObterDriver(), TimeSpan.FromSeconds(10));
            IWebElement element = wait.Until(ExpectedConditions.ElementIsVisible(By.Id("gridPrincipal")));

            if (!element.Displayed) //Se o element NÃO for exibido
            {
                inicializaDriver.FalharTeste("O elemento não carregou");
            }
        }
    }
}
