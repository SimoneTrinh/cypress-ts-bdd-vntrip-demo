export class BasePage {
  goto(path: string = "/") {
    cy.visit(`${Cypress.env("baseUrl")}` + path);
  }
  getLocator(locator: string) {
    return cy.get(locator);
  }
  clickElement(locator: string) {
    this.getLocator(locator).click();
  }
  inputText(locator: string, text: string) {
    this.getLocator(locator).type(text);
  }
  waitForElementVisible(locator: string) {
    this.getLocator(locator).should("be.visible");
  }
  waitForElementEnable(locator: string) {
    this.getLocator(locator).should("be.enabled");
  }
}
