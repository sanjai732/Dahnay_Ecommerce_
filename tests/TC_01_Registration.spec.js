/*
Test Cases for registration
get the otp page details and stored in file
remove element in bl and trade license
already added gst and pan
rejected mail id will allow or not in registration
*/
import test from "../fixtures/fixture.js"

test.describe('@personalregister: Registration test suite', () => {
     test('Register in personal details page', async ({ loginpage, registerpage }) => {
        await test.step('Redirect to register page', async () => {
            await loginpage.OpenApp()
            await registerpage.registerButtonClick()
        })
        await test.step(`Field Assert and Add Details`, async () => {
            await registerpage.perFieldValidation()
            await registerpage.tACLinkValidation()
            await registerpage.fillPersonalDetails()
        })
        await test.step(`OTP verification`,async()=>{
            await registerpage.otpVerification()
        })
    })
})

test.describe('@kycregister: KYC Registration Functionality', () => {
    test('', async ({ loginpage, registerpage }) => {
        await test.step(`Login with registered mail after OTP page`, async () => {
            await loginpage.OpenApp()
            await loginpage.loginWithRegisteredMailId()
        })
        await test.step(`Field Assert and valid details in KYC Page`,async()=>{
            await registerpage.perFieldValidationKYC()
            await registerpage.fillKycDetailsIndia()
        })
    })
})