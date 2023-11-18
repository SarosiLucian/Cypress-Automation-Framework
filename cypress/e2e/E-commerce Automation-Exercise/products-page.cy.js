///<reference types = "Cypress" />

const URL = "https://automationexercise.com";
const home_page = "div[class='item active'] h1:nth-child(1)";

describe('Verify All Products', () => {
    it('Verify All Products and product detail page', () => {
        
        cy.visit(URL)
        cy.get(home_page).should("be.visible")
        cy.get("a[href='/products']").click()
        cy.url().should("include", "/products")
        cy.get(".features_items").should("be.visible")
        cy.get("a[href='/product_details/1']").click()
        cy.url().should("include", "/product_details/1")
        cy.get(".product-information").should("be.visible")
    });
});