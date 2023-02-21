import { BasePage } from "../base";

export class LoginPage extends BasePage {
  private locator = {
    txbEmail: "input[placeholder='Email']",
    txbPassword: "[type='password']",
    btnLogin: ".btn",
  };

  loginWithAccount(email: string, pass: string) {
    this.inputEmail(email);
    this.inputPassword(pass);
    this.clickBtnLogin();
  }
  verifyShowLoginPage() {
    this.waitForElementEnable(this.locator.txbEmail);
    this.waitForElementEnable(this.locator.txbPassword);
    this.waitForElementEnable(this.locator.btnLogin);
  }
  inputEmail(email: string) {
    this.inputText(this.locator.txbEmail, email);
  }
  inputPassword(pass: string) {
    this.inputText(this.locator.txbPassword, pass);
  }
  clickBtnLogin() {
    this.clickElement(this.locator.btnLogin);
  }
}
