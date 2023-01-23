///<reference types = "Cypress" />

describe("Cypress web security", () =>{

    it.skip("Validate visiting two different domains", () => {
    cy.visit("https://webdriveruniversity.com")
    cy.visit("https://automationteststore.com")
    
});

    it("Validate visiting two different domains via user actions", () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#automation-test-store").invoke("removeAttr", "target").click()
    });

    it("Origin command", () => {
        cy.origin("https://webdriveruniversity.com", () => {
            cy.visit("/")
        })
        cy.origin("https://automationteststore.com", () => {
            cy.visit("/")
      });
   })
})