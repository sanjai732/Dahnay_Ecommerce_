import { expect } from '@playwright/test'

class BasePage {
	constructor(page) {
		this.page = page
	}
	async open(url) {
		return await this.page.goto(url)
	}
	async title() {
		return await this.page.title()
	}
	async refresh() {
		return await this.page.reload()
	}
	async pause() {
		return await this.page.pause()
	}
	async url() {
		return await this.page.url()
	}
	async waitForPageLoad() {
		return await this.page.waitForLoadState('domcontentloaded')
	}
	async waitAndClear(selector) {
		return await this.page.locator(selector).nth(0).clear()
	}
	async waitAndClick(selector) {
		return await this.page.locator(selector).nth(0).click()
	}
	async Click_getByText(selector){
		return await this.page.getByText(selector).click()
	}
	async waitAndHardClick(selector) {
		return await this.page.click(selector, { force: true })
	}
	async waitAndFill(selector, text) {
		return await this.page.fill(selector, text)
	}

	async keyPress(selector, key) {
		return await this.page.press(selector, key)
	}

	async takeScreenShot() {
		return expect(await this.page.screenshot()).toMatchSnapshot(
			'MyScreenShot.png'
		)
	}

	async verifyElementText(selector, text) {
		const textValue = await this.page.textContent(selector)
		return expect(textValue.trim()).toBe(text)
	}

	async verifyElementContainsText(selector, text1, text2) {
		const locatorText = await this.page.locator(selector)
		await expect(locatorText).toContainText(text1)
		return await expect(locatorText).toContainText(text2)
	}

	async verifyJSElementValue(selector, text) {
		const textValue = await this.page.locator(selector, element => element.value)
		return expect(textValue.trim()).toBe(text)
	}

	async selectValueFromDropdown(selector, text) {
		const dropdown = await this.page.locator(selector)
		return await dropdown.selectOption({ value: text }) // value means value || label means visible text || index means index
	}

	async verifyElementAttribute(selector, attribute, value) {
		const textValue = await this.page.getAttribute(selector, attribute)
		return expect(textValue.trim()).toBe(value)
	}

	async getFirstElementFromTheList(selector) {
		const rows = await this.page.locator(selector)
		const count = await rows.count()
		for (let i = 0; i < count; ++i) {
			const firstItem = await rows.nth(0).textContent()
			return firstItem
		}
	}

	async getLastElementFromTheList(selector) {
		const rows = await this.page.locator(selector)
		const count = await rows.count()
		for (let i = 0; i < count; ++i) {
			const lastItem = await rows.nth(5).textContent()
			return lastItem
		}
	}

	async clickAllElements(selector) {
		const rows = await this.page.locator(selector)
		const count = 2
		for (let i = 0; i < count; ++i) {
			await rows.nth(i).click()
		}
	}

	async clickAllLinksInNewTabs(selector) {
		const rows = this.page.locator(selector)
		const count = rows.count()
		for (i in range(count)) {
			await rows.nth(i).click((modifiers = ['Control', 'Shift']))
		}
	}

	async isElementVisible(selector, errorMessage) {
		try {
			await expect(this.page.locator(selector)).toBeVisible({ timeout: 3000 })
		} catch (error) {
			throw new Error(`${errorMessage}`)
		}
	}

	async isElementNotVisible(selector) {
		const element = this.page.locator(selector)
		return expect(element).toBeHidden
	}

	async isElementEnabled(selector, errorMessage) {
		const element = this.page.locator(selector)
		try {
			const isEnabled = await element.isEnabled()
			expect(isEnabled).toBeTruthy()
		} catch (error) {
			throw new Error(`${errorMessage}`)
		}
	}

	async isElementChecked(selector, errorMessage) {
		const element = this.page.locator(selector)
		try {
			const isChecked = await element.isChecked()
			expect(isChecked).toBeTruthy()
		} catch (error) {
			throw new Error(`${errorMessage}`)
		}
	}
	async validatePerField(selector, cases) {
		for (const testcase of cases) {
			await this.page.fill(selector, testcase.input)
			await this.page.keyboard.press('Tab')
			if (testcase.message !== "") {
				await expect(this.page.locator(testcase.message)).toBeVisible()
			}
			else {
				await expect(this.page.locator(selector)).toHaveValue(testcase.input)
			}
		}
	}

	async multiWindowTermsAndCondition(selector, txt, value) {
		const [newPage] = await Promise.all([
			this.page.waitForEvent('popup'),
			this.page.click(selector)
		])
		await newPage.waitForLoadState()
		expect(txt).toContain(value)
		await newPage.close()
	}

	async validateInputFiles(selector, document) {
		for (const doc of document) {
			await this.page.locator(selector).setInputFiles(doc.path)
			await expect(this.page.locator(doc.validation)).toBeVisible()
		}

	}

	async uploadFile(selector, document) {
		await this.page.locator(selector).setInputFiles(document)
	}

	async handleSessionConflict(selector, selector1) {
		const popup = await this.page.locator(selector)
		const yesButton = await this.page.locator(selector1)
		if (popup.isVisible({ timeout: 3000 }).catch(() => false)) {
			console.log("session conflict detected")
			await yesButton.click()
		}
		else{
			console.log("No session conflict")
		}
	}
}
export default BasePage