import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from './loginPage';

Given('I am on the login page', () => {
  LoginPage.visit();
});

When('I enter my valid credentials', () => {
    LoginPage.fillUsername(Cypress.env('username'));
    LoginPage.fillPassword(Cypress.env('password'));
}); 

When('I enter my invalid credentials', () => {
    LoginPage.fillInvalidCredentials();
});

When('I check the keep me signed in checkbox', () => {
  LoginPage.signedInCheckbox();
});

When('I click the login button', () => {
  LoginPage.clickLoginButton();
});

Then('I should be logged in successfully', () => {
  cy.url().should('include', '/account-summary');
});

Then('I should see the dashboard page', () => {
  LoginPage.verifyDashboard();
});

Then('I should see an error message', () => {
  LoginPage.verifyErrorMessage();
});