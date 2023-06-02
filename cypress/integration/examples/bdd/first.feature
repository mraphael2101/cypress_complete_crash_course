Feature: End to end Ecommerce validation

  @Regression
  Scenario: Ecommerce products delivery
    Given I open the Ecommerce Page
    When I add items to my Cart
    And I fill in the form details
      | name         | gender |
      | joe blogs    | Male   |
      | karren blogs | female |


#  @Smoke
#  Scenario: Ecommerce products delivery 2
#    Given I open the Ecommerce Page
#    When I add items to my Cart
#    And I fill in the form details
#      | name         | gender |
#      | joe blogs    | Male   |
#      | karren blogs | female |
