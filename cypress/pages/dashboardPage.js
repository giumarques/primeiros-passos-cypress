class DashboardPage {

    selectorsList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
        }

        return selectors
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }
}

export default DashboardPage


//Alternative

// class DashboardPage {

//             dashboardGrid = ".orangehrm-dashboard-grid"
//             myInfoButton = "[href='/web/index.php/pim/viewMyDetails']"

    
//     accessDashboardPage() {
//             cy.visit('/web/index.php/dashboard/index')
        
// }
//     checkGrid() {
//             cy.get(this.dashboardGrid)
//              cy.get(this.myInfoButton).click()
// }


// }

// export default DashboardPage
