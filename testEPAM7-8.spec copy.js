
describe("Part7-8",() =>{
  it("Check form's fields validation", async () => {
    await browser.url("https://www.epam.com/about/who-we-are/contact");
    await browser.maximizeWindow();
    await browser.pause(2000);
  
    const requiredFields = [
      "//*[@name='user_first_name']",
      "//*[@name='user_last_name']",
      "//*[@name='user_email']",
      "//*[@name='user_phone']"
    ];
  
    for (const selector of requiredFields) {
      const element = $(selector);
      const ariaRequiredValue = await element.getAttribute("aria-required");
      expect(ariaRequiredValue).toBe("true");
    }
 
 
  })  ;
  
  it("Company logo on the header leads to the main page", async () => {
    const companyLogo = $(".header__logo-container.desktop-logo");
    
    companyLogo.click();
    await browser.pause(1000);
   // console.log(await browser.getUrl());
    const currentURL = (await browser.getUrl());
    expect(currentURL).toBe("https://www.epam.com/");
   
  });
  
 


})