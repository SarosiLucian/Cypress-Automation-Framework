///<reference types = "Cypress" />

describe("Verify Autocomplete dropwdown lists via webdriveruni", () => {
    it("Select specific product via autocomplete list", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})

        cy.get('#myInput').type('p')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = 'Pizza';

            if(prod === productToSelect) {
                $el.trigger("click");

                cy.get('#submit-button').click();
                cy.url().should('include', productToSelect)
            }
        }).then(() => {
            cy.get('#myInput').type('d')

            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text();
                const productToSelect = 'Donuts';
    
                if(prod === productToSelect) {
                    $el.trigger("click");
    
                    cy.get('#submit-button').click();
                    cy.url().should('include', productToSelect)
                }
            })
        })
    });
})