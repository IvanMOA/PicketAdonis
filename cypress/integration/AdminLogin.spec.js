describe('Admin login', () => {
  it('Logs in as an administrator', () => {
    cy.clearCookies()
    cy.adminLogin('superadmin@picket.com', 'apassword')
    cy.url().should('contain', 'dashboard')
  })
})
