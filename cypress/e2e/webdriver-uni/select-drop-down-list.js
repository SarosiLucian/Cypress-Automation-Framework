///<reference types = "Cypress" />

describe("Interact with drop-down lists via webdriveruni", () =>{

    it("Select specific values via select drop-down lists", () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force:true})

        cy.get('#dropdowm-menu-1').select('c#').should('have.value', 'c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')
        
        // we can select a value from a drop-down list selecting the text of the option

        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')

    });
})