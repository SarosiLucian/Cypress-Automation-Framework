///<reference types = "Cypress" />
describe("Hooks", () => {
  before(() => {
    cy.log("rulează o singură dată înainte de primul test din suita de teste");
  });

  beforeEach(() => {
    cy.log("rulează înainte de fiecare test din blocul de teste");
  });

  afterEach(() => {
    cy.log("rulează după fiecare test din blocul de teste");
  });

  after(() => {
    cy.log("rulează o singură dată după ultimul test din suita de teste");
  });

  it("Example test 1", () => {
    cy.log("Exemplu test 1")
  });

  it("Example test 2", () => {
    cy.log("Exemplu test 2");
  });
});
