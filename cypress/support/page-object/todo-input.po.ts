class TodoInputPo {
    todoInputField = '.new-todo';

    getTodoInputField() {
        return cy.get(this.todoInputField);
    }

}

export default new TodoInputPo();
