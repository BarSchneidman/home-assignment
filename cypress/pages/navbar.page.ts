import { cart, mainMenuButton, searchButton, searchField } from "../statics/navbar";
import { logo } from "../statics/navbar";

export class NavBar {

    mainMenu: string[] = ['Today\'s Deals', 'Registry', 'Prime Video', 'Gift Cards', 'Customer Service', 'Sell'];

    checkMenuOptions() {
        this.mainMenu.forEach(option => {
            cy.get(mainMenuButton).children().should('contain.text', option)
        });
    }

    openMenuOption(menuOption: string){
        cy.contains(mainMenuButton, menuOption).click();
    }

        lookforItem(itemName: string){
        cy.get(searchField).type(itemName);
        cy.get(searchButton).click();
    }
    
    gotoCart(){
        cy.get(cart).click();
    }

    goHome(){
        cy.get(logo).click();
    }
}