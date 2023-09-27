import 'createTodoItem';

declare global {
  namespace Cypress {
    interface Chainable {

      createTodoItem(task1: any, task2: any, task3: any): Cypress.Chainable<void>;

    }
  }
}
