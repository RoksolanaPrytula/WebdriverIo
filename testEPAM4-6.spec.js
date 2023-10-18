
describe("Test suite",() =>{
  it("Check the policies list", async() =>{
    await browser.url("https://www.epam.com/");
    await browser.maximizeWindow();
  await browser.execute(function() {
   window.scrollTo(0, document.body.scrollHeight);
    });

    const  policyList = await $(".policies");
    const policyLinks = await policyList.$$('a.fat-links');
    const expectedPolicies = ['INVESTORS','COOKIE POLICY','OPEN SOURCE', 'APPLICANT PRIVACY NOTICE','PRIVACY POLICY','WEB ACCESSIBILITY'];
    const policyTexts = await Promise.all(policyLinks.map(async (link) => link.getText()));
    for (const expectedPolicy of expectedPolicies) {
      expect(policyTexts).toContain(expectedPolicy);
    }

  })  ;
  

  it("Check that allow to switch location list by region", async() =>{
    const  amer = await $("//a[text()='AMERICAS']");
    const  emea = await $("//a[text()='EMEA']");
    const  apac = await $("//a[text()='APAC']");
    expect( await amer.isDisplayed()).toBe(true);
   expect( await emea.isDisplayed()).toBe(true);
   expect( await apac.isDisplayed()).toBe(true);
  
   apac.waitForClickable();
   apac.click();
   const hongKongLocator = "//button[@data-country-title='Hong Kong SAR']";

await browser.waitUntil(async () => {
  const hongKongElement = await $(hongKongLocator);
  return hongKongElement.isDisplayed();
}, {
  timeout: 10000, 
  timeoutMsg: 'Expected element to be visible after 10s'
});

const hongKong = await $(hongKongLocator);
expect(await hongKong.isDisplayed()).toBe(true);


 })  ;

 it("Check the search function", () => {
  const searchButton = $(".header-search-ui.header-search-ui-23.header__control");
  const searchInput = $("//*[@id='new_form_search']");
  const searchSubmitButton = $(".bth-text-layer");

  searchButton.click();
  searchInput.setValue("AI");
  searchSubmitButton.click();

  const searchedResult = $("//*[@id='main']/div[1]/div/section/div[2]/div[4]/section/div[3]/article[1]/h3/a");
  const expectedText = 'AI';

  searchedResult.waitForText(expectedText, { timeout: 10000 });
  expect(searchedResult).toHaveTextContaining(expectedText);
});
 

  

})