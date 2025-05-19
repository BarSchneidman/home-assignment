import { addToCart, addToCartVerification, itemVersion } from "../statics/itemResult";

export class ItemPage {

    addItemToCart() {
        cy.get(addToCart).click();
        cy.get(addToCartVerification).should('be.visible');
    }

    chooseVersionOfItem(versionLocator: string, versionName: string){
        cy.get(versionLocator).click();
        cy.get(itemVersion).should('contain.text', versionName);
    }
}