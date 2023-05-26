///<reference types = "Cypress" />

describe("Handle js alerts", () =>{

    it("Confirm js alert contains the correct text", () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({force:true})

        cy.get("#button1").click()
        cy.on('window:alert', (string) => { 
            expect(string).to.equal('I am an alert box!')
        })
    });

    it("Validate js confirm alert box works correctly when clicking OK", () =>{
        cy.visit("https://webdriveruniversity.com")
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({force:true})

        cy.get("#button4").click()
        cy.on('window:confirm', (string) => { 
            return true;
        })
        cy.get("#confirm-alert-text").contains("You pressed OK!")
    });

    it("Validate js confirm alert box works correctly when clicking cancel", () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({force: true})
        
        cy.get("#button4").click()
        cy.on('window:confirm', (string) => {
            return false;
        })
        cy.get('#confirm-alert-text').contains("You pressed Cancel!")
    });

    it("Validate js confirm alert box using a stub", () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({force: true})
        
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get("#button4").click().then(() => {
            expect(stub.getCall(0)).to.calledWith('Press a button!') 
        }).then(() => {
          return true; 
        }).then(() => {
          cy.get("#confirm-alert-text").contains("You pressed OK!")
        })
    });
})