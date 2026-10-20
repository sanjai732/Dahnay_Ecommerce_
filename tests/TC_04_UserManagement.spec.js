import test from '../fixtures/fixture.js'

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