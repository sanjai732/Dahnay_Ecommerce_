import {test as fixture} from "@playwright/test"
import LoginPage from "../pages/login"
import RegisterPage from "../pages/register"

const test = fixture.extend({
    loginpage: async ({page},use)=>{
        await use (new LoginPage(page))
    },
    registerpage: async ({page}, use)=>{
        await use (new RegisterPage(page))
    }
})
export default test;