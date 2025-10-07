describe('Orange HRM tests spec', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.wait(1000)
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
    cy.pause()
   })
  it.skip('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Test')
    cy.get('[name="password"]').type('Test')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert')
   })

})

describe('Orange HRM tests spec', () => {
  it.skip('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()

    // Espera a URL mudar corretamente
    cy.location('pathname', { timeout: 10000 }).should('eq', '/web/index.php/dashboard/index')

    // Espera o texto aparecer com um timeout maior
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text', { timeout: 10000 })
      .should('contain', 'Dashboard')
  })

})
