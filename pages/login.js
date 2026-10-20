import BasePage from "../pages/base.js"
import {
	emailID,
	password,
	loginButton,
	invalidToastMessage,
	usernameValidation,
	usernameRequired,
	passwordRequired,
	errorMessage,
	popupMessage,
	yes
} from "../pageobject/landingPage.js"
import { baseURL, Password, username, AdminEmailID, AdminPassword } from "../config"
import {
	email, pass,
	minimum_password,
	maximum_password, spaceData, invalidEmailFormat, dum_username, registerEmail, registerPassword
} from "../data/value.json"

class LoginPage extends BasePage {
	constructor(page) {
		super(page)
	}
	async OpenApp() {
		await this.open(baseURL)
		return this.waitForPageLoad()
	}
	async ValidCredentials() {
		await this.waitAndFill(emailID, username)
		await this.waitAndFill(password, Password)
		await this.Click_getByText(loginButton)
		await this.handleSessionConflict(popupMessage, yes)
	}
	async loginWithRegisteredMailId() {
		await this.waitAndFill(emailID, registerEmail)
		await this.waitAndFill(password, registerPassword)
		await this.Click_getByText(loginButton)
		await this.handleSessionConflict(popupMessage, yes)
	}
	async InvalidUsername() {
		await this.waitAndFill(emailID, email)
		await this.waitAndFill(password, Password)
		await this.Click_getByText(loginButton)
		await this.isElementVisible(invalidToastMessage, errorMessage)
		await this.refresh()
	}
	async InvalidPassword() {
		await this.waitAndFill(emailID, dum_username)
		await this.waitAndFill(password, pass)
		await this.Click_getByText(loginButton)
		await this.isElementVisible(invalidToastMessage, errorMessage)
		await this.refresh()
	}
	async MaximumPasswordValue() {
		await this.waitAndFill(emailID, dum_username)
		await this.waitAndFill(password, maximum_password)
		await this.Click_getByText(loginButton)
		await this.refresh()
	}
	async MinimumPasswordValue() {
		await this.waitAndFill(emailID, dum_username)
		await this.waitAndFill(password, minimum_password)
		await this.Click_getByText(loginButton)
		await this.refresh()
	}
	async UnproperEmailID() {
		await this.waitAndFill(emailID, invalidEmailFormat)
		await this.Click_getByText(loginButton)
		await this.isElementVisible(usernameValidation, errorMessage)
		await this.refresh()
	}
	async spacedataEmailAndPassword() {
		await this.waitAndFill(emailID, spaceData)
		await this.waitAndFill(password, spaceData)
		await this.Click_getByText(loginButton)
		await this.isElementVisible(usernameRequired, errorMessage)
		await this.isElementVisible(passwordRequired, errorMessage)
	}
	async adminLogin() {
		await this.waitAndFill(emailID, AdminEmailID)
		await this.waitAndFill(password, AdminPassword)
		await this.Click_getByText(loginButton)
	}

}
export default LoginPage