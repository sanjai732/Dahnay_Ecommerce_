import {test as fixture} from "@playwright/test"
import LoginPage from "../pages/login"
import RegisterPage from "../pages/register"
import Service_Provider from "../pages/service_provider"
import Country from "../pages/country"

const test = fixture.extend({
    loginpage: async ({page},use)=>{
        await use (new LoginPage(page))
    },
    registerpage: async ({page}, use)=>{
        await use (new RegisterPage(page))
    },
    serviceprovider: async({page}, use)=>{
        await use (new Service_Provider(page))
    },
    country: async({page},use)=>{
        await use(new Country(page))
    }
})
export default test;