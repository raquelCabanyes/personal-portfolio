describe('Navigation Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should navigate to Home', () => {
    cy.contains('Inicio').click();
    cy.url().should('include', '/home');
  });

  it('should navigate to About', () => {
    cy.contains('Sobre mi').click();
    cy.url().should('include', '/about');
  });

  it('should navigate to Portfolio', () => {
    cy.contains('Portafolio').click();
    cy.url().should('include', '/portofolio');
  });
});
