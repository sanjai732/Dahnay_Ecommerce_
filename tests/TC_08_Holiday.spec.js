/* 
Test case of holiday
excel need to add
*/
import test from "../fixtures/fixture"
test.describe('Holiday Test Suite', () => {
    test.beforeEach(async ({ loginpage }) => {
        await loginpage.OpenApp()
        await loginpage.adminLogin()
    })
    test('@addholiday:',async({holiday})=>{
        await test.step(``,async()=>{
            await holiday.validationPerField()
            await holiday.holidayAdd()
        })
    })
    test('@editholiday:',async({holiday})=>{
        await test.step(``,async()=>{
            await holiday.holidayEdit()
        })
    })
    test('@deleteholiday',async({holiday})=>{
        await test.step(``,async()=>{
            await holiday.holidayDelete()
        })
    })
})