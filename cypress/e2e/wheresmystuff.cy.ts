import { CostumerServicePage } from "../pages/costumerservice.page";
import { NavBar } from "../pages/navbar.page";

describe('Costumer Service tests', () => {
  const navBar: NavBar = new NavBar();
  const costumerservicepage: CostumerServicePage = new CostumerServicePage();

  it('Clicking wheres my stuff should show transfer to order status page', () => {
    cy.login();
    navBar.checkMenuOptions();
    navBar.openMenuOption('Customer Service');
    costumerservicepage.openWheresMyStufTab();
  });
});