import BasePage from "../pages/base.js"
import {emailID,
	    password,
		loginButton,
		invalidToastMessage,
		usernameValidation,
		usernameRequired,
		passwordRequired,
		errorMessage } from "../pageobject/landingPage.js"
import { baseURL,Password,username,dum_username } from "../config"
import {email,pass, minimum_password, maximum_password, spaceData, invalidEmailFormat} from "../data/value.json"

class LoginPage extends BasePage{
	constructor(page){
		super(page)
	}
	async OpenApp(){
		await this.open(baseURL)
		return this.waitForPageLoad()
	}
	async ValidCredentials(){
		await this.waitAndFill(emailID, username)
		await this.waitAndFill(password, Password)
		await this.waitAndClick(loginButton)
	}
	async InvalidUsername(){
		await this.waitAndFill(emailID, email)
		await this.waitAndFill(password, Password)
		await this.waitAndClick(loginButton)
		await this.isElementVisible(invalidToastMessage,errorMessage)
		await this.refresh()
	}
	async InvalidPassword(){
		await this.waitAndFill(emailID, dum_username)
		await this.waitAndFill(password, pass)
		await this.waitAndClick(loginButton)
		await this.isElementVisible(invalidToastMessage,errorMessage)
		await this.refresh()
	}
	async MaximumPasswordValue(){
		await this.waitAndFill(emailID, dum_username)
		await this.waitAndFill(password, maximum_password)
		await this.waitAndClick(loginButton)
		await this.refresh()
	}
	async MinimumPasswordValue(){	
		await this.waitAndFill(emailID, dum_username)
		await this.waitAndFill(password, minimum_password)
		await this.waitAndClick(loginButton)
		await this.refresh()
	}
	async UnproperEmailID(){
		await this.waitAndFill(emailID, invalidEmailFormat)
		await this.waitAndClick(loginButton)
		await this.isElementVisible(usernameValidation,errorMessage)
		await this.refresh()
	}
	async spacedataEmailAndPassword(){
		await this.waitAndFill(emailID, spaceData)
		await this.waitAndFill(password, spaceData)
		await this.waitAndClick(loginButton)
		await this.isElementVisible(usernameRequired,errorMessage)
		await this.isElementVisible(passwordRequired,errorMessage)
	}
}
 export default LoginPage