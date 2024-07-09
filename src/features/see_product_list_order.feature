Feature: See product list order
@productlist
Scenario: Order products by price descending
Given I am on saucedemo page
When I login with user "standard_user" and password "secret_sauce"
And I order product list by price descending
Then I should see first product with price "7.99"
And I should see last product with price "49.99"

@productlist
Scenario: Order products by price ascending
Given I am on saucedemo page
When I login with user "standard_user" and password "secret_sauce"
And I order product list by price ascending
Then I should see first product with price "49.99"
And I should see last product with price "7.99"