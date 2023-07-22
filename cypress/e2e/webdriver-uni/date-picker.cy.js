/// <reference types="Cypress" />

describe("Handling Datepicker", () => {

  it("Select date from datepicker", () => {
    cy.visit("/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    cy.get("input[type='text']").click();

    let date = new Date();
    date.setDate(date.getDate()); //get current day
    cy.log("Current date:" + date.getDate());

    let anotherDate = new Date();
    date.setDate(date.getDate() + 5); // adding a given number of days to the curent day
    cy.log("Added 5 days to the current day:" + date.getDate());
  });

  it("Create a future year,month and year", () => {

    cy.visit("/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });

    var date = new Date();
    date.setDate(date.getDate() + 86);

    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleString("default", { month: "long" });
    var futureDay = date.getDate();

    cy.log("Future year to select:" + futureYear);
    cy.log("Future month to select:" + futureMonth);
    cy.log("Future day to select: " + futureDay);

    function selectMonthAndYear() {

      cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        }).then(() => {
          cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get(".next").first().click();
                selectMonthAndYear();
              }
            });
        });
    }

    function selectFutureDay() {
        cy.get("[class=day]").contains(futureDay).click()
    }

    selectMonthAndYear();
    selectFutureDay();
  });
});
