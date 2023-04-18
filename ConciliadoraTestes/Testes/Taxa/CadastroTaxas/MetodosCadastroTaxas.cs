using ConciliadoraTestes.Metodos;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;

namespace ConciliadoraTestes.Testes.Taxa.CadastroTaxas
{
    public class MetodosCadastroTaxas
    {
        protected InicializaDriver inicializaDriver = new InicializaDriver();
        public void AbrirCadastroTaxas()
        {
            Actions acao = new Actions(inicializaDriver.ObterDriver());
            IWebElement barra = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='kt_aside_menu']"));
            acao.MoveToElement(barra).Perform();

            IWebElement taxa = inicializaDriver.ObterDriver().FindElement(By.XPath("//i[@class='kt-menu__link-icon menuSideIcon fas fa-percent']"));
            taxa.Click();

            IWebElement cadastroTaxas = inicializaDriver.ObterDriver().FindElement(By.XPath("//span[text()='Cadastro Taxas']"));
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            cadastroTaxas.Click();
        }
    }
}
