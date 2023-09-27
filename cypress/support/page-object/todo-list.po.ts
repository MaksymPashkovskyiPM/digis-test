class TodoListPo {
    todoList = '.todo-list';

    getTodoList() {
        return cy.get(this.todoList);
    }

}

export default new TodoListPo();
