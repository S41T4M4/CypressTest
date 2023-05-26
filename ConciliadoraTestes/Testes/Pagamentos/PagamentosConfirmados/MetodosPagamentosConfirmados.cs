using ConciliadoraTestes.Metodos;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;

namespace ConciliadoraTestes.Testes.Pagamentos.PagamentosConfirmados
{
    /// <summary>
    /// O método AbrirPagamentosConfirmados() faz o acesso ao menu lateral e abre a tela de Pagamentos Confirmados.
    /// O método ValidaCards() confere se o texto dos cards da tela são exibidos.
    /// O método ValidaGrid() obtém o retorno do grid e o retorno "Sem Dados" e confere se um dos dois é exibido na tela.
    /// </summary>

    public class MetodosPagamentosConfirmados
    {
        protected Driver inicializaDriver = new Driver();

        public void AbrirPagamentosConfirmados()
        {
            Actions acao = new Actions(inicializaDriver.ObterDriver()); //Cria uma variável do tipo ação para automação de ações do teclado e mouse
            IWebElement barra = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='kt_aside_menu']")); // o id foi pego através de copiar o XPATH.
            acao.MoveToElement(barra).Perform();  // usa-se o moveToElement para mover o ponteiro para o elemento e utiliza-se o Perform para executar a ação

            IWebElement pagamentos = inicializaDriver.ObterDriver().FindElement(By.XPath("//i[@class='kt-menu__link-icon menuSideIcon fas fa-money-check-alt']")); // Localiza o ícone de pagamentos e clica
            pagamentos.Click();

            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);

            IWebElement pagamentosConfirmados = inicializaDriver.ObterDriver().FindElement(By.XPath("//span[text()='Pagamentos Confirmados']")); //Localiza pelo texto exibido
            inicializaDriver.ObterDriver().Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            pagamentosConfirmados.Click();
        }

        public void ValidaCards()
        {
            IWebElement vendasBrutas = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='VendasBrutas']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(vendasBrutas.Text, "Vendas Brutas");

            IWebElement taxa = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='Taxa']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(taxa.Text, "Taxa");

            IWebElement credito = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='Credito']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(credito.Text, "Crédito");

            IWebElement operacoes = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='Operacoes']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(operacoes.Text, "Operações");

            IWebElement vendasPagas = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='VendasPagas']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(vendasPagas.Text, "Vendas Pagas");

            IWebElement vendasLiquidas = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='VendasLiquidas']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(vendasLiquidas.Text, "Vendas Líquidas");

            IWebElement vendasRejeitadas = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='VendasRejeitadas']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(vendasRejeitadas.Text, "Vendas Rejeitadas");

            IWebElement debitos = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='Debitos']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(debitos.Text, "Débitos");

            IWebElement totalPago = inicializaDriver.ObterDriver().FindElement(By.XPath("//div[@id='TotalPago']//h4[@class='kt-widget24__title trn']"));
            Assert.AreEqual(totalPago.Text, "Total Pago");
        }

        public void ValidaGrid()
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
