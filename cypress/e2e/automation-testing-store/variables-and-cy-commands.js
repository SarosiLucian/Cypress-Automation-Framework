///<reference types = "Cypress" />

describe("Veryfing variables, Cypress commands and Jquery commands", () =>{

    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com")

        // The following will fail
        //const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        //const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        //makeupLink.click()
        //skincareLink.click()

        // The following will pass
        //const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        //makeupLink.click()
        //const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        //skincareLink.click()
        
        // Recommended approach
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()
        cy.get("a[href*='product/category&path=']").contains('Skincare').click()
    });

    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com")
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()

        // The following will fail
        //const header = cy.get("h1 .maintext")
        //cy.log("header".text())

        cy.get("h1 .maintext").then(($headerText) => {

            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq("Makeup")
        })

    });

    it.only("Validate properties of Contact Us page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
        
        //Uses Cypress chaining commands
        cy.contains("#ContactUsFrm", "Contact Us Form").find("#field_11")
        .should('contain', 'First name')
        
        //Jquery Approach
        cy.contains("#ContactUsFrm", "Contact Us Form").then(text => {
            const firstNameText = text.find("#field_11").text()
            expect(firstNameText).to.contain("First name")
        })

        //Embedded commands (closure)
        cy.get("#field_11").then(fnText => {
            cy.log(fnText.text())
            cy.log(fnText)
        })
    });
})