
describe("•	Verify that ‘Computers’ group ",() =>{
    it("Check form's fields validation", async () => {
      await browser.url("https://demowebshop.tricentis.com/");
  await browser.maximizeWindow();
  await browser.pause(2000);

  const computerGroup = await browser.$('//ul[@class="top-menu"]/li/a[contains(text(),"Computers")]');
  await computerGroup.moveTo();

  const desktopsLink = await browser.$('a[href="/desktops"]');
  const notebooksLink = await browser.$('a[href="/notebooks"]');
  const accessoriesLink = await browser.$('a[href="/accessories"]');

  // Wait for the elements to be displayed
  await desktopsLink.waitForDisplayed({ timeout: 10000 });
  await notebooksLink.waitForDisplayed({ timeout: 10000 });
  await accessoriesLink.waitForDisplayed({ timeout: 10000 });

  const desktopsText = await desktopsLink.getText();
  const notebooksText = await notebooksLink.getText();
  const accessoriesText = await accessoriesLink.getText();

  console.log(`Desktops Link Text: ${await desktopsLink.getText()}`);
  console.log(`Notebooks Link Text: ${await notebooksLink.getText()}`);
  console.log(`Accessories Link Text: ${await accessoriesLink.getText()}`);

  if (desktopsText === 'Desktops' &&
  notebooksText === 'Notebooks' &&
  accessoriesText === 'Accessories') {
console.log('Text comparison succeeded.');
} else {
console.error('Text comparison failed.');
}
});
   
   
    })  ;