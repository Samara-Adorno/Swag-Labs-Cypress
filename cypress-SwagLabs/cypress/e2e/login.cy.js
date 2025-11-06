describe('Funcionalidade de Login - Swag Labs', () => {

    // Login com credenciais válidas
    it('Dado que quero realizar o login no site, Quando eu digitar as credenciais válidas, Então devo ser redirecionado para a página de produtos', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
    })

    // Login com senha inválida
    it('Dado que quero logar no sistema, Quando eu digitar uma senha inválida, Então deve exibir uma mensagem de erro', () => {
        const username = 'standard_user';
        const password = '123456';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    // Login com usuário bloqueado
    it('Dado que quero logar no sistema, Quando eu digitar um usuário bloqueado, Então deve exibir uma mensagem de erro', () => {
        const username = 'locked_out_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

    // Login com campos vazios
    it('Dado que quero logar no sistema, Quando eu tentar acessar o sistema com o campos vazios, Então deve impedir login e exibir alerta', () => {
        const username = '';
        const password = '';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Epic sadface: Username is required')
    })
});