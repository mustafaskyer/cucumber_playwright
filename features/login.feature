Feature: Login
    As a user
    I want to login into application

  Scenario: Login with valid credentials
    Given I visit a login Page
    When I fill the login form with valid credentials
    Then I should see the home
