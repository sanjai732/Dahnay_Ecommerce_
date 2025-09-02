/* 
login with valid username with password
invalid username with valid password
valid username with invalid password
invalid username with password
maximum password value 
minimum password value
invalid email id 
*/

import test from '../fixtures/fixture.js'

test.describe(
	'@smoke: Login as a standard user to verify the products page and logout from the application',
	() => {
		test('Valid Credentials', async ({ loginpage }) => {
			await test.step(`Open the APP and check logo`, async () => {
			await loginpage.OpenApp()
			await loginpage.authentication()
			})
		})
	})

test.describe(
	'@smoke: freight forwarder registration',()=>{
		test('Register with India Country',async({loginpage})=>{
			await test.step('First Fill personal details in register page',async()=>{
				await loginpage.OpenApp()
			})

		})
	})	


