/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'

describe('Funcionalidade: Cadastro', () => {

    it('Deve realizar cadastro com sucesso', () => {
        cy.visit('/register.html')

        cy.get('#name').type('Bruno Rocha')
        cy.get('#email').type(faker.internet.email())
        cy.get('#phone').type('19999999999')
        cy.get('#password').type('Teste123')
        cy.get('#confirm-password').type('Teste123')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
    })

    
    })      

      it('Deve impedir cadastro sem informar o nome', () => {
        cy.login()
        cy.visit('/register.html')

        cy.get('#email').type(faker.internet.email())
        cy.get('#phone').type('19999999999')
        cy.get('#password').type('Teste123')
        cy.get('#confirm-password').type('Teste123')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
    })
      it('Deve impedir cadastro sem aceitar os termos', () => {
        cy.login()
        cy.visit('/register.html')

        cy.get('#name').type('Bruno Rocha')
        cy.get('#email').type(faker.internet.email())
        cy.get('#phone').type('19999999999')
        cy.get('#password').type('Teste123')
        cy.get('#confirm-password').type('Teste123')
        cy.get('#register-btn').click()
    })
    it('Deve impedir cadastro com e-mail inválido', () => {
        cy.login()
        cy.visit('/register.html')

        cy.get('#name').type('Bruno Rocha')
        cy.get('#email').type('email-invalido')
        cy.get('#phone').type('19999999999')
        cy.get('#password').type('Teste123')
        cy.get('#confirm-password').type('Teste123')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
    

})
