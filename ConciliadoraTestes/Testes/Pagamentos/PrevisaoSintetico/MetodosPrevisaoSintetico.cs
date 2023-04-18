using ConciliadoraTestes.Metodos;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;

namespace ConciliadoraTestes.Testes.Pagamentos.PrevisaoSintetico
{
    public class MetodosPrevisaoSintetico
    {
        protected InicializaDriver inicializaDriver = new InicializaDriver();
        public void AbrirPrevisaoSintetico()
        {
            Actions acao = new Actions(inicializaDriver.ObterDriver());
            IWebElement barra = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='kt_aside_menu']"));
            acao.MoveToElement(barra).Perform();

            IWebElement pagamentos = inicializaDriver.ObterDriver().FindElement(By.XPath("//i[@class='kt-menu__link-icon menuSideIcon fas fa-money-check-alt']"));
            pagamentos.Click();

            IWebElement previsaoSintetico = inicializaDriver.ObterDriver().FindElement(By.XPath("//span[text()='Previsão de Recebimentos Sintético']"));
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            previsaoSintetico.Click();
        }
    }
}
