///<reference types = "Cypress" />
import { commonCSS } from '../../../helpers/commonCSS';

const URL = "https://automationexercise.com";
const item = "T-shirt"
const title = ".title.text-center"

describe('Search product', () => {
    it('Search and validate the product', () => {
        cy.visit(URL)
        cy.get(commonCSS.homePage).should("be.visible")
        cy.get("a[href='/products']").click()
        cy.get(title).should("be.visible")
        cy.get("#search_product").type(item)
        cy.get("#submit_search").click({force:true})
        cy.get(title).should("be.visible")
        cy.get(".features_items").should("be.visible")
    });
});