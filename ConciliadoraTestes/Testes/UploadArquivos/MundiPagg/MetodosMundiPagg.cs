using ConciliadoraTestes.Metodos;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using SeleniumExtras.WaitHelpers;

namespace ConciliadoraTestes.Testes.UploadArquivos.MundiPagg
{
    public class MetodosMundiPagg
    {
        protected Driver inicializaDriver = new Driver();
        

        public void AbrirMundiPagg()
        {
            Actions acao = new Actions(inicializaDriver.ObterDriver());
            IWebElement barra = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='kt_aside_menu']"));
            acao.MoveToElement(barra).Perform();

            IWebElement uploadArquivos = inicializaDriver.ObterDriver().FindElement(By.XPath("//i[@class='kt-menu__link-icon menuSideIcon fas fa-file-upload']"));
            uploadArquivos.Click();

            inicializaDriver.Scroll(barra, 0, 1600); //Chama o método de rolagem, passando como parâmentros a variável barra, e os valores para rolagem, em pixels

            IWebElement mundiPagg = inicializaDriver.ObterDriver().FindElement(By.XPath("//span[text()='MundiPagg']"));
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            mundiPagg.Click();
        }
        public void ValidaCarregamento()
        {
            var wait = new WebDriverWait(inicializaDriver.ObterDriver(), TimeSpan.FromSeconds(10));
            IWebElement element = wait.Until(ExpectedConditions.ElementIsVisible(By.CssSelector(".dx-button-content")));

            if (!element.Displayed) //Se o element NÃO for exibido
            {
                inicializaDriver.FalharTeste("O elemento não carregou");
            }
        }
    }
}
