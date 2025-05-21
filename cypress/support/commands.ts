/// <reference types="cypress" />

import { dismissToaster } from "../statics/navbar";

Cypress.Commands.add('login', () => {
    cy.visit('/');
    cy.wait(15000);
    cy.get(dismissToaster).click();
});