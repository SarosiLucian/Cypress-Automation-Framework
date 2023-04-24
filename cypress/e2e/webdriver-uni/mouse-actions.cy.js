///<reference types = "Cypress" />

describe("Test mouse actions", () =>{

    it("Scroll element into view", () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true})
   });

   it("Should be able to perform a double mouse click", () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        cy.get('#draggable').trigger('mousedown', {which: 1}) // the "which" will click on the center of the given element
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
   });

   it("Should be able to drag and drop an draggable item", () => {
    cy.visit("https://webdriveruniversity.com")
    cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true})

    cy.get('#double-click').dblclick()

    });

    
   it.only("Should be able to hold down the left mouse click on a given element", () => {
    cy.visit("https://webdriveruniversity.com")
    cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    
    cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
         expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
    })

    });
})
