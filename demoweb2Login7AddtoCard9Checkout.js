describe("LOgin,add prod to card and buy", () => {
  it("login user", async () => {
    browser.url("https://demowebshop.tricentis.com/");
    
    const loginButton = $('.ico-login');
    loginButton.click();
    await browser.pause(2000);


    const emailField = $('//*[@id="Email"]');
    emailField.waitForDisplayed();
    const passwordField = $('//*[@id="Password"]');

    emailField.setValue("roksja1@gmail.com");
    passwordField.setValue("123456");
    await browser.pause(2000);

   
   const logInButton = $('.button-1.login-button');
   logInButton.waitForClickable();
   logInButton.click();
   await browser.pause(2000);


browser.waitUntil(() => {
 const currentURL = browser.getUrl();
return currentURL === "https://demowebshop.tricentis.com/";
}, {
timeout: 10000, 
timeoutMsg: "Expected URL to change to registration result page"
});
await browser.pause(2000);

const accountCorrect = await $('.account').getText();
const expectedText = 'roksja1@gmail.com';
if (accountCorrect === expectedText) {
console.log('Login successful');
} else {
console.log('Login unsuccessful');
}
    
  });
  
  
  
  it("add to cart computer", async () => {
   

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

    const addToCart = await browser.$('//*[@id="add-to-cart-button-75"]');
    await addToCart.waitForDisplayed({ timeout: 10000 });
    await addToCart.click();
    
    const goToShoppingCard = await browser.$('//*[@id="topcartlink"]/a/span');
    await goToShoppingCard.waitForDisplayed({ timeout: 10000 });
    await goToShoppingCard.click();



    const computerAdded = await browser.$('img[alt="Picture of Simple Computer"][src="https://demowebshop.tricentis.com/content/images/thumbs/0000204_simple-computer_80.jpeg"][title="Show details for Simple Computer"]');
    await computerAdded.waitForDisplayed({ timeout: 10000 });

    
  });
  it("Checkout and buy", async () => {
   
async function performCheckout() {
  const iAgreeCheckbox = await $('input[id="termsofservice"]');
  await iAgreeCheckbox.waitForClickable();
  await iAgreeCheckbox.click();

  const checkoutBtn = await $('input[id="checkout"]');
  await checkoutBtn.waitForClickable();
  await checkoutBtn.click();
  await browser.pause(1000);

  const billingAddress = await $('input[id="billing-buttons-container"]'); 
  await billingAddress.waitForClickable();
  await billingAddress.click();
  await browser.pause(4000);

  const shippingAddress = await $('input[id="shipping-buttons-container"]'); 
  await shippingAddress.waitForClickable();
  await shippingAddress.click();
  await browser.pause(4000);

  const shippingMethod = await $('input[id="shipping-method-buttons-container"]'); 
  await shippingMethod.waitForClickable();
  await shippingMethod.click();
  await browser.pause(2000);

  const paymentMethod = await $('input[id="payment-method-buttons-container"]'); 
  await paymentMethod.waitForClickable();
  await paymentMethod.click();
  await browser.pause(2000);

  const paymentInfo = await $('input[id="payment-info-buttons-container"]'); 
  await paymentInfo.waitForClickable();
  await paymentInfo.click();
  await browser.pause(2000);

  const confirm = await $('input[id="confirm-order-buttons-container"]'); 
  await confirm.waitForClickable();
  await confirm.click();
}


it("Checkout and buy", async () => {  
  await performCheckout();

    const successMsg = await $(".title").getText();
  expect(successMsg).toBe("Your order has been successfully processed!");
});


   
  });

});
