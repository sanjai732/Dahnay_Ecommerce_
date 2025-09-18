/**
 * india chennai and usa chennai
   port code unique in all 
   check same port code and name should not be in different type // port code will be unique here
 */
import test from "../fixtures/fixture.js"
test.describe("Port Functionality", () => {
  test.beforeEach(async ({ loginpage }) => {
    await test.step(`Open the App and login as admin`, async () => {
      await loginpage.OpenApp()
      await loginpage.adminLogin()
    })
  })
  test("@addport: Add port", async ({ port }) => {
    await test.step(`Add New port and check per field validation`, async () => {
      await port.perFieldValidation()
      await port.fillPort()
    })
  })
  
  test("@editport: Edit port", async ({ port }) => {
    await test.step(`Edit port and check per field validation`, async () => {
      await port.editPort()
    })   
  })
  test("@deleteport: Delete port", async ({ port }) => {
    await test.step(`Delete port `, async () => {
      await port.deletePort()
    })   
  })
  test("@deleteport: Unique Port Code", async ({ port }) => {
    await test.step(`Delete port `, async () => {
      await port.uniquePortName()
    })   
  })
  test("@deleteport: Unique Port Name", async ({ port }) => {
    await test.step(`Delete port `, async () => {
      await port.uniquePortCode()
    })   
  })
})