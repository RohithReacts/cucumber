
Feature: Navigate through Cucumber.io website

  Scenario: Verify navigation and content visibility
    Given I open the Cucumber website
    Then I should see the Cucumber heading
    When I click on the "Get Started" link
    Then I should see the scenario example text
    When I click on the "Next Installation" link
    And I click on the "Cucumber-JS JavaScript" link
    Then I should see the npm install command
    When I click on the "Next Guides" link
    And I click on the 10-minute tutorial link
    And I select the "JavaScript" tab
    Then I should see the code example
    And I should see the scenario output
    When I toggle the theme
    And I toggle the theme



