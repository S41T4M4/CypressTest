using ConciliadoraTestes.Metodos;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using SeleniumExtras.WaitHelpers;

namespace ConciliadoraTestes.Testes.Admistrativo.CampanhaBTG
{
    public class MetodosCampanhaBTG
    {
        protected InicializaDriver inicializaDriver = new InicializaDriver();

        public void AbrirCampanhaBTG()
        {
            Actions acao = new Actions(inicializaDriver.ObterDriver());
            IWebElement barra = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='kt_aside_menu']"));
            acao.MoveToElement(barra).Perform();

            IWebElement administrativo = inicializaDriver.ObterDriver().FindElement(By.XPath("//i[@class='kt-menu__link-icon menuSideIcon fas fa-calculator']"));
            administrativo.Click();

            inicializaDriver.Scroll(barra, 0, 200);

            IWebElement campanhaBTG = inicializaDriver.ObterDriver().FindElement(By.XPath("//span[text()='Campanha BTG']"));
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            campanhaBTG.Click();
        }
    }
}
