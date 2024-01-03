import {faker} from '@faker-js/faker'
import { commonCSS } from '../../../helpers/commonCSS';

///<reference types = "Cypress" />

const name = faker.person.firstName();
const email = faker.internet.email();
const subject = "Complaint";
const message = faker.git.commitMessage();

describe('Contact Us form', () => {
    it('Submit contact us form', () => {
        cy.visit("https://automationexercise.com")
        cy.get(commonCSS.homePage).should("be.visible")
        cy.get("a[href='/contact_us']").click()
        cy.get("div[class='contact-form'] h2[class='title text-center']").should("be.visible").
        and("have.text", "Get In Touch")
        cy.get("input[placeholder='Name']").type(name)
        cy.get("input[placeholder='Email']").type(email)
        cy.get("input[placeholder='Subject']").type(subject)
        cy.get("#message").type(message)
        cy.get("input[name='upload_file']").selectFile("cypress/fixtures/dummy.pdf")
        cy.get("input[value='Submit']").click()

        cy.on('window:confirm', (string) => { 
            return true;
        })
        cy.get('.status').should("be.visible").
        and("have.text", "Success! Your details have been submitted successfully.")
        cy.get("a[class='btn btn-success'] span").click()
        cy.get(home_page).should("be.visible")
    });
});