/// <reference types="cypress"/>

describe('Produtos', () => {

    it('Deve acessar a página de produtos', () => {
        cy.visit('/catalog.html')
        cy.contains('Conheça Nosso Acervo')
    })

    it('Deve encontrar Dom Casmurro no catálogo', () => {
        cy.visit('/catalog.html')
        cy.get('#search-input').type('Dom Casmurro')
        cy.contains('Dom Casmurro')
    })

    it('Deve adicionar Dom Casmurro à cesta', () => {
        cy.visit('/catalog.html')
        cy.get('#search-input').type('Dom Casmurro')
        cy.contains('Dom Casmurro').click()
        cy.get('.add-to-cart').first().click()
    })

})