/*Test Cases for Country
1.add country check per field validation
2.in edit check per field and check country code and timezone should be disabled
3.country can able to delete
4.country should add based on country name unique
*/

import test from "../fixtures/fixture"

test.describe('@country: Country Functionality',()=>{
    test.beforeEach(async({loginpage})=>{
        await test.step(`Logged in as Admin`,async()=>{
            await loginpage.OpenApp()
            await loginpage.adminLogin()
        })
    })
    test('@country_add: Add',async({country})=>{
        await test.step(`Per Field validation and added country`,async()=>{
            await country.Country_PerFieldValidation()
            await country.Add_Country()
        })
    })
    test('@country_edit: Edit',async({country})=>{
        await test.step(`check per field validation in edit and saved`,async()=>{
            await country.Edit_Country()
        })
    })
    test('@country_delete: Delete',async({country})=>{
        await test.step(`check per field validation in edit and saved`,async()=>{
            await country.Delete_Country()
        })
    })
    test('@country_unique: Unique',async({country})=>{
        await test.step(``,async()=>{
            await country.Add_Country()
            await country.Unique_Country()
            await country.Add_Country_with_differentName()
            await country.Unique_Country()
        })
    })
})