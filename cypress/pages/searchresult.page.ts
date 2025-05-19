export class ResultPage {

    gotoItemsPage(itemName: string){
        cy.get(itemName).click();
    }
}