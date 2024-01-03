///<reference types = "Cypress" />
import { commonCSS } from '../../../helpers/commonCSS';

const URL = "https://automationexercise.com";

describe('Verify All Products', () => {
    it('Verify All Products and product detail page', () => {
        
        cy.visit(URL)
        cy.get(commonCSS.homePage).should("be.visible")
        cy.get("a[href='/products']").click()
        cy.url().should("include", "/products")
        cy.get(".features_items").should("be.visible")
        cy.get("a[href='/product_details/1']").click()
        cy.url().should("include", "/product_details/1")
        cy.get(".product-information").should("be.visible")
    });
});