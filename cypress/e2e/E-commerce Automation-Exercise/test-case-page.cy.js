///<reference types = "Cypress" />

const URL = "https://automationexercise.com";
const home_page = "div[class='item active'] h1:nth-child(1)";

describe('Test Case Page', () => {
    it('Verify Test Cases Page', () => {
        
        cy.visit(URL)
        cy.get(home_page).should("be.visible")
        cy.get('a[href="/test_cases"]').first().click({force: true}) // this selector using more than an element
        cy.get("h2[class='title text-center'] b").should("be.visible").
        and("have.text", "Test Cases")
    });
});