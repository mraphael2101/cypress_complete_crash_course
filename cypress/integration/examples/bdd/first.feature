Feature: End to end Ecommerce validation

  @Regression
  Scenario: Ecommerce products delivery
#    Given a POST Request is submitted to Service for a 'ABC'
    Given I open the Ecommerce Page
    When I add items to my Cart
    When I fill in the form details
      | name         | gender |
      | joe blogs    | Male   |
      | karren blogs | Female |

#  @Smoke
#  Scenario Outline: Ecommerce products delivery 2
#    Given I open the Ecommerce Page
#    Then I should see a flash message saying <username> <password>
#    And I traverse through the datatables in different ways
#
#    Examples:
#      | username | password     |
#      | abc01    | Erik Larson  |
#      | ts01     | Taylor Swift |
