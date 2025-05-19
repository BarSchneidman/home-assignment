import { bostitchShort, scissorsColor, scissorsVersion, pencilSharpener, pencilSharpenerItemName } from "../fixtures/testdata";
import { scissorsUrl } from "../fixtures/urlextensions";
import { NavBar } from "../pages/navbar.page";
import { ItemPage } from "../pages/item.page";
import { ItemCartPage } from "../pages/itemcart.page";
import { ResultPage } from "../pages/searchresult.page";


describe('Costumer Service tests', () => {
    const navBar: NavBar = new NavBar();
    const resultPage: ResultPage = new ResultPage();
    const item: ItemPage = new ItemPage();
    const itemCart: ItemCartPage = new ItemCartPage();

    beforeEach(() => {
        cy.login();
        navBar.lookforItem(pencilSharpener);
        resultPage.gotoItemsPage(pencilSharpenerItemName);
        item.addItemToCart();
        //navBar.gotoCart();
        //itemCart.checkForItemInCart(bostitchShort);
        cy.visit(scissorsUrl);
        item.chooseVersionOfItem(scissorsVersion, scissorsColor);
        item.addItemToCart();
        //navBar.gotoCart();
        //itemCart.checkForItemInCart(scissorsColor);
    });

    it('Items in cart', () => {
        navBar.goHome();
        navBar.gotoCart();
        //itemCart.checkForItemInCart(scissorsColor);
        //itemCart.checkForItemInCart(bostitchShort);
        //navBar.goHome();
    });

    afterEach(() => {
        //navBar.gotoCart();
        itemCart.checkFreeShippingStatus('eligible items to your order for FREE Shipping.');
        itemCart.addItemFromCart(bostitchShort);
        itemCart.addItemFromCart(bostitchShort);
        itemCart.checkFreeShippingStatus('qualifies for FREE Shipping.');
        itemCart.emptyCart();
    });
});