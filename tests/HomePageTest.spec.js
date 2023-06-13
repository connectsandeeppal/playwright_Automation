const { test , expect } = require("@playwright/test");
test('Home page Test',async({page})=>{
    // we pass page fixture -all the cmd present in page fixtire
// goto cmd is used to navigate particular page
 await page.goto('https://www.demoblaze.com/');
// for validation we used expectawait
 expect(page).toHaveTitle('STORE');
const pageURL= page.url();console.log('page URL is:', pageURL);
await expect(page).toHaveURL('https://www.demoblaze.com/');
// close methhod is used to close page after test execution
 page.close();})