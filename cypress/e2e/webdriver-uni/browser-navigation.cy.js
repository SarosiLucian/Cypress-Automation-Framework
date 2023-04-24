///<reference types = "Cypress" />

describe("Validate webdriveruni home page links", () =>{

    it("Confirm links redirect to the correct pages", () => {
        
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("https://webdriveruniversity.com")
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force:true})
        cy.url().should("include", "contactus")
        
        cy.go("back")
        cy.url().should("include", "https://webdriveruniversity.com")
        cy.reload()
        //cy.reload(true) // reload the page without using cache

        cy.go("forward")
        cy.url().should("include", "contactus") // validate if the user landed on the "/contacus" page
        
        cy.go("back")
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', 'Login-Portal')
        cy.go("back")
        
        
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', 'To-Do-List')
        cy.go("back")
    });
})