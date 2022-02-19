describe('Events page', () => {
  beforeEach(() => {
    cy.task('db:reset')
    cy.task('db:seed', 'default')
  })
  it('Loads a list of events', () => {
    cy.visit('/')
    cy.adminLogin('superadmin@picket.com', 'apassword')
    cy.testId('events_link').click()
    cy.url().should('contain', 'events')
    cy.get('tbody').find('tr').should('have.length', 10)
  })
})
