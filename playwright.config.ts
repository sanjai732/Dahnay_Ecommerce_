// import { defineConfig, devices } from '@playwright/test'

// export default defineConfig({
// 	testMatch: ['tests/TC_Registration.js'],
// 	fullyParallel: !true,
// 	timeout: 10000,
// 	forbidOnly: !!process.env.CI,
// 	retries: process.env.CI ? 2 : 0,
// 	workers: process.env.CI ? 1 : 2,
// 	reporter: [['html', { open: 'on-failure' }]],
// 	use: {
// 		headless: false,
// 		baseURL: 'http://qa.ams.ai',
// 		trace: 'retain-on-failure',
// 		screenshot: 'only-on-failure',
// 		video: 'retain-on-failure'
// 	},
// 	projects: [
// 		{
// 			name: 'chromium',
// 			use: { ...devices['Desktop Chrome'] }
// 		}
// 	]
// })

export const testDir = "tests"
export const timeout = 60000
export const retries = 0
export const reporter = [
	['html',{open:'on-failure'}],
]

export const projects = [
	{
		name: `Chrome`,
		use: {
			browserName: `chromium`,
			channel: `chrome`,
			headless: false,
			screenshot: `only-on-failure`,
			video: `retain-on-failure`,
			trace: `retain-on-failure`
		}
	 },
	// {
	// 	name: `Firefox`,
	// 	use: {
	// 		browserName: `firefox`,
	// 		ignoreHTTPSErrors: true,
	// 		headless: true,
	// 		screenshot: `only-on-failure`,
	// 		video: `retain-on-failure`,
	// 		trace: `retain-on-failure`,
	// 		launchOptions: {
	// 			slowMo: 200
	// 		}
	// 	}
	// },
	// {
	// 	name: `Safari`,
	// 	use: {
	// 		browserName: `webkit`,
	// 		ignoreHTTPSErrors: true,
	// 		screenshot: `only-on-failure`,
	// 		video: `retain-on-failure`,
	// 		trace: `retain-on-failure`
	// 	}
	// },
	// {
	// 	name: `Edge`,
	// 	use: {
	// 		browserName: `chromium`,
	// 		channel: `msedge`,
	// 		ignoreHTTPSErrors: true,
	// 		screenshot: `only-on-failure`,
	// 		video: `retain-on-failure`,
	// 		trace: `retain-on-failure`,
	// 		launchOptions: {
	// 			slowMo: 100
	// 		}
	// 	}
	// }
]

