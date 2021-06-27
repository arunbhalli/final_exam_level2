describe('User can see list of courses', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('is expected to display 7', () => {
    cy.get('[data-cy=carft-academy-courses]').should('have.length', '7');
  });
  it('is expected to to show content of courses', () => {
    cy.get('[data-cy=carft-academy-courses]')
      .first()
      .within(() => {
        cy.get('[data-cy=title]').should('contain', 'WORK THE WEB');
        cy.get('[data-cy=description]').should('contain', "Do you want to understand how applications for the web are built, but don’t know where to start? This workshop is for everyone that is curious about programming for the internet and wants to gain new skills in web development and basic data science. We'll be covering the basics of HTML, CSS, and JavaScript, and by the end of the day, you'll have an overview of the big picture of how internet applications are structured and how you can Work The Web - not only consume it.")
        cy.get('[data-cy=category]').should('contain', 'Workshops');
        cy.get('[data-cy=Instructors]').should(
          'contain',
          'Thomas Ochman, Emma-Maria Thalén'
        );
        cy.get('[data-cy=information]').should(
          'contain',
          'up to 1 day on-site.(2 to 7 hours depending on audience, please contact us for deetails) This course can be delivered as a mix of theory sessions and code-along practical examples or strictly as a demo session.'
        );
        cy.get('[data-cy=price]').should(
          'contain',
          'From 1 000 SEK - €100 (Contact us for details)'
        );
      });
  });
});
