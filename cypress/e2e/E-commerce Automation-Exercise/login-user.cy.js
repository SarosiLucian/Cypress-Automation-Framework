import {faker} from '@faker-js/faker'

///<reference types = "Cypress" />

const newUser = faker.person.firstName('male');
const newName = faker.person.firstName();
const newEmail = faker.internet.email();
const loginUser = faker.internet.email();
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

describe('Register & Login user via app', () => {

    beforeEach(() => {
        cy.visit("https://automationexercise.com")
        cy.get("div[class='item active'] h1:nth-child(1)").should("be.visible")
        cy.get("a[href='/login']").click()
        cy.get("div[class='login-form'] h2").should("be.visible")
        cy.get("div[class='signup-form'] h2").should("have.text", "New User Signup!")
    });

    it('Register new user', () => {
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
    });

    it('Login with valid credentials', () => {
        cy.get("input[data-qa='login-email']").type(newEmail)
        cy.get("input[placeholder='Password']").type(password)
        cy.get('[data-qa="login-button"]').click()
        cy.get("li:nth-child(10) a:nth-child(1)").should("be.visible")
        cy.get("a[href='/logout']").click()
        cy.url().should("include", "/login")
    });

    it('Register with invalid credentials', () => {
        cy.get("input[data-qa='login-email']").type(loginUser)
        cy.get("input[placeholder='Password']").type(password)
        cy.get("button[data-qa='login-button']").click()
        cy.get('.login-form > form > p').should("be.visible")
    });

    it('Register User with existing email', () => {
        cy.get("input[placeholder='Name']").type(newName)
        cy.get("input[data-qa='signup-email']").type(newEmail)
        cy.get("button[data-qa='signup-button']").click()
        cy.get('.signup-form > form > p').should("be.visible")
    });
});