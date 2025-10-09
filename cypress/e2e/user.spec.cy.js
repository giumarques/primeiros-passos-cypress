import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance');

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const chance = new Chance();


describe('Orange HRM tests spec', () => {

  it('User Info Update - Success', () => {
  
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), null, chance.last())
    myInfoPage.fillEmployeeDetails(chance.integer({min: 5, max: 8}), chance.ssn(), chance.cpf(), ('2028-01-01'))
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    myInfoPage.fillMedicalStatus(chance.word())
    myInfoPage.saveForm()

   
  })

})