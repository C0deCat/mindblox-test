/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Todo app test", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it("Structural test", () => {
        cy.get('.title').should('contain', 'todos')
        cy.get('.todoContainer .todoContent input.todo-input').should('have.prop', 'placeholder', 'What needs to be done')

        cy.get('.checkList--item').eq(0).within(() => {
            cy.get('.checkbox__input').should('have.prop', 'checked', true)
            cy.get('.checkList--item__label').should('contain', 'Открыть тудушки')
            cy.get('.checkList--item__label').should('have.class', 'checkList--item__label_checked')
        })

        cy.get('.checkList--item').eq(1).within(() => {
            cy.get('.checkbox__input').should('have.prop', 'checked', false)
            cy.get('.checkList--item__label').should('contain', 'Ввести текст и нажать Enter чтобы добавить новую')
            cy.get('.checkList--item__label').should('not.have.class', 'checkList--item__label_checked')
        })

        cy.get('.control--itemsLeft').should('contain', '3 items left');
        
        cy.get('.filters__input[value="ALL"] + .filters__button').should('contain', 'All');
        cy.get('.filters__input[value="ACTIVE"] + .filters__button').should('contain', 'Active')
        cy.get('.filters__input[value="COMPLETED"] + .filters__button').should('contain', 'Completed')

        cy.get('.clearButton').should('contain', 'Clear completed')
    })

    it("Add todo", () => {
        cy.get('input.todo-input').type('New test todo{enter}')

        //Проверяем что добавилась в конец
        cy.get('.checkList--item').eq(5).within(() => {
            cy.get('.checkbox__input').should('have.prop', 'checked', false)
            cy.get('.checkList--item__label').should('contain', 'New test todo')
            cy.get('.checkList--item__label').should('not.have.class', 'checkList--item__label_checked')
        })

        //значение item-left увеличилось
        cy.get('.control--itemsLeft').should('contain', '4 items left');
    })

    it('Check todo', () => {
        cy.get('.checkList--item').eq(0).within(() => {
            cy.get('.checkbox').click()
            cy.get('.checkbox__input').should('have.prop', 'checked', false)
            cy.get('.checkList--item__label').should('not.have.class', 'checkList--item__label_checked')

            cy.get('.checkbox').click()
            cy.get('.checkbox__input').should('have.prop', 'checked', true)
            cy.get('.checkList--item__label').should('have.class', 'checkList--item__label_checked')
        })

        cy.get('.checkList--item').eq(2).within(() => {
            cy.get('.checkbox__input').should('have.prop', 'checked', false)
            cy.get('.checkList--item__label').should('not.have.class', 'checkList--item__label_checked')

            cy.get('.checkbox').click()
            cy.get('.checkbox__input').should('have.prop', 'checked', true)
            cy.get('.checkList--item__label').should('have.class', 'checkList--item__label_checked')
        })
    })

    it('delete todo', () => {
        cy.get('.checkList--item').eq(1).within(() => {
            cy.get('.checkbox').click()
        })
        cy.get('.checkList--item').eq(2).within(() => {
            cy.get('.checkbox').click()
        })

        cy.get('.clearButton').click()

        cy.get('.checkList--item').should('have.length', 1)
        cy.get('.checkList--item').eq(0).within(() => {
            cy.get('.checkbox__input').should('have.prop', 'checked', false)
            cy.get('.checkList--item__label').should('contain', 'Clear completed чтобы удалить выполненные')
            cy.get('.checkList--item__label').should('not.have.class', 'checkList--item__label_checked')
        })
    })

    it('filter todo', () => {
        cy.get('.filters__input[value="ALL"]').should('have.prop', 'checked', true);
        cy.get('.checkList--item').should('have.length', 5)

        cy.get('.filters__input[value="ACTIVE"] + .filters__button').click();
        cy.get('.checkList--item').should('have.length', 3)
        cy.get('.checkList--item .checkList--item__label').eq(0).should('contain', 'Ввести текст и нажать Enter чтобы добавить новую')
        cy.get('.checkList--item .checkList--item__label').eq(1).should('contain', 'Поиграться с фильтрами')
        cy.get('.checkList--item .checkList--item__label').eq(2).should('contain', 'Clear completed чтобы удалить выполненные')

        cy.get('.filters__input[value="COMPLETED"] + .filters__button').click();
        cy.get('.checkList--item').should('have.length', 2)
        cy.get('.checkList--item .checkList--item__label').eq(0).should('contain', 'Открыть тудушки')
        cy.get('.checkList--item .checkList--item__label').eq(1).should('contain', 'Вы великолепны')
    })
})