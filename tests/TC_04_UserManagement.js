/**
 * Test Case for User Management
 * 
 * new -> approve, revalidate and reject btn
 * approve -> delete btn
 * revalidate -> details show
 * reject -> details
 * delete -> details
 */

test.describe('User Management Test Suite', () => {
    test.beforeEach(async({loginpage})=>{
        await loginpage.OpenApp()
        await loginpage.adminLogin()
    })
    test('',async({user})=>{
        await test.step(``,async()=>{
            
        })
    })

})