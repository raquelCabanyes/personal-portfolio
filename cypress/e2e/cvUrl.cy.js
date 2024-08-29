describe('CV url test', () => {
  it('should check cv url', () => {
    cy.visit('http://localhost:4200');

    //Can't download with cypress file
    //Check the download url
    cy.get('#cvUrl')
      .should('have.attr', 'href')
      .and(
        'include',
        'https://drive.google.com/file/d/1SOoCrJliI0O-mcO2nRFu6kdfMrEpjpL8/view?usp=sharing'
      );
  });
});
