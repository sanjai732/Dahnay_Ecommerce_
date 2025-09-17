import BasePage from "./base"
import {
    service_provider_menu,
    service_provider_norecords,
    add_service_provider,
    service_provider_company_name,
    service_provider_logo,
    service_provider_length,
    service_provider_width,
    service_provider_height,
    service_provider_submit,
    service_provider_toast_message,
    service_provider_search,
    service_provider_thirdDot,
    edit_service_provider,
    delete_service_provider,
    service_provider_yesdelete,
    service_provider_nodelete,
    service_provider_update_toast_message,
    service_provider_delete_toast_message,
    service_provider_add_error,
    service_provider_error,
    service_provider_companyname_unique
} from "../pageobject/serviceProviderPage"
import { sp_companyName, sp_image, heigth, width, length } from "../data/value.json"
import { sp_company, sp_imageUpload, sp_l_b_h } from "../data/validation.json"
class Service_Provider extends BasePage {

    constructor(page) {
        super(page)
    }
    async service_provider_add() {
        await this.waitAndClick(service_provider_menu)
        await this.waitAndClick(add_service_provider)
        await this.waitAndFill(service_provider_company_name, sp_companyName)
        await this.uploadFile(service_provider_logo, sp_image)
        await this.waitAndFill(service_provider_length, length)
        await this.waitAndFill(service_provider_width, width)
        await this.waitAndFill(service_provider_height, heigth)
        await this.waitAndClick(service_provider_submit)
        await this.isElementVisible(service_provider_toast_message, service_provider_add_error)
    }
    async service_provider_per_validation() {
        await this.waitAndClick(service_provider_menu)
        await this.waitAndClick(add_service_provider)
        await this.validatePerField(service_provider_company_name, sp_company)
        await this.validateInputFiles(service_provider_logo, sp_imageUpload)
        await this.validatePerField(service_provider_length, sp_l_b_h)
        await this.validatePerField(service_provider_width, sp_l_b_h)
        await this.validatePerField(service_provider_height, sp_l_b_h)
    }
    async service_provider_edit() {
        await this.waitAndClick(service_provider_menu)
        await this.waitAndFill(service_provider_search, sp_companyName)
        await this.waitAndClick(service_provider_thirdDot)
        await this.waitAndClick(edit_service_provider)
        await this.validatePerField(service_provider_company_name, sp_company)
        await this.validateInputFiles(service_provider_logo, sp_imageUpload)
        await this.validatePerField(service_provider_length, sp_l_b_h)
        await this.validatePerField(service_provider_width, sp_l_b_h)
        await this.validatePerField(service_provider_height, sp_l_b_h)
        await this.waitAndFill(service_provider_company_name, sp_companyName)
        await this.uploadFile(service_provider_logo, sp_image)
        await this.waitAndFill(service_provider_length, length)
        await this.waitAndFill(service_provider_width, width)
        await this.waitAndFill(service_provider_height, heigth)
        await this.waitAndClick(service_provider_submit)
        await this.isElementVisible(service_provider_update_toast_message, service_provider_error)
    }
    async service_provider_delete() {
        await this.waitAndClick(service_provider_menu)
        await this.waitAndFill(service_provider_search, sp_companyName)
        await this.waitAndClick(service_provider_thirdDot)
        await this.waitAndClick(delete_service_provider)
        await this.isElementVisible(service_provider_deletepopup_message, service_provider_error)
        await this.waitAndClick(service_provider_nodelete)
        await this.waitAndFill(service_provider_search, sp_companyName)
        await this.waitAndClick(service_provider_thirdDot)
        await this.waitAndClick(delete_service_provider)
        await this.waitAndClick(service_provider_yesdelete)
        await this.isElementVisible(service_provider_delete_toast_message, service_provider_error)
    }
    async service_provider_unique() {
        await this.isElementVisible(service_provider_companyname_unique, service_provider_error)
    }

}
export default Service_Provider