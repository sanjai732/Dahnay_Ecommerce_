/* 
login with valid username with password
invalid username with valid password
valid username with invalid password
invalid username with password
maximum password value 
minimum password value
invalid email id 
*/

import test from '../fixtures/fixture'

test.describe.parallel(
	'@smoke: Login as a standard user to verify the products page and logout from the application',
	() => {
		test('Valid Credentials', async ({ loginpage }) => {
			await test.step(`Open the APP and check logo`, async () => {
				await loginpage.OpenApp()
				await loginpage.authentication()
			})
		})
	})


