using ConciliadoraTestes.Metodos;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConciliadoraTestes.Testes.Cadastro.GrupoEmpresas
{
    public class MetodosGrupoEmpresas
    {
        protected Driver inicializaDriver = new Driver();

        public void AbrirGrupoEmpresas()
        {
            Actions acao = new Actions(inicializaDriver.ObterDriver()); //Cria uma variável do tipo ação para automação de ações do teclado e mouse
            IWebElement barra = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='kt_aside_menu']")); // o id foi pego através de copiar o XPATH.
            acao.MoveToElement(barra).Perform();  // usa-se o moveToElement para mover o ponteiro para o elemento e utiliza-se o Perform para executar a ação

            IWebElement cadastro = inicializaDriver.ObterDriver().FindElement(By.XPath("//i[@class='kt-menu__link-icon menuSideIcon fas fa-pencil-alt']")); // Localiza o ícone de pagamentos e clica
            cadastro.Click();

            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            IWebElement grupo = inicializaDriver.ObterDriver().FindElement(By.XPath("//span[text()='Grupo de Empresas']")); //Localiza pelo texto exibido
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            grupo.Click();
        }

        public void ValidaGrid()
        {
            var grid = inicializaDriver.ObterDriver().FindElements(By.CssSelector(".dx-datagrid-rowsview tr.dx-row.dx-row-lines"));  //nome da classe no css
            if (grid.Count <= 0)
            {
                Assert.Fail();
            }
        }

        public void ValidaCreate()
        {
            IWebElement botao = inicializaDriver.ObterDriver().FindElement(By.XPath("//span[@id = 'btnInsertGroupCompany']"));
            botao.Click();

            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            Actions acao = new Actions(inicializaDriver.ObterDriver());
            //IWebElement cegNome = inicializaDriver.driver.FindElement(By.XPath("//div[@class='dx-texteditor-container']//div[@class='dx-texteditor-input-container']//input[@class='dx-texteditor-input']"));
            var campos = inicializaDriver.ObterDriver().FindElements(By.CssSelector(".dx-overlay-content.dx-popup-normal .dx-item.dx-box-item"));
            IWebElement cegNome = campos[0].FindElement(By.CssSelector(".dx-texteditor-input-container > input"));
            acao.MoveToElement(cegNome).Perform();
            cegNome.SendKeys("Grupo de Testes");
        }
    }
}
