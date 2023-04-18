using ConciliadoraTestes.Metodos;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConciliadoraTestes.Testes.Pagamentos.PrevisaoRecebimentos
{
    public class MetodosPrevisaoRecebimentos
    {
        protected InicializaDriver inicializaDriver = new InicializaDriver();
        public void AbrirPrevisaoRecebimentos()
        {
            Actions acao = new Actions(inicializaDriver.ObterDriver());
            IWebElement barra = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='kt_aside_menu']"));
            acao.MoveToElement(barra).Perform();

            IWebElement pagamentos = inicializaDriver.ObterDriver().FindElement(By.XPath("//i[@class='kt-menu__link-icon menuSideIcon fas fa-money-check-alt']"));
            pagamentos.Click();

            IWebElement previsaoRecebimentos = inicializaDriver.ObterDriver().FindElement(By.XPath("//span[text()='Previsão de Recebimentos']"));
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
            previsaoRecebimentos.Click();
        }

        public void ValidaCards()
        {
            IWebElement vendasBrutas = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='VendasBrutas']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(vendasBrutas.Text, "Vendas Brutas");

            IWebElement taxa = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='Taxa']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(taxa.Text, "Taxa");

            IWebElement credito = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='Credito']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(credito.Text, "Crédito");

            IWebElement cancelamento = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='Cancelamento']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(cancelamento.Text, "Cancelamento");

            IWebElement vendasLiquidas = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='VendasLiquidas']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(vendasLiquidas.Text, "Vendas Líquidas");

            IWebElement atrasado = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='Atrasado']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(atrasado.Text, "Atrasado");

            IWebElement debitos = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='Debitos']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(debitos.Text, "Débitos");

            IWebElement aReceber = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='AReceber']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(aReceber.Text, "A Receber");
        }

        public void ValidaGridRecebimentos()
        {
            var grid = inicializaDriver.ObterDriver().FindElements(By.CssSelector(".dx-datagrid-rowsview tr.dx-row.dx-data-row.dx-row-lines"));  //nome da classe no css
            var noData = inicializaDriver.ObterDriver().FindElements(By.XPath("//span[@class='dx-datagrid-nodata']"));

            if (grid.Count <= 0 && noData.Count <= 0)
            {
                Assert.Fail();
            }
        }

        public void ValidaGridDebitos()
        {
            var grid = inicializaDriver.ObterDriver().FindElements(By.CssSelector(".dx-datagrid-rowsview tr.dx-row.dx-data-row.dx-row-lines"));  //nome da classe no css
            var noData = inicializaDriver.ObterDriver().FindElements(By.XPath("//span[@class='dx-datagrid-nodata']"));

            if (grid.Count <= 0 && noData.Count <= 0)
            {
                Assert.Fail();
            }
        }
    }
}
