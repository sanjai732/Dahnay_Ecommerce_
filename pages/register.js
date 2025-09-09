import BasePage from "./base.js"
import {
    fullName,
    designation,
    mobileCode,
    mobileNumber,
    mailId,
    password,
    confirmPassword,
    termsAndCondition,
    tACLink,
    registerButton,
    loginButton
} from "../pageobject/registerPage.js"
import { registerButton_login } from "../pageobject/landingPage.js"
import * as data from "../data/value.json"

class RegisterPage extends BasePage {
    constructor(page) {
        super(page)
    }
    async fillPersonalDetails(){
        await this.waitForPageLoad()
        await this.waitAndClick(registerButton_login)
        await this.waitAndFill(fullName,data.registerName)
        await this.selectValueFromDropdown(designation,data.registerDesignation)
        await this.selectValueFromDropdown(mobileCode,data.registerMobileCode)
        await this.waitAndFill(mobileNumber, data.registerMobileNumber)
        await this.waitAndFill(mailId,data.registerEmail)
        await this.waitAndFill(password,data.registerPassword)
        await this.waitAndFill(confirmPassword,data.registerPassword)
        await this.waitAndClick(termsAndCondition)
        await this.waitAndClick(registerButton)
    }

}
export default RegisterPage
