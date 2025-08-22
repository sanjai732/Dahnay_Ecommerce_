import {test as fixture} from "@playwright/test"
import LoginPage from "../pages/login"

const test = fixture.extend({
    loginpage: async ({page},use)=>{
        await use (new LoginPage(page))
    },
})
export default test;