Cypress.Commands.add('login', (email, password) => {
  cy.get('#email').type(email);
  cy.get('#passwd').type(password);
  cy.get('#SubmitLogin').click();
});
