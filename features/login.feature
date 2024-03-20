Feature: Login
    As a user
    I want to login into application

  Scenario: Login with valid credentials
    Given I visit a login Page
    When I fill the login form with valid credentials
    Then I should see the home page

  Scenario: Login with invalid credentials
    Given I visit a login Page
    When I fill the login form with invalid credentials <username> <password>
    Then I Wait for 3 seconds

    Examples: 
      | username | password |
      | user1    | pass1    |
      | user2    | pass2    |
      | user3    | pass3    |
