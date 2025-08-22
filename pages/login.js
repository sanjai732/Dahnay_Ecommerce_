import basePage from "../pages/base"
import { emailID,dropdown,password,loginButton} from "../pageobject/landingPage"
import { baseURL,login_dropdown,Password,username } from "../config"

class LoginPage extends basePage{
	constructor(page){
		super (page)
	}
	async OpenApp(){
		await super.open(baseURL)
		return await super.waitForPageLoad()
	}
	async authentication(){
		//await this.selectValueFromDropdown(dropdown,login_dropdown)
		await this.waitAndFill(emailID, username)
		await this.waitAndFill(password, Password)
		await this.waitAndClick(loginButton)
	}
}
 export default LoginPage