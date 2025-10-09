class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            buttonSubmit: "[type='submit']",
            arrowButton: ".oxd-select-text--arrow",
            selectOption: ".oxd-radio-wrapper"
        }

        return selectors
    }


    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear()
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    
    }
    
    fillEmployeeDetails(employeeId, otherId, driversLicenceNumber, driversLicenceDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenceNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenceDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().buttonSubmit).eq(0).click()
        cy.get('body').should('contain', "Successfully Updated")
        cy.get('.oxd-toast-close')
    }

    fillStatus() {
        cy.get(this.selectorsList().arrowButton).eq(0).click()
        cy.get('.oxd-select-option').contains('Belgian').click()
        cy.get(this.selectorsList().arrowButton).eq(1).click()
        cy.get('.oxd-select-option').contains('Married').click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type('2010-01-01')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get('.oxd-radio-wrapper').contains('Female').click()
    }

    fillMedicalStatus(testField) {
        cy.get(this.selectorsList().arrowButton).eq(2).click()
        cy.get('.oxd-select-option').contains('B+').click()
        cy.get(this.selectorsList().genericField).eq(9).clear().type(testField)
    }
}

export default MyInfoPage
