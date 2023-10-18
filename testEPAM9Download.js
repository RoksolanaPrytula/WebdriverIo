// Load the libraries we need for path/URL manipulation & assertions
const path = require('path')
const fs = require('fs')
const { URL } = require('url')
const assert = require('assert');

const waitForFileExists = require('../util/waitForFileExists')

describe('Downloads', function () {
  it('should download the file', function () {
    
    browser.url('https://www.epam.com/about')

   
    const downloadLink = $('span.button__content.button__content--desktop');
    downloadLink.click();

    const filePath = path.join(downloadDir, fileName)
    
    browser.call(function (){
   
      return waitForFileExists(filePath, 60000)
    });

    
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    assert.ok(fileContents.includes('EPAM_Corporate_Overview_2023.pdf'))
  })
})