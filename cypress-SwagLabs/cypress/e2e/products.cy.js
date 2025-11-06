describe('Funcionalidade de Produtos - Swag Labs', () => {

    //  Validar exibição da lista de produtos

    it('Dado que estou logado no sistema, Quando eu acessar a página de produtos, Então devo ver a lista de todos os produtos disponíveis', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('.inventory_item').should('have.length', 6)
    })

    // Ordenação por Nome de A → Z
    it('Dado que estou na página de produtos, Quando eu ordenar os produtos por Nome de A → Z, Então os produtos devem ser exibidos em ordem alfabética crescente', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('.product_sort_container').select('az')
        cy.get('.inventory_item_name').then(items => {
            const names = [...items].map(item => item.innerText)
            const sortedNames = [...names].sort()
            expect(names).to.deep.equal(sortedNames)
        })
    })

    // Ordenação por Nome de Z → A
    it('Dado que estou na página de produtos, Quando eu ordenar os produtos por Nome de Z → A, Então os produtos devem ser exibidos em ordem alfabética decrescente', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('.product_sort_container').select('za')
        cy.get('.inventory_item_name').then(items => {
            const names = [...items].map(item => item.innerText)
            const sortedNames = [...names].sort().reverse()
            expect(names).to.deep.equal(sortedNames)
        })
    })

    // Ordenação por Preço: Menor para o Maior
    it('Dado que estou na página de produtos, Quando eu ordenar os produtos por Preço: Menor para o Maior, Então os produtos devem ser exibidos em ordem crescente de preço', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('.product_sort_container').select('lohi')
        cy.get('.inventory_item_price').then(items => {
            const prices = [...items].map(item => parseFloat(item.innerText.replace('$', '')))
            const sortedPrices = [...prices].sort((a, b) => a - b)
            expect(prices).to.deep.equal(sortedPrices)
        })
    })

    // Ordenação por Preço: Maior para o Menor
    it('Dado que estou na página de produtos, Quando eu ordenar os produtos por Preço: Maior para o Menor, Então os produtos devem ser exibidos em ordem decrescente de preço', () => {
        const username = 'standard_user';
        const password = 'secret_sauce';

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login-box input[name="user-name"] ').type(username, {force: true})
        cy.get('.login-box input[name="password"] ').type(password, {force: true})
        cy.get('.login-box input[name="login-button"]').contains('Login').click()
        cy.get('.product_sort_container').select('hilo')
        cy.get('.inventory_item_price').then(items => {
            const prices = [...items].map(item => parseFloat(item.innerText.replace('$', '')))
            const sortedPrices = [...prices].sort((a, b) => b - a)
            expect(prices).to.deep.equal(sortedPrices)
        })
    })
});