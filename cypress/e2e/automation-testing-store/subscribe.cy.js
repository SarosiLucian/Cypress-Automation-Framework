///<reference types = "Cypress" />

describe('Subscribe to Newsletter', () => {

    it('Subscribe with an existing account', () => {
        cy.visit('https://automationteststore.com')
        cy.LoginAutomationTestStore()
        cy.get('#appendedInputButton').type('lucian.sarosi@yahoo.com')
        cy.get('button[type="submit"]').click()
        cy.get('#imFrm_settingsnewsletteremail').check('1')
        cy.get('button[title="Continue"]').click()
        cy.get('.alert.alert-success').should('be.visible').and('include.text', 'Success: ')
    });
});