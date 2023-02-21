import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { BasePage } from "../pages/base";
import { LoginPage } from "../pages/login/login";

const basePage = new BasePage();
const loginPage = new LoginPage();

Given("I visit the webpage", () => {
  basePage.goto("/");
});

Then("I can see the login page", () => {
  //hoa.x.van@vntrip.vn | xuanhoa12
  loginPage.verifyShowLoginPage();
});

When("I login with admin account", () => {
  loginPage.loginWithAccount("hoa.x.van@vntrip.vn", "xuanhoa12");
});
