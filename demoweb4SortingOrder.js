const { expect } = require('chai');

describe("demowebshop", () => {
  it("changing number of items - Low to High", async () => {
    await browser.url("https://demowebshop.tricentis.com/");
    await browser.maximizeWindow();
    await browser.pause(2000);

    const computerGroup = await browser.$('//ul[@class="top-menu"]/li/a[contains(text(),"Computers")]');
    await computerGroup.moveTo();

    const desktopsLink = await browser.$('a[href="/desktops"]');
    await desktopsLink.waitForDisplayed({ timeout: 10000 });
    await desktopsLink.click();

    // Change the sorting order to Low to High
    const changeSorting = await browser.$('//*[@id="products-orderby"]');
    await changeSorting.waitForDisplayed({ timeout: 10000 });
    await changeSorting.selectByAttribute('value', 'https://demowebshop.tricentis.com/desktops?orderby=10');
    await browser.pause(1000);

    const elements = await $$('.price.actual-price');

    // Extract price texts from web elements
    const priceTexts = await Promise.all(elements.map(element => element.getText()));

    // Expected price order - Low to High
    const lowToHigh = ["500.00", "800.00", "800.00", "1200.00", "1350.00", "1800.00"];

    // Use Chai assertions to check if the price order is correct
    expect(priceTexts).to.deep.equal(lowToHigh);
  });

  it("changing number of items - High to Low", async () => {
    

    // Change the sorting order to High to Low
    const changeSorting = await browser.$('#products-orderby');
    await changeSorting.waitForDisplayed({ timeout: 1000 });
    await changeSorting.selectByAttribute('value', 'https://demowebshop.tricentis.com/desktops?orderby=11');
    await browser.pause(1000);

    const elements1 = await $$('.price.actual-price');

    // Extract price texts from web elements
    const priceTexts = await Promise.all(elements1.map(element => element.getText()));

    // Expected price order - High to Low
    const highToLow = ["1800.00","1350.00", "1200.00", "800.00", "800.00", "500.00"];

    // Use Chai assertions to check if the price order is correct
    expect(priceTexts).to.deep.equal(highToLow);
  });
});
