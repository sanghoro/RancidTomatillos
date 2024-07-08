describe('Homepage features', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    cy.visit('http://localhost:3000/')
  })


  it('should see the title of the application', () => {
    cy.visit('http://localhost:3000/')
  })


})