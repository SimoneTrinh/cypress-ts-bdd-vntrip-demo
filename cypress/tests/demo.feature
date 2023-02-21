Feature: Login Demo

    As a valid user
    I can go to home page
    Scenario: Login with Admin user to go Homepage
        Given I visit the webpage
        Then I can see the login page
        When I login with admin account
        Then I can see the Homepage