describe('Autenticação - Cenário 1', () => {
  beforeEach(() => {
    cy.visit('/index.php?controller=authentication&back=my-account');
  });

  it('Deve permitir login com credenciais válidas', () => {
    // Carrega os dados do fixture
    cy.fixture('users').then((users) => {
      // Usa o comando customizado para login com dados do fixture
      cy.login(users.validUser.email, users.validUser.password);
    });

    // Validação do redirecionamento
    cy.url().should('include', 'controller=my-account');
    cy.contains('Welcome to your account').should('be.visible');
  });
});
