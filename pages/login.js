import BasePage from "../pages/base.js"
import { emailID,password,loginButton,dropDown} from "../pageobject/landingPage.js"
import { baseURL,login_customer,Password,username } from "../config"

class LoginPage extends BasePage{
	constructor(page){
		super(page)
	}
	async OpenApp(){
		await this.open(baseURL)
		return this.waitForPageLoad()
	}
	async authentication(){
		await this.selectValueFromDropdown(dropDown,login_customer)
		await this.waitAndFill(emailID, username)
		await this.waitAndFill(password, Password)
		await this.waitAndClick(loginButton)
	}
}
 export default LoginPage