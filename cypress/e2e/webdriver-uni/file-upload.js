/// <reference types = 'Cypress' />

describe('Test file upload via webdriveruni', () => {
    it('Upload a file...', () => {
       cy.visit('/')
       cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true})

       cy.get('#myFile').selectFile('cypress/fixtures/artOfTesting.jpg')
       cy.get('#submit-button').click()
    });

    it('Upload no file...', () => {
        cy.visit('/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true})
        cy.get('#submit-button').click()
    });
})