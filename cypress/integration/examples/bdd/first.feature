Feature: End to end Ecommerce validation

  @Regression
  Scenario: Ecommerce products delivery
    Given a POST Request is submitted to Service for a 'ABC' typeA
    Given I open the Ecommerce Page
    When I add items to my Cart
    And I fill in the form details
      | name         | gender |
      | joe blogs    | Male   |
      | karren blogs | female |


  @Smoke
  Scenario Outline: Ecommerce products delivery 2
    Given I open the Ecommerce Page
    Then I should see a flash message saying <username> <password>

    Examples:
    |username|password    |
    |abc01   |Erik Larson |
    |ts01    |Taylor Swift|
