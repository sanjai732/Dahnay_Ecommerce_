import BasePage from "./base";
import * as page from "../pageobject/portPage";
import * as data from "../data/value.json"
import * as expect from "../data/validation.json"


class Port extends BasePage {
    constructor(page) {
        super(page)
    }
    async fillPort() {
        await this.waitAndClick(page.portMenu)
        await this.waitAndClick(page.portAdd)
        await this.selectValueFromDropdown(page.country, data.countryUsa)
        await this.selectValueFromDropdown(page.type, data.portDestinationType)
        await this.waitAndFill(page.portName, data.portName)
        await this.waitAndFill(page.portName, data.portCode)
        await this.selectValueFromDropdown(page.region, data.portEastRegion)
        await this.waitAndClick(page.portSubmit)
        await this.isElementVisible(page.portAddToast, page.errorMessage)
    }
    async fillPortIndia() {
        await this.waitAndClick(page.portMenu)
        await this.waitAndClick(page.portAdd)
        await this.selectValueFromDropdown(page.country, data.country)
        await this.selectValueFromDropdown(page.type, data.portOriginType)
        await this.waitAndFill(page.portName, data.portName)
        await this.waitAndFill(page.portName, data.portCode)
        await this.selectValueFromDropdown(page.region, data.portEastRegion)
        await this.waitAndClick(page.portSubmit)
        await this.isElementVisible(page.portAddToast, page.errorMessage)
    }
    async editPort() {
        await this.waitAndClick(page.portMenu)
        await this.waitAndFill(page.portSearchBox, data.portName)
        await this.waitAndClick(page.portThreeDot)
        await this.waitAndClick(page.portEdit)
        await this.waitAndClick(page.portSubmit)
        await this.isElementVisible(page.country, page.errorMessage)
        await this.isElementVisible(page.type, page.errorMessage)
        await this.isElementVisible(page.region, page.errorMessage)
        await this.validatePerField(page.portName, expect.portname)
        await this.validatePerField(page.portCode, expect.portcode)
        await this.selectValueFromDropdown(page.country, data.country)
        await this.selectValueFromDropdown(page.type, data.portOriginType)
        await this.waitAndFill(page.portName, data.portName)
        await this.waitAndFill(page.portName, data.portCode)
        await this.selectValueFromDropdown(page.region, data.portEastRegion)
        await this.waitAndClick(page.portSubmit)
        await this.isElementVisible(page.portEditToast, page.errorMessage)
    }
    async deletePort() {
        await this.waitAndClick(page.portMenu)
        await this.waitAndFill(page.portSearchBox, data.portName)
        await this.waitAndClick(page.portThreeDot)
        await this.waitAndClick(page.portDelete)
        await this.isElementVisible(page.deletePopupMessage, page.errorMessage)
        await this.waitAndClick(page.portDeleteNO)
        await this.waitAndClick(page.portDelete)
        await this.waitAndClick(page.portDeleteyes)
        await this.isElementVisible(page.portDeleteToast, page.errorMessage)
    }
    async uniquePortCode() {
        await this.waitAndClick(page.portMenu)
        await this.waitAndClick(page.portAdd)
        await this.selectValueFromDropdown(page.country, data.countryUsa)
        await this.selectValueFromDropdown(page.type, data.portDestinationType)
        await this.waitAndFill(page.portName, data.dummyPortName)
        await this.waitAndFill(page.portName, data.portCode)
        await this.selectValueFromDropdown(page.region, data.portEastRegion)
        await this.waitAndClick(page.portSubmit)
        await this.page.isElementVisible(page.uniquePortCodeMessage, page.errorMessage)
        await this.selectValueFromDropdown(page.country, data.countryUsa)
        await this.selectValueFromDropdown(page.type, data.portOriginType)
        await this.waitAndFill(page.portName, data.portName)
        await this.waitAndFill(page.portName, data.portCode)
        await this.selectValueFromDropdown(page.region, data.portEastRegion)
        await this.waitAndClick(page.portSubmit)
        await this.page.isElementVisible(page.uniquePortCodeMessage, page.errorMessage)
    }
    async uniquePortName() {
        await this.waitAndClick(page.portMenu)
        await this.waitAndClick(page.portAdd)
        await this.selectValueFromDropdown(page.country, data.country)
        await this.selectValueFromDropdown(page.type, data.portDestinationType)
        await this.waitAndFill(page.portName, data.portName)
        await this.waitAndFill(page.portName, data.dummyPortCode)
        await this.selectValueFromDropdown(page.region, data.portEastRegion)
        await this.waitAndClick(page.portSubmit)
        await this.page.isElementVisible(page.uniquePortNameMessage, page.errorMessage)
    }
    async perFieldValidation() {
        await this.waitAndClick(page.portMenu)
        await this.waitAndClick(page.portAdd)
        await this.waitAndClick(page.portSubmit)
        await this.isElementVisible(page.country, page.errorMessage)
        await this.isElementVisible(page.type, page.errorMessage)
        await this.isElementVisible(page.region, page.errorMessage)
        await this.validatePerField(page.portName, expect.portname)
        await this.validatePerField(page.portCode, expect.portcode)
    }
}
export default Port

