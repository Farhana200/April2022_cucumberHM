package steps;

import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.AccountBankCash;
import pages.LoginPageHM;
import pages.TestBaseHM;

public class StepDefinitionHM extends TestBaseHM{
	LoginPageHM loginpageHM;
	AccountBankCash accountBankCash ;
	@Before
	public void setUp() {
		initDriver();
		loginpageHM = PageFactory.initElements(driver, LoginPageHM.class);
		accountBankCash  = PageFactory.initElements(driver, AccountBankCash .class);
	}
	
	@Given("^User is on the techfios login page$")
	public void user_is_on_techfios_the_login_page()  {
		driver.get("https://techfios.com/billing/?ng=login");
		takeScreenShot(driver);
	}
	@When("^User enters username \"([^\"]*)\"$")
	public void user_enters_username(String username)  {
		loginpageHM.enterUserName(username);
	}

	
	@When("^User enters password \"([^\"]*)\"$")
	public void user_enters_password(String password) {
		loginpageHM.enterPassword(password);
	}

	@When("^User clicks on singin button$")
	public void user_clicks_on_singin_button() {
		loginpageHM.clickSingInButton();
	}
	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page()  {
		Assert.assertEquals("Page not found","Dashboard- iBilling",loginpageHM.getPageTitle());
		takeScreenShot(driver);
	}

	@Then("^User clicks on bankCash$")
	public void user_clicks_on()  {
		accountBankCash.clickBankCash();
	}   
	@Then("^User clicks on newAccount$")
	public void user_clicks_on_newAccount() {
		accountBankCash.clickNewAccount();
	}

	@Then("^User enters accountTitle\"([^\"]*)\"in accounts page$")
	public void user_enters_accountTitle_in_accounts_page(String accountTitle)  {
		takeScreenShot(driver);
		accountBankCash.enterAccountTitle(accountTitle +generateRandomNum(999));
	}
	@Then("^User enters description \"([^\"]*)\"in a account page$")
	public void user_enters_description_in_a_account_page(String description) {
		accountBankCash.enterDescription(description);
	}
	@Then("^User enters initialBalance \"([^\"]*)\"in a account page$")
	public void user_enters_initialBalance_in_a_account_page(String initialBalance){
		accountBankCash.enterInitialBalance(initialBalance);
	}
	@Then("^User enters accountNumber \"([^\"]*)\"in a account page$")
	public void user_enters_accountNumber_in_a_account_page(String accountNumber) {
		accountBankCash.enterAccountNumber(accountNumber + generateRandomNum(999));
	} 

	@Then("^User enters contactPerson \"([^\"]*)\"in a account page$")
	public void user_enters_contactPerson_in_a_account_page(String contactPerson) {
		accountBankCash.enterContactPerson(contactPerson);
	}
	
	@Then("^User enters phone \"([^\"]*)\"in a account page$")
	public void user_enters_phone_in_a_account_page(String phone) {
		accountBankCash.enterPhone(phone);
	}
	@Then("^User enters inernatBankURL \"([^\"]*)\"in a account page$")
	public void user_enters_inernatBankURL_in_a_account_page(String inernatBankURL) {
		accountBankCash.enterBankingURL(inernatBankURL );
	}
	@Then("^User clicks on submitButton$")
	public void user_clicks_on_submitButton() {
		accountBankCash.clickSubmit();
		takeScreenShot(driver);
	}
    @Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
		Assert.assertTrue("page not found", accountBankCash.isDisplay());
	}
    
    @After 
	public void tearDown(){
		driver.close();
		driver.quit();
	}
	

}
