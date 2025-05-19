import { moreInWheresMyStuffUrl, wheresMyStuffButton } from "../statics/costumerservicepage";

export class CostumerServicePage {

    openWheresMyStufTab() {
        cy.get(wheresMyStuffButton).scrollIntoView().click();
        cy.window().then((win) => {
            cy.stub(win, 'open').as('newTab')
        })
        cy.contains('More in Where\'s my Stuff').click();
        cy.get('@newTab').should('have.been.calledWithMatch', moreInWheresMyStuffUrl);
    }
}