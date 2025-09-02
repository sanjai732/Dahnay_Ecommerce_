import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
	testMatch: ['tests/TC_Registration.js'],
	fullyParallel: !true,
	timeout: 5000,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : 2,
	reporter: [['html', { open: 'on-failure' }]],
	use: {
		headless: false,
		baseURL: 'http://qa.ams.ai',
		trace: 'retain-on-failure',
		screenshot: 'only-on-failure',
		video: 'retain-on-failure'
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		}
	]
})
