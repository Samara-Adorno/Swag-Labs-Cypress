## 🧾 Automação Web com Cypress - Swag Labs

Projeto desenvolvido como parte do exercício “Atividade Avaliativa – Automação Web com Cypress”, aplicando os princípios de **Automação de testes para WEB** utilizando o **Cypress**.

## 🚀 Objetivo

Criar uma simulação de interações com as funcionalidades de **Login**, **Produtos**, **Carrinho** e **Checkout** do sistema [Swag Labs](https://www.saucedemo.com/).

Os testes seguem a estrutura **Gherkin** (`Dado`, `Quando`, `Então`) para sua melhor compreensão e organização.

---

## ⚙ Tecnologias Utilizadas

* [Cypress](https://www.cypress.io/) (versão 15 ou superior recomendada)
* Node.js (versão 20+)
* Automation Exercise API ([https://fakestoreapi.com](https://automationexercise.com/api_list))

---

## 🧩 Estrura do projeto

| cypress - | SwagLabs |
| :--- | :--- |
 cypress/ ├─ e2e/ │ 
│  └─  cart.cy  | 
│  └─ checkout.cy.js |
|  └─ login.cy.js |
│  └─ products.cy.js |

---

## 🧪 Casos de Teste

# Login
| Funcionalidade | Teste | Resultado Esperado |
| :--- | :--- | :--- |
| Login | ✅ Login com credenciais válidas | Redirecionar para página de produtos |
| Login | ❌ Login com senha inválida | Exibir mensagem de erro |
| Login | ❌ Login com usuário bloqueado |  Exibir mensagem “user has been locked out” |
| Login | ⚪ Login com campos vazios |  Impedir login e exibir alerta |
| Login | ❌ Login com usuário problmamático |  Exibir mensagem de erro |

# Produtos
| Funcionalidade | Teste | Resultado Esperado |
| :--- | :--- | :--- |
| Produtos | ✅ Validar exibição da lista de produtos | Todos os produtos aparecem após login |
| Produtos | ✅ Ordenação por Nome de A → Z | Produtos em ordem alfabética crescente |
| Produtos | ✅ Ordenação por Nome de Z → A | Produtos em ordem alfabética decrescente|
| Produtos | ✅ Ordenação por Preço: Menor para o Maior | Produtos por preço em ordem crescente |
| Produtos | ✅ Ordenação por Preço: Maior para o Menor | Produtos por preço em ordem decrescente |

# Carrinho
| Funcionalidade | Teste | Resultado Esperado |
| :--- | :--- | :--- |
| Carrinho | ✅ Adicionar 1 produto ao carrinho | Contador do carrinho = 1 |
| Carrinho | ✅ Adicionar 2 produtos ao carrinho | Contador do carrinho = 2 |
| Carrinho | ✅ Remover produto do carrinho | Carrinho atualiza corretamente|
| Carrinho | ✅ Visualizar carrinho | Itens adicionados são exibidos |

# Checkout
| Funcionalidade | Teste | Resultado Esperado |
| :--- | :--- | :--- |
| Checkout | ✅ Preencher dados válidos | Avança para página de revisão |
| Checkout | ⚪ Campos vazios no checkout | Exibir aviso de preenchimento obrigatório |
| Checkout | ✅ Finalizar compra | Exibir mensagem “Thank you for your order!” |
| Checkout | ✅ Cancelar checkout |  Retorna para lista de produtos |

---

## ▶ Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/Samara-Adorno/Swag-Labs-Cypress.git
   ```

   2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute os testes:

   * Modo interativo:

     ```bash
     npx cypress open
     ```
     
   * Modo headless (terminal):

     ```bash
     npx cypress run
     ```

---

### 🧑‍🎓 Nome do discente e RA

| Nome do Discente | RA        |
| ---------------- | --------- |
| Samara Adorno   | 2001639 |
---

### 🧑‍🎓 Disciplina

**Teste e Qualidade de Software - Profª Michele**
