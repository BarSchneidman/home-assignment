import { mainMenuButton } from "../statics/homepage";

export class Homepage {

    mainMenu: string[] = ['Today\'s Deals', 'Registry', 'Prime Video', 'Gift Cards', 'Customer Service', 'Sell'];

    checkMenuOptions() {
        this.mainMenu.forEach(option => {
            cy.get(mainMenuButton).children().should('contain.text', option)
        });
    }

    openMenuOption(menuOption: string){
        cy.contains(mainMenuButton, menuOption).click();
    }
}