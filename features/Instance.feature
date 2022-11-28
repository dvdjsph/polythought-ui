Feature: Instance
  
  Scenario: create an instance
    Given a label
    When a instance is created with this label
    Then it can be found

  Scenario: without a label an instance can't be created
    When an attempt is made to create an instance without a label
    Then this attempt fails
-=
