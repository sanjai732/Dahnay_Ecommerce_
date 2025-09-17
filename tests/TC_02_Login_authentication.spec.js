/* 
Test Cases to be automated for Login functionality
1. Invalid username with valid password
2. Valid username with invalid password
3. Maximum password value 
4. Minimum password value
5. Unproper email id 
6. Space data in email and password
7. Valid username with password
*/

import test from '../fixtures/fixture.js'

test.describe(
	'@login: Login into application with multiple scenarios',
	() => {
		test('Login with multiple scenarios', async ({ loginpage }) => {
			await test.step(`Open the APP and login with Invalid username`, async () => {
				await loginpage.OpenApp()
				await loginpage.InvalidUsername()
			})
			await test.step(`Invalid password`, async () => {
				await loginpage.InvalidPassword()
			})
			await test.step(`Maximum password`, async () => {
				await loginpage.MaximumPasswordValue()
			})
			await test.step(`Minimum password`, async () => {
				await loginpage.MinimumPasswordValue()
			})
			await test.step(`unproper email ID`, async () => {
				await loginpage.UnproperEmailID()
			})
			await test.step(`Space Data`, async () => {
				await loginpage.spacedataEmailAndPassword()
			})
			await test.step(`valid credentials`, async () => {
				await loginpage.ValidCredentials()
			})
		    })
	    }) 