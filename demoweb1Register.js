describe("demowebshop", () => {
    it("register user", () => {
      browser.url("https://demowebshop.tricentis.com/");
      const randomEmail = `testuser${Math.floor(Math.random() * 10000)}@example.com`;
  
      
      const registerButton = $('.ico-register');
      registerButton.click();
  
      
      const firstNameField = $('//*[@id="FirstName"]');
        firstNameField.waitForDisplayed();
  
    
      const lastNameField = $('//*[@id="LastName"]');
      const emailField = $('//*[@id="Email"]');
      const passwordField = $('//*[@id="Password"]');
      const confirmPasswordField = $('//*[@id="ConfirmPassword"]');
  
      
      firstNameField.setValue("John");
      lastNameField.setValue("Doe");
      emailField.setValue(randomEmail);
      passwordField.setValue("Password");
      confirmPasswordField.setValue("Password");
  
      
      const registrationButton = $('//*[@id="register-button"]');
      registrationButton.waitForClickable();
  
    
      registrationButton.click();
  
      
      browser.waitUntil(() => {
        const currentURL = browser.getUrl();
        return currentURL === "https://demowebshop.tricentis.com/registerresult/1";
      }, {
        timeout: 10000, 
        timeoutMsg: "Expected URL to change to registration result page"
      });
    });
  });