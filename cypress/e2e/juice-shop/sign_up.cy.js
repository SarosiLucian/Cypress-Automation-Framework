///<reference types = "Cypress" />

describe("Sign Up a new user", () => {
  let randomString = Math.random().toString(36).substring(2);
  const email = "lucian.sarosi_" + randomString + "@yahoo.com";
  const parola = "Parola123!";
  const securityAnswer = "Happy Testing!";

  describe("UI Tests", () => {
    beforeEach(() => {
      cy.log("Email: " + email);
      cy.log("Password: " + parola);
      cy.visit("https://juice-shop.herokuapp.com/#/", {
        failOnStatusCode: false,
      });
    });

    it("Sign Up the form with valid credentials", () => {
      cy.get(".cdk-overlay-backdrop").click(-50, -50, { force: true });
      cy.get("#navbarAccount").click();
      cy.get("#navbarLoginButton").click();
      cy.get('.primary-link[routerlink="/register"]')
        .contains("Not yet a customer?")
        .click();
      cy.get("#emailControl").type(email);
      cy.get("#passwordControl").type(parola);
      cy.get("#repeatPasswordControl").type(parola);
      cy.get(".mat-select-placeholder").click({ force: true });
      cy.get("mat-option[id='mat-option-9'] span[class='mat-option-text']")
        .click()
        .contains(" Name of your favorite pet?");
      cy.get("#securityAnswerControl").type(securityAnswer);
      cy.get("#registerButton").click();
      cy.get(".mat-snack-bar-container").contains(
        "Registration completed successfully."
      );
    });

    it("Log into the account", () => {
      cy.get('button[aria-label="Close Welcome Banner"]').click({
        force: true,
      });
      cy.get('a[aria-label="dismiss cookie message"]').click({ force: true });
      cy.get("#navbarAccount").click();
      cy.get("#navbarLoginButton").click();
      cy.get("#email").type(email);
      cy.get("#password").type(parola);
      cy.get("#loginButton").click();
      cy.get(".fa-layers-counter").contains(0);
    });
  });

  describe("API Tests", () => {

    const userCredentials = {
        "email": email,
        "password": parola
      }

    it("Login via API non-UI", () => {
     
      cy.request("POST", "https://juice-shop.herokuapp.com/rest/user/login", userCredentials).then(response => {
        expect(response.status).to.eq(200)
      })
    });

    it('Log in via token (non-UI)', () => {
        cy.request("POST", "https://juice-shop.herokuapp.com/rest/user/login", userCredentials)
        .its('body').then(body => {
            const token = body.authentication.token 
            cy.wrap(token).as("userToken") 
          
            const userToken = cy.get("@userToken")
            cy.visit("https://juice-shop.herokuapp.com", {
              onBeforeLoad(browser) {
                browser.localStorage.setItem("token", userToken) //store token into the browser
              }
            })
            cy.get(".cdk-overlay-backdrop").click(-50, -50, { force: true });
            cy.get(".fa-layers-counter").contains(0);
        });
    });
  });
});
