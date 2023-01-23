class HomePage_PO {
    visitHomePage() {
        cy.visit(Cypress.env("webdriveruni_homepage"), { timeout: 60000 });
    }

    clickOn_Contact_Us_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true}, {timeout: 8000})
    }
}
export default HomePage_PO;