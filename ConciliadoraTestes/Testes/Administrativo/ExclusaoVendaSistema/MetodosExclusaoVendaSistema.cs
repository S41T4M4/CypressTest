using ConciliadoraTestes.Metodos;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using SeleniumExtras.WaitHelpers;

namespace ConciliadoraTestes.Testes.Admistrativo.ExclusaoVendaSistema
{
    public class MetodosExclusaoVendaSistema
    {
        protected InicializaDriver inicializaDriver = new InicializaDriver();
        private EncerraDriver encerra = new EncerraDriver();

        public void AbrirExclusaoVendaSistema()
        {
            Actions acao = new Actions(inicializaDriver.ObterDriver());
            IWebElement barra = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='kt_aside_menu']"));
            acao.MoveToElement(barra).Perform();

            IWebElement administrativo = inicializaDriver.ObterDriver().FindElement(By.XPath("//i[@class='kt-menu__link-icon menuSideIcon fas fa-calculator']"));
            administrativo.Click();

            inicializaDriver.Scroll(barra, 0, 200);

            IWebElement exclusaoVendaSistema = inicializaDriver.ObterDriver().FindElement(By.XPath("//span[text()='Exclusão Venda Sistema']"));
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            exclusaoVendaSistema.Click();
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
