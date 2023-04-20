using ConciliadoraTestes.Metodos;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using SeleniumExtras.WaitHelpers;

namespace ConciliadoraTestes.Testes.UploadArquivos.Consuldata
{
    public class MetodosConsuldata
    {
        protected InicializaDriver inicializaDriver = new InicializaDriver();
        private EncerraDriver encerra = new EncerraDriver();

        public void AbrirConsuldata()
        {
            Actions acao = new Actions(inicializaDriver.ObterDriver());
            IWebElement barra = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='kt_aside_menu']"));
            acao.MoveToElement(barra).Perform();

            IWebElement uploadArquivos = inicializaDriver.ObterDriver().FindElement(By.XPath("//i[@class='kt-menu__link-icon menuSideIcon fas fa-file-upload']"));
            uploadArquivos.Click();

            inicializaDriver.Scroll(barra, 0, 400); //Chama o método de rolagem, passando como parâmentros a variável barra, e os valores para rolagem, em pixels

            IWebElement consuldata = inicializaDriver.ObterDriver().FindElement(By.XPath("//span[text()='Consuldata']"));
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            consuldata.Click();
        }
        public void ValidaCarregamento()
        {
            var wait = new WebDriverWait(inicializaDriver.ObterDriver(), TimeSpan.FromSeconds(10));
            IWebElement element = wait.Until(ExpectedConditions.ElementIsVisible(By.CssSelector(".dx-button-content")));

            if (!element.Displayed) //Se o element NÃO for exibido
            {
                encerra.FalharTeste("O elemento não carregou");
            }
        }
    }
}
