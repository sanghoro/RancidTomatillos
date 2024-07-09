describe('Homepage features', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    cy.visit('http://localhost:3000/');
  });

  it('should display the logo', () => {
    cy.get('.logo').should('exist');
  });

  it('should have a search bar', ()=>{
    cy.get('.search-bar').should('exist')
  })

  it('should have a search button', ()=>{
    cy.get('.search-button').should('exist')
  })

  it('should display the title of the main poster', () => {
    cy.get('.movie-title').should('have.length', 1);
  });

  it('should display all movies', ()=>{
    cy.get('[href="/movies/436270"] > .movie_card > .movie_card_image').should('exist')
  })

  it('should navigate to movie details page when a movie is clicked (for now we test with Black Adam)', () => {
    cy.get('[href="/movies/436270"] > .movie_card > .movie_card_image').click()
    cy.url().should('include', '/movies/436270');
    cy.get('.movie-details').should('be.visible');
  });

  it('should have header at the bottom of the homepage', ()=>{
    cy.get('.footers').should('exist')
  })
});