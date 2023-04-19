using ConciliadoraTestes.Metodos;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using SeleniumExtras.WaitHelpers;

namespace ConciliadoraTestes.Testes.Taxa.RelatorioTaxas
{
    public class MetodosRelatorioTaxas
    {
        protected InicializaDriver inicializaDriver = new InicializaDriver();
        private EncerraDriver encerra = new EncerraDriver();

        public void AbrirRelatorioTaxas()
        {
            Actions acao = new Actions(inicializaDriver.ObterDriver());
            IWebElement barra = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='kt_aside_menu']"));
            acao.MoveToElement(barra).Perform();

            IWebElement taxa = inicializaDriver.ObterDriver().FindElement(By.XPath("//i[@class='kt-menu__link-icon menuSideIcon fas fa-percent']"));
            taxa.Click();

            IWebElement relatorioTaxas = inicializaDriver.ObterDriver().FindElement(By.XPath("//span[text()='Relatório Taxas']"));
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            relatorioTaxas.Click();
        }
        public void ValidaCarregamento()
        {
            var wait = new WebDriverWait(inicializaDriver.ObterDriver(), TimeSpan.FromSeconds(10));
            IWebElement element = wait.Until(ExpectedConditions.ElementIsVisible(By.Id("gridPrincipal")));

            if (!element.Displayed) //Se o element NÃO for exibido
            {
                encerra.FalharTeste("O elemento não carregou");
            }
        }
    }
}
