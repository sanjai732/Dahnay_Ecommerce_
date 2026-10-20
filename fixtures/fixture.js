import {test as fix} from "@playwright/test"
import LoginPage from "../pages/login"
import RegisterPage from "../pages/register"
import Service_Provider from "../pages/service_provider"
import Country from "../pages/country"
import Port from "../pages/port"
import User from "../pages/user_management"
import Holiday from "../pages/holiday"

const Test = fix.extend({
    loginpage: async ({page},use)=>{
        await use (new LoginPage(page))
    },
    registerpage: async ({page}, use)=>{
        await use (new RegisterPage(page))
    },
    serviceprovider: async({page}, use)=>{
        await use (new Service_Provider(page))
    },
    country: async({page}, use)=>{
        await use(new Country(page))
    },
    port: async ({page}, use)=>{
        await use (new Port(page))
    },
    user: async ({page}, use)=>{
        await use (new User(page))
    },
    holiday: async({page}, use)=>{
        await use(new Holiday(page))
    }
})
export default Test;