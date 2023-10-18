
describe("Test suite",() =>{
  it("Check the title is correct", async() =>{
    await browser.url("https://www.epam.com/");
    await browser.maximizeWindow();
    const pageTitle =await browser.getTitle();

    expect(pageTitle).toEqual("EPAM | Software Engineering & Product Development Services") ;

  })  ;
  

  it("Check the ability to switch Light / Dark mode", async() =>{
    const SwitchModeToggle= await $("//nav[@aria-label='Main navigation']/preceding-sibling::section/div/div[@class='switch']");
    SwitchModeToggle.waitForClickable();
    SwitchModeToggle.click();

 const mode = await $("//body[contains(@class,'fonts-loaded')]");
 
await browser.waitUntil(async () => {
    const classAttributeValue = await mode.getAttribute('class');
    return classAttributeValue.includes('light');
  }, {
    timeout: 10000, 
    timeoutMsg: 'Class attribute did not contain "light" within the timeout period',
  });
  
   const classAttributeValue = await mode.getAttribute('class');
  expect(classAttributeValue).toContain('light');

 })  ;

  it("Check that allow to change language to UA", async() =>{
   
    const element1 = await $(".location-selector__button");
    element1.waitForClickable();
    element1.click();


    const element2 = await $("a.location-selector__link[lang='uk']");
    element2.waitForClickable();
    element2.click();

const SomeUkrWord = await $('.location-selector__button');

const expectedText = 'Україна (UA)';

await browser.waitUntil(async () => {
  const elementText = await SomeUkrWord.getText();
  return elementText.includes(expectedText);
}, {
  timeout: 10000, 
  timeoutMsg: `Element did not contain the expected text '${expectedText}' within the timeout period`,
});

expect(await SomeUkrWord.getText()).toEqual(expectedText);  

  });
  

})