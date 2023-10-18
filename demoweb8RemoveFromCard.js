describe("add to cartcopy", () => {
  it("add to cart computer", async () => {
    await browser.url("https://demowebshop.tricentis.com/");
    await browser.maximizeWindow();
    await browser.pause(2000);

    const computerGroup = await browser.$('//ul[@class="top-menu"]/li/a[contains(text(),"Computers")]');
    await computerGroup.moveTo();

    
    const desktopsLink = await browser.$('a[href="/desktops"]');
    await desktopsLink.waitForDisplayed({ timeout: 10000 });
    await desktopsLink.click();

    const computer = await browser.$('//h2/a[@href="/simple-computer"]');
    await computer.waitForDisplayed({ timeout: 10000 });
    await computer.click();

    const selectProcessor = await browser.$('//*[@id="product_attribute_75_5_31_96"]');
    await selectProcessor.waitForDisplayed({ timeout: 10000 });
    await selectProcessor.click();

    
    await browser.pause(1000); 

    const addToCart = await browser.$('//*[@id="add-to-cart-button-75"]');
    await addToCart.waitForDisplayed({ timeout: 10000 });
    await addToCart.click();
  await browser.pause(3000); 

    
    const goToShoppingCard = await browser.$('//*[@id="topcartlink"]/a/span');
    await goToShoppingCard.waitForDisplayed({ timeout: 10000 });
    await goToShoppingCard.click();



    const computerAdded = await browser.$('img[alt="Picture of Simple Computer"][src="https://demowebshop.tricentis.com/content/images/thumbs/0000204_simple-computer_80.jpeg"][title="Show details for Simple Computer"]');
    await computerAdded.waitForDisplayed({ timeout: 10000 });

    
  });


  it("Remove From Card", async () => {
   

    const removeCheckbox = await browser.$('input[type="checkbox"][name="removefromcart"]');
    await removeCheckbox.waitForDisplayed({ timeout: 10000 });
    await removeCheckbox.click();

    const updateShoppingCard = await browser.$('input[type="submit"][name="updatecart"]');
    await updateShoppingCard.waitForDisplayed({ timeout: 10000 });
    await updateShoppingCard.click();

    const successMsg = await $(".order-summary-content").getText();
    expect(successMsg).toBe("Your Shopping Cart is empty!");

   
});
});
