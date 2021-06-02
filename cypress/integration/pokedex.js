/* eslint-disable no-undef */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('visit pokemon page from front page', function() {
    cy.visit('http://localhost:5000')
    cy.get('a[href*="charmander"]').click()
    cy.get('#pokemon-page').contains('charmander')
  })
})