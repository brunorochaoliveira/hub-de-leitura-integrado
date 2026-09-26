/// <reference types="cypress"/>
import user from "../fixtures/usuario.json"

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('/login.html')
    })

    it('Deve fazer login com sucesso', () => {
        cy.get('#email').type(user.email)
        cy.get('#password').type(user.senha)
        cy.get('#login-btn').click()

        cy.url().should('not.include', '/login.html')
    })
})