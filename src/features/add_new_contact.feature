Feature: Add new contact

@addnewcontact
Scenario: Add new contact
Given the user is on contactList page
When the user login with user "reyes2@gmail.com" and password "password"
And the user press add contact button
And the user fill random first name
And the user fill random last name
And the user add the new contact
Then the user should see new contact name and last name added