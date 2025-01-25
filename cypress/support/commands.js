Cypress.Commands.add('login', (email, password) => {
  cy.get('#email').type(email); 
  cy.get('#passwd').type(password); 
  cy.get('#SubmitLogin').click(); 
});

Cypress.Commands.add('recoverPassword', (email) => {
  cy.contains('Forgot your password?').click(); 
  cy.url().should('include', 'controller=password'); 
  cy.get('#email').type(email);
  cy.get('button[name="submitIdentity"]').click(); 
});
