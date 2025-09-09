import test from "../fixtures/fixture.js"

test.describe('Registration test suite', ()=>{
    test('normal register process', async({loginpage, registerpage})=>{
        await loginpage.OpenApp()
        await registerpage.fillPersonalDetails()
    })
})