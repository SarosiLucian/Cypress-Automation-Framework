import HomePage_PO from '../../support/pageObjects.js/webdriver-uni/HomePage_PO'
import Contact_Us_PO from '../../support/pageObjects.js/webdriver-uni/Contact_Us_PO'

///<reference types = "Cypress" />

describe("Test Suite Contact Us form via WebdriverUni", () => {
    Cypress.config('defaultCommandTimeout', 20000)
    const contact_Us_PO = new Contact_Us_PO();
    const homepage_PO = new HomePage_PO();

beforeEach(function() {

    cy.fixture('example').then(function(data) {
       globalThis.data = data;
    });
})

beforeEach(function() {

    homepage_PO.visitHomePage();
    cy.wait(3000)
    homepage_PO.clickOn_Contact_Us_Button();
    //cy.pause()
});

    it("Should be able to submit a successfull submission via contact us form", () => {
        
        cy.document().should('have.property', 'charset').and('eq','UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "This is a test.", 
        "h1", "Thank You for your Message!")    
    });

    it("Should not be able to submit a successfull submission via contact us form", () => {
        if(Cypress.isBrowser('chrome')){

        } else {
            contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, " ", "This is a test.", 'body', 
            'Error: Invalid email address')
        }

    });
})