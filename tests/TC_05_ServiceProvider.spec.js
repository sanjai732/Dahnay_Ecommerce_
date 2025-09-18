/*
Test Cases for service provider
1. enter all valid info (company name, logo, length, width and height) add,search and check in full list 
2. each field validation in edit 
3. check in role based for service provider and check able to delete the service provider
4. add another service provider with same company name to check uniqueness 
*/
import test from '../fixtures/fixture.js'

test.describe(
    '@service_provider: service provider functionality',
    () => {
        test.beforeEach(async ({ loginpage }) => {
            await test.step(`Open the app and logged in as Admin`, async () => {
                await loginpage.OpenApp()
                await loginpage.adminLogin()
            })
        })
        test('@service_provider_add: Add with field validation', async ({serviceprovider }) => {
            await test.step(`Check service provider with the page and per field validation in add`, async () => {
                await serviceprovider.service_provider_per_validation()
                await serviceprovider.service_provider_add()
            })
        })
        test('@service_provider_edit: Edit Functionality', async ({ serviceprovider }) => {
            await test.step(`Check service provider per field validation in edit`, async () => {
                await serviceprovider.service_provider_edit()
            })
        })
        test('@service_provider_delete: Delete Functionality', async ({ serviceprovider }) => {
            await test.step(`Deleted Service provider`, async () => {
                await serviceprovider.service_provider_delete()
            })
        })
        test('@service_provider_unique: Unique Functionality', async ({ serviceprovider }) => {
            await test.step(`Add same service provider with same company name to find UNIQUENESS`, async () => {
                await serviceprovider.service_provider_add()
                await serviceprovider.service_provider_unique()
            })
        })

    })
