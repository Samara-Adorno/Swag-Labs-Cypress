describe('Funcionalidade de Carrinho - Swag Labs', () => {

    // Adicionar 1 produto ao carrinho
    it('Dado que estou na página de produtos, Quando eu adicionar um produto ao carrinho, Então o produto deve ser adicionado com sucesso', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('.inventory_item').first().find('button').contains('Add to cart').click()
        cy.get('.shopping_cart_badge').should('contain.text', '1')
    })

    // Adicionar 2 produtos ao carrinho
    it('Dado que estou na página de produtos, Quando eu adicionar dois produtos ao carrinho, Então os produtos devem ser adicionados com sucesso', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('.inventory_item').eq(0).find('button').contains('Add to cart').click()
        cy.get('.inventory_item').eq(1).find('button').contains('Add to cart').click()
        cy.get('.shopping_cart_badge').should('contain.text', '2')
    })

    // Remover produto do carrinho
    it('Dado que estou na página de carrinho, Quando eu remover um produto do carrinho, Então o produto deve ser removido com sucesso', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
         cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('.inventory_item').eq(0).find('button').contains('Add to cart').click()
        cy.get('.inventory_item').eq(1).find('button').contains('Add to cart').click()
        cy.get('.shopping_cart_badge').should('contain.text', '2')
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_item').first().find('button').contains('Remove').click()
        cy.get('.shopping_cart_badge').should('contain.text', '1')
    })

    // Visualizar carrinho
    it('Dado que estou na página de produtos, Quando eu acessar o carrinho de compras, Então devo ver os produtos adicionados ao carrinho', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('.inventory_item').eq(0).find('button').contains('Add to cart').click()
        cy.get('.inventory_item').eq(1).find('button').contains('Add to cart').click()
        cy.get('.inventory_item').eq(3).find('button').contains('Add to cart').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_item').should('have.length', 3)
    })
});