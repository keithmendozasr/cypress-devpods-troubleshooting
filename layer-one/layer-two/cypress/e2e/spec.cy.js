describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('.dropdown-toggle').click()
      .then(() => cy.get('.dropdown-menu > :nth-child(1) > a').click())
      .then(() => cy.get('#query-btn').should('contain', 'Button'))
      
  })

  it('Second random test', () => {
    cy.visit('https://example.cypress.io/commands/assertions')
    cy.get('.assertion-table')
      .find('tbody tr:last').should('have.class', 'success')
  })
})