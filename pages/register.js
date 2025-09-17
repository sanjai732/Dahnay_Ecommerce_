import BasePage from "./base.js"
import * as page from "../pageobject/registerPage.js"
import { registerButton_login } from "../pageobject/landingPage.js"
import * as data from "../data/value.json"
import * as validation from "../data/validation.json"
import {TAC} from "../config.js"

class RegisterPage extends BasePage {
    constructor(page) {
        super(page)
    }
    async registerButtonClick(){
        await this.waitForPageLoad()
        await this.waitAndClick(registerButton_login)
    }
    async fillPersonalDetails() {
        await this.waitAndFill(page.fullName, data.registerName)
        await this.selectValueFromDropdown(page.designation, data.registerDesignation)
        await this.selectValueFromDropdown(page.mobileCode, data.registerMobileCode)
        await this.waitAndFill(page.mobileNumber, data.registerMobileNumber)
        await this.waitAndFill(page.mailId, data.registerEmail)
        await this.waitAndFill(page.password, data.registerPassword)
        await this.waitAndFill(page.confirmPassword, data.registerPassword)
        await this.waitAndClick(page.termsAndCondition)
        await this.waitAndClick(page.registerButton)
    }
    async perFieldValidation(){
        await this.validatePerField(page.fullName,validation.fullName)
        await this.validatePerField(page.mobileNumber,validation.phoneCode)
        await this.validatePerField(page.mailId,validation.email)
        await this.validatePerField(page.password,validation.password)
        await this.validatePerField(page.confirmPassword,validation.confirmPassword)
        await this.waitAndClear(page.password)
        await this.waitAndClear(page.confirmPassword)
        await this.isElementVisible(validation.confirmPasswordRequired,page.errorMessage)
    }
    async tACLinkValidation(){
        await this.multiWindowTermsAndCondition(page.tACLink,validation.TermsAndConditionLink,TAC)
    }
    async otpVerification(){
        await this.verifyElementContainsText(page.otpPage,data.otp,`OTP sent to ${data.registerEmail}`)
        const url = await this.url()
        console.log("OTP URL:", url)
        await this.isElementVisible(page.otpChangeMail,page.errorMessage)
        await this.isElementVisible(page.otpDidntReceive,page.errorMessage)
        await this.isElementVisible(page.otpResend,page.errorMessage)
        await this.isElementVisible(page.otpsubmit,page.errorMessage)
    }

    async fillKycDetailsIndia(){
        await this.waitAndFill(page.legalCompanyName,data.legalCompanyName)
        await this.selectValueFromDropdown(page.state, data.state)
        await this.selectValueFromDropdown(page.city, data.city)
        await this.waitAndFill(page.gst, data.gst)
        await this.waitAndFill(page.pan, data.pan)
        //await this.waitAndFill(page.iec, data.iec)
        await this.waitAndFill(page.trade, data.trade)
        await this.uploadFile(page.bl,data.coi)
        await this.uploadFile(page.gstDocument, data.gstDocu)
        await this.waitAndClick(page.kyc_submit)
    }
    async fillKycDetailsForeign(){
        await this.waitAndFill(page.legalCompanyName,data.legalCompanyName)
        await this.selectValueFromDropdown(page.state, data.state)
        await this.selectValueFromDropdown(page.city, data.city)
        await this.waitAndFill(page.gst, data.gst)
        await this.waitAndFill(page.pan, data.pan)
        //await this.waitAndFill(page.iec, data.iec)
        //await this.waitAndFill(page.duns, data.dunsNumber)
        await this.uploadFile(page.gstDocument, data.gstDocu)
        await this.uploadFile(page.coiFile, data.coi)
        await this.waitAndClick(page.kyc_submit)
    }
     async fillKycDetailsWithDuns(){
        await this.waitAndFill(page.legalCompanyName,data.legalCompanyName)
        await this.selectValueFromDropdown(page.state, data.state)
        await this.selectValueFromDropdown(page.city, data.city)
        await this.waitAndFill(page.gst, data.gst)
        await this.waitAndFill(page.pan, data.pan)
        await this.waitAndFill(page.duns, data.dunsNumber)
        await this.uploadFile(page.gstDocument, data.gstDocu)
        await this.waitAndClick(page.kyc_submit)
    }
    async perFieldValidationKYC(){
        await this.waitAndClick(page.kyc_submit)
        await this.validatePerField(page.legalCompanyName,validation.companyName)
        await this.validatePerField(page.gst,validation.gst)
        await this.validatePerField(page.pan,validation.pan)
        await this.isElementVisible(validation.state, page.errorMessage)
        await this.isElementVisible(validation.city, page.errorMessage)
        await this.validateInputFiles(page.gstDocument, validation.gstFileUpload)
    }

}
export default RegisterPage
