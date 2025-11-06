describe('Funcionalidade de Checkout - Swag Labs', () => {

    // Preencher dados válidos
    it('Dado que estou no carrinho de compras, Quando eu preencher os dados de checkout válidos, Então devo ser redirecionado para a página de revisão', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('.inventory_item').first().find('button').contains('Add to cart').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').contains('Checkout').click()
        cy.get('[data-test="firstName"]').type('Samara', {force: true})
        cy.get('[data-test="lastName"]').type('Adorno', {force: true})
        cy.get('[data-test="postalCode"]').type('12345678', {force: true})
        cy.get('[data-test="continue"]').contains('Continue').click()
        cy.url().should('include', '/checkout-step-two.html')
    })

    // Campos vazios no checkout
    it('Dado que estou no carrinho de compras, Quando eu tentar continuar o checkout sem preencher os dados obrigatórios, Então deve exibir uma mensagem de erro', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('.inventory_item').first().find('button').contains('Add to cart').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').contains('Checkout').click()
        cy.get('[data-test="continue"]').contains('Continue').click()
        cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Error: First Name is required')
    })

    // Finalizar compra com sucesso
    it('Dado que estou na página de revisão do checkout, Quando eu finalizar a compra, Então devo ver a confirmação de pedido realizado com sucesso', () => {  
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('.inventory_item').first().find('button').contains('Add to cart').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').contains('Checkout').click()
        cy.get('[data-test="firstName"]').type('Samara', {force: true})
        cy.get('[data-test="lastName"]').type('Adorno', {force: true})
        cy.get('[data-test="postalCode"]').type('12345678', {force: true})
        cy.get('[data-test="continue"]').contains('Continue').click()
        cy.get('[data-test="finish"]').contains('Finish').click()
    })

    // Cancelar checkout
    it('Dado que estou na página de revisão do checkout, Quando eu cancelar o checkout, Então devo retornar para lista de produtos', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('.inventory_item').first().find('button').contains('Add to cart').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').contains('Checkout').click()
        cy.get('[data-test="firstName"]').type('Samara', {force: true})
        cy.get('[data-test="lastName"]').type('Adorno', {force: true})
        cy.get('[data-test="postalCode"]').type('12345678', {force: true})
        cy.get('[data-test="continue"]').contains('Continue').click()
        cy.get('[data-test="cancel"]').contains('Cancel').click()
        cy.url().should('include', '/inventory.html')
    })
});