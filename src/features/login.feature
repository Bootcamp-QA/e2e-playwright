Feature: Login SauceLabs

  Background:
    Given the user is on saucelabs login page
  @login @loginvalid @priority-high
  Scenario: Login with valid username and password
    When the user fill username with "standard_user"
    And the user fill password with "secret_sauce"
    And the user press login button
    Then the user should see products page
  @login @logininvalid
  Scenario Outline: Login with invalid data
    When the user fill username with "<username>"
    And the user fill password with "<password>"
    And the user press login button
    Then the user should see the login error message "<errorMessage>"

    Examples:
      | username      | password      | errorMessage                                                |
      | standard_user | wrongpassword | Username and password do not match any user in this service |
      |               |               | Username is required                                        |
