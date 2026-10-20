import BasePage from "./base"
import {
    country_menu,
    country_search,
    country_norows,
    country_add,
    country_name,
    country_code,
    country_currency,
    country_exchangerate,
    country_numberformat,
    country_timezone,
    country_add_toastmessage,
    country_edit_toastmessage,
    country_delete_toastmessage,
    country_deletepopup_message,
    country_save,
    country_yesdelete,
    country_nodelete,
    country_error,
    country_edit,
    country_delete,
    country_thirdDot,
    country_unique
} from "../pageobject/countryPage"
import * as data from "../data/value.json"
import {
    coun_name,
    coun_code,
    coun_currency,
    coun_exchange,
    coun_numberformat
} from "../data/validation.json"
import { errorMessage } from "../pageobject/landingPage"

class Country extends BasePage {
    constructor(page) {
        super(page)
    }
    async Add_Country() {
        await this.waitAndClick(country_menu)
        await this.waitAndClick(country_add)
        await this.waitAndFill(country_name, data.country)
        await this.waitAndFill(country_code, data.country_code)
        await this.waitAndFill(country_currency, data.country_currency)
        await this.waitAndFill(country_exchangerate, data.country_exchangerate)
        await this.waitAndFill(country_numberformat, data.country_numberformat)
        await this.selectValueFromDropdown(country_timezone, data.country_timezone)
        await this.waitAndClick(country_save)
        await this.isElementVisible(country_add_toastmessage, country_error)
    }
    async Add_Country_with_differentName() {
        await this.waitAndClick(country_menu)
        await this.waitAndClick(country_add)
        await this.waitAndFill(country_name, data.differentcountry)
        await this.waitAndFill(country_code, data.country_code)
        await this.waitAndFill(country_currency, data.country_currency)
        await this.waitAndFill(country_exchangerate, data.country_exchangerate)
        await this.waitAndFill(country_numberformat, data.country_numberformat)
        await this.selectValueFromDropdown(country_timezone, data.country_timezone)
        await this.waitAndClick(country_save)
        await this.isElementVisible(country_add_toastmessage, country_error)
    }
    async Country_PerFieldValidation() {
        await this.waitAndClick(country_menu)
        await this.waitAndClick(country_add)
        await this.validatePerField(country_name, coun_name)
        await this.validatePerField(country_code, coun_code)
        await this.validatePerField(country_currency, coun_currency)
        await this.validatePerField(country_exchangerate, coun_exchange)
        await this.validatePerField(country_numberformat, coun_numberformat)
    }
    async Edit_Country() {
        await this.waitAndClick(country_menu)
        await this.waitAndFill(country_search, data.country)
        await this.waitAndClick(country_thirdDot)
        await this.waitAndClick(country_edit)
        await this.validatePerField(country_name, coun_name)
        await this.validatePerField(country_code, coun_code)
        await this.validatePerField(country_currency, coun_currency)
        await this.validatePerField(country_exchangerate, coun_exchange)
        await this.validatePerField(country_numberformat, coun_numberformat)
        await this.waitAndFill(country_code, data.country_code)
        await this.waitAndFill(country_currency, data.country_currency)
        await this.waitAndFill(country_exchangerate, data.country_exchangerate)
        await this.waitAndFill(country_numberformat, data.country_numberformat)
        await this.selectValueFromDropdown(country_timezone, data.country_timezone)
        await this.waitAndClick(country_save)
        await this.isElementVisible(country_edit_toastmessage, country_error)
    }
    async Delete_Country() {
        await this.waitAndClick(country_menu)
        await this.waitAndFill(country_search, data.country)
        await this.waitAndClick(country_thirdDot)
        await this.waitAndClick(country_delete)
        await this.isElementVisible(country_deletepopup_message, country_error)
        await this.waitAndClick(country_nodelete)
        await this.waitAndFill(country_search, data.country)
        await this.waitAndClick(country_thirdDot)
        await this.waitAndClick(country_delete)
        await this.waitAndClick(country_yesdelete)
        await this.isElementVisible(country_delete_toastmessage, errorMessage)
    }
    async Unique_Country() {
        await this.isElementVisible(country_unique, country_error)
    }
}
// dropdown check for simple validation or else need to add submit button line in there
export default Country
