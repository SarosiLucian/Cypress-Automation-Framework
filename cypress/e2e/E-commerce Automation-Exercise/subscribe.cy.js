import {faker} from '@faker-js/faker';
import { commonCSS } from '../../../helpers/commonCSS';

///<reference types = "Cypress" />

const URL = "https://automationexercise.com";
const newEmail = faker.internet.email();

describe('Subscribe for the latest updates', () => {
    it('Verify Subscription in home page', () => {
        cy.visit(URL)
        cy.get(commonCSS.homePage).should("be.visible")
        cy.scrollTo('bottom')
        cy.get("div[class='single-widget'] h2").should('have.text', 'Subscription')
        cy.get("#susbscribe_email").type(newEmail)
        cy.get("#subscribe").click()
        cy.get('.alert-success').should("be.visible").and("have.text", "You have been successfully subscribed!")
    });
});