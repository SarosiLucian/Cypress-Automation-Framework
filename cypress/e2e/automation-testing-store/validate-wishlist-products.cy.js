///<reference types = "Cypress" />

describe('Validate wishlist products', () => {
    it('Navigate to wishlist page and validate a product header text', () => {
        cy.visit('https://automationteststore.com')
        cy.LoginAutomationTestStore()
        cy.get('div[class="menu_text"]').click()
        cy.get('a[title="My wish list"]').click()
        cy.get('tr[class="wishlist_52"] td[class="align_left"] a').should('be.visible').and('have.text', 'Benefit Bella Bamba')
        cy.title().should('eq', 'My wish list')
    });
});