const USERNAME_INPUT = 'input[name="user_login"]';
const PASSWORD_INPUT = 'input[name="user_password"]';
const KEEP_ME_SIGNED_IN_CHECKBOX = 'input[name="user_remember_me"]';
const LOGIN_BUTTON = 'input[type="submit"]';
const VERIFY_DASHBOARD = '.nav-tabs';
const VERIFY_ERROR_MESSAGE = '.alert.alert-error';

class LoginPage {
    visit() {
        cy.visit('/login.html');
    }

    fillUsername() {
        cy.get(USERNAME_INPUT).type(Cypress.env('username'));
    }

    fillPassword() {
        cy.get(PASSWORD_INPUT).type(Cypress.env('password'));
    }   
    
    fillInvalidCredentials() {
        cy.get(USERNAME_INPUT).type('invaliduser');
        cy.get(PASSWORD_INPUT).type('invalidpass');
    }
    
    signedInCheckbox() {
        cy.get(KEEP_ME_SIGNED_IN_CHECKBOX).click();
    }

    clickLoginButton() {
        cy.get(LOGIN_BUTTON).click();
    }

    verifyDashboard() {
        cy.get(VERIFY_DASHBOARD).should('be.visible');
    }

    verifyErrorMessage() {
        cy.get(VERIFY_ERROR_MESSAGE).contains('Login and/or password are wrong');
    }
}

module.exports = new LoginPage();
