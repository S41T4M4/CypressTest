using ConciliadoraTestes.Metodos;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using ExpectedConditions = SeleniumExtras.WaitHelpers.ExpectedConditions;

namespace ConciliadoraTestes.Testes.Analise.AnaliseAcessos
{
    public class MetodosAnaliseAcessos
    {
        protected Driver inicializaDriver = new Driver();
        

        public void AbrirAnaliseAcessos()
        {
            Actions acao = new Actions(inicializaDriver.ObterDriver()); //Cria uma variável do tipo ação para automação de ações do teclado e mouse
            IWebElement barra = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='kt_aside_menu']")); // o id foi pego através de copiar o XPATH.
            acao.MoveToElement(barra).Perform();  // usa-se o moveToElement para mover o ponteiro para o elemento e utiliza-se o Perform para executar a ação

            IWebElement acessos = inicializaDriver.ObterDriver().FindElement(By.XPath("//i[@class='kt-menu__link-icon menuSideIcon far fa-chart-bar']")); // Localiza o ícone de pagamentos e clica
            acessos.Click();

            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            IWebElement analiseAcessos = inicializaDriver.ObterDriver().FindElement(By.XPath("//span[text()='Análise de Acessos']")); //Localiza pelo texto exibido
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            analiseAcessos.Click();

        }

        public void ValidaCarregamento()
        {
            var wait = new WebDriverWait(inicializaDriver.ObterDriver(), TimeSpan.FromSeconds(10));
            IWebElement element = wait.Until(ExpectedConditions.ElementIsVisible(By.CssSelector(".analysisAccessFilterContainer")));

            if (!element.Displayed) //Se o element NÃO for exibido
            {
                inicializaDriver.FalharTeste("O elemento não carregou");
            }

        }

    }
}
