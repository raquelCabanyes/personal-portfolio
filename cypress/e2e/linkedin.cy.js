describe('open linkedin link test', () => {
  it('should open linkedin', () => {
    cy.visit('http://localhost:4200');

    //Change the behavior of the link to open in the same tab
    cy.get('a[target="_blank"]').invoke('removeAttr', 'target');
    cy.get('#linkedin').should('be.visible').click();
    cy.url().should('eq', 'https://es.linkedin.com/in/raquelcabanyes');
  });
});
