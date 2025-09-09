Feature: Login to Application

    Scenario: Successful Login with Valid credentials
        Given I am on the login page
        When I enter my valid credentials
        And I check the keep me signed in checkbox
        And I click the login button
        Then I should be logged in successfully
        And I should see the dashboard page

    Scenario: UnSuccessful Login with Invalid credentials
        Given I am on the login page
        When I enter my invalid credentials
        And I check the keep me signed in checkbox
        And I click the login button
        Then I should see an error message