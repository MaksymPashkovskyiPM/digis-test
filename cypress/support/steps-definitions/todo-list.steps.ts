import {Given, Then} from '@badeball/cypress-cucumber-preprocessor';
import todoList from '../page-object/todo-list.po';


Given('I mark {string} as completed', (text: string) => {
    todoList.getTodoList().contains(text).siblings('input').click()
});

Then('{string} should not be displayed', (text: string) => {
    todoList.getTodoList().should('not.contain.text', text)
});

Then('{string} should be displayed', (text: string) => {
    todoList.getTodoList().should('contain.text', text)
});

Then('{string} and {string} should be remain.', (text: string) => {
    todoList.getTodoList().should('contain.text', text)
});
