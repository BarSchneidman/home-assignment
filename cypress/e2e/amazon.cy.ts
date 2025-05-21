import { CostumerServicePage } from "../pages/costumerservice.page";
import { Homepage } from "../pages/homepage.page";

describe('amazon ui tests spec', () => {
  let homepage: Homepage = new Homepage();
  let costumerservicepage: CostumerServicePage = new CostumerServicePage();

  it('Clicking wheres my stuff should show transfer to order status page', () => {
    cy.login();
    homepage.checkMenuOptions();
    homepage.openMenuOption('Customer Service');
    costumerservicepage.openWheresMyStufTab();
  })
})