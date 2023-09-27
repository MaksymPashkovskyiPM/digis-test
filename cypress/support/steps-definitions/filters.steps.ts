import {Given} from '@badeball/cypress-cucumber-preprocessor';
import filters from '../page-object/filters.po';


Given('I filter to view only {string} tasks', (text: string) => {
    filters.getTodoFilters().contains(text).click()
});

Given('I Clear completed tasks', () => {
    filters.getClearCompletedButton().click()
});
