import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../pages/dashboard/home/home";

const homePage = new HomePage();

Then("I can see the Homepage", () => {
  homePage.verifyShowHomePage();
});
