using ConciliadoraTestes.Metodos;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using ExpectedConditions = SeleniumExtras.WaitHelpers.ExpectedConditions;

namespace ConciliadoraTestes.Testes.Dashboard.DashboardGerencial
{
    public class MetodosDashboard
    {
        protected Driver inicializaDriver = new Driver();
        

        public void AbrirDashboard()
        {
            Actions acao = new Actions(inicializaDriver.ObterDriver()); //Cria uma variável do tipo ação para automação de ações do teclado e mouse
            IWebElement barra = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='kt_aside_menu']")); // o id foi pego através de copiar o XPATH.
            acao.MoveToElement(barra).Perform();  // usa-se o moveToElement para mover o ponteiro para o elemento e utiliza-se o Perform para executar a ação

            IWebElement dashboard = inicializaDriver.ObterDriver().FindElement(By.XPath("//i[@class='kt-menu__link-icon menuSideIcon fas fa-chart-pie']")); // Localiza o ícone de pagamentos e clica
            dashboard.Click();

            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            IWebElement gerencial = inicializaDriver.ObterDriver().FindElement(By.XPath("//span[text()='Gerencial']")); //Localiza pelo texto exibido
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            gerencial.Click();

        }

        public void ValidaCarregamento()
        {
            var wait = new WebDriverWait(inicializaDriver.ObterDriver(), TimeSpan.FromSeconds(10));
            IWebElement element = wait.Until(ExpectedConditions.ElementIsVisible(By.Id("blockVendas")));

            if (!element.Displayed) //Se o element NÃO for exibido
            {
                inicializaDriver.FalharTeste("O elemento não carregou");
            }
        }

        public void PesquisaRefo()
        {
            IWebElement campoRefo = inicializaDriver.ObterDriver().FindElement(By.CssSelector("input.dx-texteditor-input")); //Pega a classe do input do campo
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            campoRefo.Click();
            campoRefo.SendKeys("10351");

            Thread.Sleep(1000);

            IWebElement refoId = inicializaDriver.ObterDriver().FindElement(By.CssSelector(".dx-item-content.dx-list-item-content"));
            refoId.Click();

            IWebElement campoData = inicializaDriver.ObterDriver().FindElement(By.Id("dateRangePicker"));
            campoData.Click();
            var mesInicial = inicializaDriver.ObterDriver().FindElements(By.CssSelector(".monthselect option[value='1']"));
            mesInicial[0].Click(); // Seleciona a posição 0, pois existem dois campos de mês (dois calendários)
        
            var anoInicial = inicializaDriver.ObterDriver().FindElements(By.CssSelector(".yearselect option[value='2023']"));
            anoInicial[0].Click();




        }
    }
}
