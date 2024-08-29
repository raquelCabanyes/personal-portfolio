describe('Scroll Test', () => {
  it('should scroll down', () => {
    cy.visit('http://localhost:4200');

    //Move scroll down
    cy.scrollTo('bottom');

    // Check that container of course is visible on the screen
    cy.get('#containerCourses').should('be.visible');

    //Move scroll up
    cy.scrollTo('top');

    cy.get('#containerContact').should('be.visible');
  });
});
