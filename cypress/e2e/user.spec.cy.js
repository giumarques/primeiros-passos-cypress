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
    buttonSubmit: "[type='submit']",
    arrowButton: ".oxd-select-text--arrow",
    selectOption: ".oxd-radio-wrapper"
    
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
    cy.get(selectorsList.arrowButton).eq(0).click()
    cy.get('.oxd-select-option').contains('Belgian').click()
    cy.get(selectorsList.arrowButton).eq(1).click()
    cy.get('.oxd-select-option').contains('Married').click()
    cy.get(selectorsList.genericField).eq(8).clear().type('2040-01-01')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get('.oxd-radio-wrapper').contains('Female').click()
    cy.get(selectorsList.buttonSubmit).eq(0).click()
    cy.get('body').should('contain', "Successfully Updated")
    cy.get('.oxd-toast-close')
    cy.get(selectorsList.arrowButton).eq(2).click()
    cy.get('.oxd-select-option').contains('B+').click()
    cy.get(selectorsList.arrowButton).eq(3).click()
    cy.get('.oxd-select-option').contains('Yes').click()
    cy.get(selectorsList.genericField).eq(9).clear().type('BloodTest')
    cy.get(selectorsList.buttonSubmit).eq(1).click()
    cy.get('body').should('contain', "Successfully Updated")



   })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
   })

})