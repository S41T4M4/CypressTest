using ConciliadoraTestes.Metodos;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;

namespace ConciliadoraTestes.Testes.Admistrativo.ArquivosDesconhecidos
{
    public class MetodosArquivosDesconhecidos
    {
        protected InicializaDriver inicializaDriver = new InicializaDriver();
        public void AbrirArquivosDesconhecidos()
        {
            Actions acao = new Actions(inicializaDriver.ObterDriver());
            IWebElement barra = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='kt_aside_menu']"));
            acao.MoveToElement(barra).Perform();

            IWebElement administrativo = inicializaDriver.ObterDriver().FindElement(By.XPath("//i[@class='kt-menu__link-icon menuSideIcon fas fa-calculator']"));
            administrativo.Click();

            IWebElement arquivosDesconhecidos = inicializaDriver.ObterDriver().FindElement(By.XPath("//span[text()='Arquivos Desconhecidos']"));
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            arquivosDesconhecidos.Click();
        }
    }
}
