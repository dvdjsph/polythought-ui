Feature: Element
  
  Scenario: create an element
    Given a label
    When a element is created with this label
    Then it can be found

  Scenario: without a label an element can't be created
    When an attempt is made to create an element without a label
    Then this attempt fails
