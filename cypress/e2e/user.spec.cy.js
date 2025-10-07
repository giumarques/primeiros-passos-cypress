import userData from '../fixtures/user-data.json'

describe('Orange HRM tests spec', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    buttonSubmit: "[type='submit']"
    
  }
  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('John')
    cy.get(selectorsList.lastNameField).clear().type('Smith')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employer')
    cy.get(selectorsList.genericField).eq(4).clear().type('Random Id')
    cy.get(selectorsList.genericField).eq(5).clear().type('DVlic')
    cy.get(selectorsList.genericField).eq(6).clear().type('2030-01-01')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.buttonSubmit).eq(0).click()
    cy.get('body').should('contain', "Successfully Updated")
    cy.get('.oxd-toast-close')


   })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
   })

})