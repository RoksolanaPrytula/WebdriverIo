describe("add to cartcopy", () => {
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
  

  it("add to Wishlist", async () => {
    await browser.url("https://demowebshop.tricentis.com/");
    await browser.maximizeWindow();
    await browser.pause(2000);

    const shoppingCard = await browser.$('ul.top-menu a[href="/gift-cards"]');
    await shoppingCard.click();

    
    const giftCard = await browser.$('//a[text()="$5 Virtual Gift Card"]');
    await giftCard.waitForDisplayed({ timeout: 10000 });
    await giftCard.click();

    const recipientName = await browser.$('//*[@id="giftcard_1_RecipientName"]');
    await recipientName.waitForDisplayed({ timeout: 10000 });
    await recipientName.setValue("John");

    const recipientEmail = await browser.$('//*[@id="giftcard_1_RecipientEmail"]');
    await recipientEmail.waitForDisplayed({ timeout: 10000 });
    await recipientEmail.setValue("somemail@gmail.com");

    const addToWishlist = await browser.$('//*[@id="add-to-wishlist-button-1"]');
    await addToWishlist.waitForDisplayed({ timeout: 10000 });
    await addToWishlist.click();
    await browser.pause(5000); 

    const wishListPage = await browser.$('a.ico-wishlist > span.cart-label');
    await wishListPage.waitForDisplayed({ timeout: 10000 });
    await wishListPage.click();
       const cardAdded = await browser.$('//a[text()="$5 Virtual Gift Card"]');
    await cardAdded.waitForDisplayed({ timeout: 10000 });

    
  });


});
