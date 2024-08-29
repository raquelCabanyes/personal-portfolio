describe('mail test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('Should be of type mailto"', () => {
    cy.get('#sendMail').should('have.attr', 'href').and('include', 'mailto:')
  });

  it('Should check mail', () => {
    cy.get('#sendMail').should('have.attr', 'href', 'mailto:raquelcabanyes@hotmail.com')
  });
})
