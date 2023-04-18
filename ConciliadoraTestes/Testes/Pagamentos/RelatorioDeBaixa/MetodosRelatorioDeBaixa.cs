using ConciliadoraTestes.Metodos;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;

namespace ConciliadoraTestes.Testes.Pagamentos.RelatorioDeBaixa
{
    public class MetodosRelatorioDeBaixa
    {
        protected InicializaDriver inicializaDriver = new InicializaDriver();
        public void AbrirRelatorioDeBaixa()
        {
            Actions acao = new Actions(inicializaDriver.ObterDriver());
            IWebElement barra = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='kt_aside_menu']"));
            acao.MoveToElement(barra).Perform();

            IWebElement pagamentos = inicializaDriver.ObterDriver().FindElement(By.XPath("//i[@class='kt-menu__link-icon menuSideIcon fas fa-money-check-alt']"));
            pagamentos.Click();

            IWebElement relatorioDeBaixa = inicializaDriver.ObterDriver().FindElement(By.XPath("//span[text()='Relatório Baixa']"));
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            relatorioDeBaixa.Click();
        }
    }
}
