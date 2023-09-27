import todoInput from '../page-object/todo-input.po';
import todoList from '../page-object/todo-list.po';


Cypress.Commands.add('createTodoItem', (task1: any, task2: any, task3: any) => {
        todoInput.getTodoInputField().type(task1).type('{enter}')
        todoList.getTodoList().should('contain.text', task1)
        todoInput.getTodoInputField().type(task2).type('{enter}')
        todoList.getTodoList().should('contain.text', task2)
        todoInput.getTodoInputField().type(task3).type('{enter}')
        todoList.getTodoList().should('contain.text', task3)
    }
);
