///<reference types = "Cypress" />

describe('New customer register', () => {
    it('Create a new account in Automation Test Store', () => {
        cy.visit('https://automationteststore.com')

        //Your Personal Details
        cy.get('ul[id="customer_menu_top"] li a').click()
        cy.get('button[title="Continue"]').click()
        cy.get('#AccountFrm_firstname').type('Lucian')
        cy.get('#AccountFrm_lastname').type('Sarosi')
        cy.get('#AccountFrm_email').type('lucian.lucian@yahoo.com')

        //Your Address
        cy.get('#AccountFrm_address_1').type('test, 1')
        cy.get('#AccountFrm_country_id').select('Romania').should('have.value', '175')
        cy.get('#AccountFrm_city').type('Cluj-Napoca')
        cy.get('#AccountFrm_zone_id').select('Cluj').should('have.value', '2692')
        cy.get('#AccountFrm_postcode').type('400001')

        //Login Details
        cy.get('#AccountFrm_loginname').type('LucianSarosi')
        cy.get('#AccountFrm_password').type('1234')
        cy.get('#AccountFrm_confirm').type('1234')
        cy.get('#AccountFrm_newsletter0').check('0').should('be.checked')
        cy.get('#AccountFrm_agree').check('1').should('be.checked')
        cy.get('button[title="Continue"]').click()

    });
});