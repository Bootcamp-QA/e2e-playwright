Feature: Buy a product
@buyproduct @priority-high
Scenario: Buy a product
Given the user is on saucelabs login page
When the user fill username with "standard_user"
And the user fill password with "secret_sauce"
And the user press login button
And the user add to cart "Sauce Labs Backpack"
And the user click on the cart
Then the user should see "Sauce Labs Backpack" product on the cart
When the user press checkout
And the user fill form with name "Reyes", last name "Cuesta" and postal code "12345"
And the user press continue button 
Then the user should see product "Sauce Labs Backpack" with total price "32.39"
And the user press finish
Then the user should see the buy complete message "Thank you for your order"