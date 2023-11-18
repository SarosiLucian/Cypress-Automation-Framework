///<reference types = "Cypress" />

const URL = "https://automationexercise.com";
const home_page = "div[class='item active'] h1:nth-child(1)";
const item = "T-shirt"
const title = ".title.text-center"

describe('Search product', () => {
    it('Search and validate the product', () => {
        cy.visit(URL)
        cy.get(home_page).should("be.visible")
        cy.get("a[href='/products']").click()
        cy.get(title).should("be.visible")
        cy.get("#search_product").type(item)
        cy.get("#submit_search").click({force:true})
        cy.get(title).should("be.visible")
        cy.get(".features_items").should("be.visible")
    });
});