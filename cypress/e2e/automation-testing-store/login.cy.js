///<reference types = "Cypress" />

describe('Submit a login into the application', () => {

    beforeEach(() => {
        cy.visit('https://automationteststore.com')
    });

    it('Login in with valid credentials', () => {

        cy.LoginAutomationTestStore()
    });

    it('Log in with invalid credentials', () => {
        cy.get('ul[id="customer_menu_top"] li a').click()
        cy.get('#loginFrm_loginname').type('LucianSarosi')
        cy.get('#loginFrm_password').type('12345')
        cy.get('button[title="Login"]').click()
        cy.get('.alert.alert-error.alert-danger').should('be.visible').and('include.text', 'Error: Incorrect login or password provided.')

    });
});