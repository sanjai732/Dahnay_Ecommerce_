import BasePage from "../pages/base"
import * as page from "../pageobject/holidayPage"
import * as data from "../data/value.json"
import * as expect from "../data/validation.json"

class Holiday extends BasePage {
    constructor(page) {
        super(page)
    }
    async holidayAdd() {
        await this.waitAndClick(page.holidayMenu)
        await this.waitAndClick(page.holidayAdd)
        await this.selectValueFromDropdown(page.holidayPortCode, data.holidayPort)
        await this.waitAndClick(page.holidayDateBtn)
        await this.waitAndClick(page.holidayNxtMonthBtn)
        await this.waitAndClick(page.holidayTenDateBtn)
        await this.waitAndFill(page.holidayName, data.holiday)
        await this.waitAndClick(page.holidaySave)
        await this.waitAndClick(page.holidaySaveyes)
        await this.isElementVisible(page.holidayAddToastMessage, page.holidayErrorMessage)
    }
    async validationPerField() {
        await this.waitAndClick(page.holidayMenu)
        await this.waitAndClick(page.holidayAdd)
        await this.waitAndClick(page.holidaySave)
        await this.isElementVisible(expect.holidayPort, page.holidayErrorMessage)
        await this.isElementVisible(expect.holidayDate, page.holidayErrorMessage)
        await this.validatePerField(page.holidayName, expect.holidayName)
    }
    async holidayEdit() {
        await this.waitAndClick(page.holidayMenu)
        await this.waitAndFill(page.holidaySearch, data)
        await this.waitAndClick(page.holidayThirdDot)
        await this.waitAndClick(page.holidayEdit)
        await this.waitAndClick(page.holidaySave)
        await this.isElementVisible(expect.holidayPort, page.holidayErrorMessage)
        await this.isElementVisible(expect.holidayDate, page.holidayErrorMessage)
        await this.validatePerField(page.holidayName, expect.holidayName)
        await this.selectValueFromDropdown(page.holidayPortCode, data.holidayPort)
        await this.waitAndClick(page.holidayDateBtn)
        await this.waitAndClick(page.holidayNxtMonthBtn)
        await this.waitAndClick(page.holidayTenDateBtn)
        await this.waitAndFill(page.holidayName, data.holiday)
        await this.waitAndClick(page.holidaySave)
        await this.waitAndClick(page.holidaySaveyes)
        await this.isElementVisible(page.holidayEditToastMessage, page.holidayErrorMessage)
    }
    async holidayDelete() {
        await this.waitAndClick(page.holidayMenu)
        await this.waitAndFill(page.holidaySearch, data)
        await this.waitAndClick(page.holidayThirdDot)
        await this.waitAndClick(page.holidayDelete)
        await this.isElementVisible(page.holidayDeletePopUpMessage, page.holidayErrorMessage)
        await this.waitAndClick(page.holidaySaveNo)
        await this.waitAndClick(page.holidayDelete)
        await this.waitAndClick(page.holidaySaveyes)
        await this.isElementVisible(page.holidayDeleteToastMessage, page.holidayErrorMessage)
    }
}
export default Holiday