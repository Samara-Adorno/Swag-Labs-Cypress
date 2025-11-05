describe('Funcionalidade de Login - Swag Labs', () => {

    // Login com credenciais válidas
    it('Login com credenciais válidas', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
    })

    // Login com senha inválida
    it('Login com senha inválida', () => {
        const username = 'standard_user';
        const password = 123456;

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        // cy.contains('.login-box .error-message-container').should('be.visible')
    })
});