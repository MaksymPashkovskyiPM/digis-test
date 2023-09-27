Feature: Test Task

  Background:
    When I visit the TodoMVC app
    And Add three new todo items: Task 1, Task 2 and Task 3
    And I refresh the page

#    Step on 6 string as a part: Implement a test that verifies the persistence of todo items after a page refresh.

  Scenario: Check main test scenario
    And I mark 'Task 2' as completed
    And I filter to view only 'Active' tasks
    Then 'Task 2' should not be displayed
    And I filter to view only 'Completed' tasks
    Then 'Task 2' should be displayed
    And I Clear completed tasks
    Then 'Task 2' should not be displayed
    And I filter to view only 'All' tasks
    Then 'Task 1' and 'Task 3' should be remain.
