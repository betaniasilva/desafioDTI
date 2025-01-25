import '../../../../support/commands'

describe('Autenticação - Login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('loginPath')); 
  });

  it('Cenário 1: Deve permitir login com credenciais válidas', () => {
    cy.fixture('users').then((user) => {
      console.log('user', user)
    
      cy.login(user.validUser.email, user.validUser.password);
    });

    cy.url().should('include', Cypress.env('dashboardPath'));
    cy.contains('Welcome to your account').should('be.visible');
  });

  it('Cenário 2: Deve enviar um e-mail de recuperação de senha com sucesso', () => {
    cy.fixture('users').then((user) => {
      cy.recoverPassword(user.recoveryEmail.email);
    });

    cy.contains('A confirmation email has been sent to your address').should('be.visible');
  });

  it('Cenário 3: Deve exibir erro ao tentar login com campo de e-mail vazio', () => {
    cy.fixture('users').then((user) => {
      cy.get('#passwd').type(user.invalidUser.password);
      cy.get('#SubmitLogin').click();

      
      cy.contains('An email address required').should('be.visible');
    });
  });
});
