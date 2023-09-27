import {Given, When} from '@badeball/cypress-cucumber-preprocessor';
import {taskName} from "../../fixtures/test-data";


When('I visit the TodoMVC app', () => {
    cy.visit(Cypress.env('testUrl'));
});

Given('Add three new todo items: Task 1, Task 2 and Task 3', () => {
    cy.createTodoItem(taskName.task1, taskName.task2, taskName.task3)
});

Given('I refresh the page', () => {
    cy.reload()
});
