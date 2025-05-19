import { activeItems, addItem, deleteItemFromCart, freeShippingStatus } from "../statics/cart";

export class ItemCartPage {

    checkForItemInCart(itemName: string){
        cy.get(activeItems).should('contain.text', itemName);
    }

    checkFreeShippingStatus(eligiblityStatus: string){
        cy.get(freeShippingStatus).should('contain.text', eligiblityStatus);
    }

    addItemFromCart(itemName: string){
        cy.contains(itemName).find(addItem).click();
    }

    emptyCart(){
        cy.get(deleteItemFromCart).each(($btn, index) => {
            if (index >= 1) cy.wrap($btn).click();
        });
    }
}