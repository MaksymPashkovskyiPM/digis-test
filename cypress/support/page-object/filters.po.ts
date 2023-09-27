class FiltersPo {
    todoFilters = '.filters';
    clearCompletedButton = '.clear-completed';

    getTodoFilters() {
        return cy.get(this.todoFilters).find('li');
    }

    getClearCompletedButton() {
        return cy.get(this.clearCompletedButton);
    }

}

export default new FiltersPo();
