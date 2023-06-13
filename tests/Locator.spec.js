import{ test, expect} from '@playwright/test';


test('Locator',async({page})=>{
   await page.goto('https://www.demoblaze.com/');

    // console.log('click on login button by using property')
    // await page.locator('id="login2').click();

    console.log('click on login button by using property')
    await page.click("id=login2");

    // console.log('Enter username by using CSS selector')
    // await page.locator('#loginusername').fill('pavanol');

    console.log('Enter username by using CSS selector')
    await page.fill("#loginusername",'pavanol');

    // console.log('Enter username by using CSS selector')
    // await page.type('#loginusername','pavanol');

    console.log('Enter password by using CSS selector')
    await page.locator('#loginpassword').fill('test@123');

    // console.log('Enter password by using CSS selector')
    // await page.fill("#loginpassword",'test@123');

    // console.log('Enter password by using CSS selector')
    // await page.type('#loginpassword','test@123')

    console.log('click on login button ');
    await page.click("//button[contains(text(),'Log in')]");

    console.log('Verify')
    const nameOfUser= await page.locator("//a[@id='nameofuser']");
    await expect(nameOfUser).toBeVisible();

    await page.close();



})
