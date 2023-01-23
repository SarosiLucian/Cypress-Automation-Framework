import AutoStore_HomePage_PO from '../../support/pageObjects.js/automation-test-store/AutoStore_HomePage_PO'
import AutoStore_HairCare_PO from '../../support/pageObjects.js/automation-test-store/AutoStore_HairCare_PO'

///<reference types = "Cypress" />
const autoStore_HomePage_PO = new AutoStore_HomePage_PO();
const autoStore_HairCare_PO = new AutoStore_HairCare_PO();

describe("Add multiple items to basket", () => {
  before(function () {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
  cy.clearLocalStorage()
  cy.clearCookies()
  autoStore_HomePage_PO.accessHomePage();
  autoStore_HomePage_PO.click_On_HairCare_Link();
  });

  it("Add specific items to basket", () => {
    autoStore_HairCare_PO.addHairCareProductToBasket();
  });
});
