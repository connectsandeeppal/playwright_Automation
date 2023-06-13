import { test,expect } from "@playwright/test";

test('Locating multiple element',async({page})=>{
    await page.goto('https://www.demoblaze.com/');

    const links= await page.$$("//a");
    for(const link of links){
        const linktext=await link.textContent();
        console.log(linktext);
    }
})