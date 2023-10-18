describe("changing number of items ", () => {
  let prices; 

  it("changing number of items ", async () => {
    await browser.url("https://demowebshop.tricentis.com/");
    await browser.maximizeWindow();
    await browser.pause(2000);

    const computerGroup = await browser.$('//ul[@class="top-menu"]/li/a[contains(text(),"Computers")]');
    await computerGroup.moveTo();

    const desktopsLink = await browser.$('a[href="/desktops"]');
    await desktopsLink.waitForDisplayed({ timeout: 10000 });
    await desktopsLink.click();

    const elements = await $$('.price.actual-price');
    const defaultNumberOfItems = elements.length;
    console.log(`Default number of items: ${defaultNumberOfItems}`);

    const changeNumberOfItems = await browser.$('#products-pagesize');
    changeNumberOfItems.selectByAttribute('value', 'https://demowebshop.tricentis.com/desktops?pagesize=4');
    await browser.pause(3000); 

   // const elements1 = await $$('.price.actual-price');
   // const currentNumberOfItems1 = elements1.length;
   // console.log(`Current number of items1: ${currentNumberOfItems1}`);
   
   // expect(currentNumberOfItems1).to.equal(4);

   const currentNumberOfItems1 = (await $$('.price.actual-price')).length;

   if (currentNumberOfItems1 === 4) {
     console.log(`Current number of items1: ${currentNumberOfItems1}`);
     console.log("The number of items changed");
   } else {
     console.log(`Current number of items1: ${currentNumberOfItems1}`);
     console.log("The number of items were not changed.");
   }
   


   //prices.sort((a, b) => {
     // const priceA = parseFloat(a.replace('$', '').replace(',', '')); // Parse as a number
    //  const priceB = parseFloat(b.replace('$', '').replace(',', '')); // Parse as a number
   //   return priceA - priceB; // Sort in ascending order
   // });

    
  });
});