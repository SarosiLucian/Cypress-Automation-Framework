///<reference types = "Cypress" />
import { commonCSS } from '../../../helpers/commonCSS';

const URL = "https://automationexercise.com";

describe('Test Case Page', () => {
    it('Verify Test Cases Page', () => {
        
        cy.visit(URL)
        cy.get(commonCSS.homePage).should("be.visible")
        cy.get('a[href="/test_cases"]').first().click({force: true}) // this selector using more than an element
        cy.get("h2[class='title text-center'] b").should("be.visible").
        and("have.text", "Test Cases")
    });
});