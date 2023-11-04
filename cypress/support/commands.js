// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

import { faker } from "@faker-js/faker";

Cypress.Commands.add("RegisterNewUser", () => {

    const newUser = faker.person.firstName('male');
    const newEmail = faker.internet.email();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const company = faker.company.name();
    const address = faker.location.streetAddress();
    const secondaryAddress = faker.location.secondaryAddress();
    const state = faker.location.state();
    const city = faker.location.city();
    const zipCode = faker.location.zipCode();
    const phoneNumber = faker.phone.number();
    const password = "Parola123";

cy.visit("https://automationexercise.com")
cy.get("img[alt='Website for automation practice']").should("be.visible")
cy.get("a[href='/login']").click()
cy.get("div[class='signup-form'] h2").should("have.text", "New User Signup!")
cy.get("input[placeholder='Name']").type(newUser)
cy.get("input[data-qa='signup-email']").type(newEmail)
cy.get("button[data-qa='signup-button']").click()
cy.get(':nth-child(1) > b').should("be.visible")
cy.get("label[for='id_gender1']").click()
cy.get("#password").type(password)
cy.get("#days").select('26').should("have.value", '26')
cy.get("#months").select('January').should("have.value", '1')
cy.get("#years").select('1996').should("have.value", '1996')
cy.get("#newsletter").check()
cy.get("#optin").check()
cy.get("#first_name").type(firstName)
cy.get("#last_name").type(lastName)
cy.get("#company").type(company)
cy.get("#address1").type(address)
cy.get("#address2").type(secondaryAddress)
cy.get("#country").select('United States').should('have.value', 'United States')
cy.get("#state").type(state)
cy.get("#city").type(city)
cy.get("#zipcode").type(zipCode)
cy.get("#mobile_number").type(phoneNumber)
cy.get("button[data-qa='create-account']").click()
cy.get('b').should('be.visible')
cy.get('[data-qa="continue-button"]').click()
cy.get("li:nth-child(10) a:nth-child(1)").should('be.visible')
cy.get("a[href='/logout']").click()
});

Cypress.Commands.add("navigateTo_webdriverUni_Homepage", () => {
    cy.visit("/")
});

Cypress.Commands.add("navigateTo_webdriverUni_Checkbox_page", () => {
    cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html")
});

Cypress.Commands.add("selectProduct", productName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if($el.text().includes(productName)) {
            cy.wrap($el).click()
        }
    });
})

Cypress.Commands.add("addProductToBasket", productName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if ($el.text() === productName) {
            cy.log($el.text())
            cy.get('.productcart').eq(index).click();
        }
    });
})

Cypress.Commands.add("webdriverUni_ContactForm_Submission", (firstName, lastName, email, comment, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName)
    cy.get('[name="last_name"]').type(lastName)
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type(comment)
    cy.get('[type="submit"]').click()
    cy.get($selector).contains(textToLocate)
})

Cypress.Commands.add("LoginAutomationTestStore", () => {

const username = "LucianSarosi"
const password = "1234"

cy.get('ul[id="customer_menu_top"] li a').click();
cy.get("#loginFrm_loginname").type(username);
cy.get("#loginFrm_password").type(password);
cy.get('button[title="Login"]').click();
cy.get('div[class="menu_text"]').should("be.visible").and("include.text", "Welcome back Lucian");
})

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
