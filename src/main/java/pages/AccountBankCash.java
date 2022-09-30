package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AccountBankCash {
	WebDriver driver;
	public AccountBankCash (WebDriver driver) {
	this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Bank & Cash')]")
	WebElement BankCash;
	@FindBy(how = How.XPATH, using = "//a[contains(text(),'New Account')]")
	WebElement NewAccount;
	@FindBy(how = How.XPATH, using = "//input[@id='account']")
	WebElement AccountTitle;
	@FindBy(how = How.XPATH, using = "//input[@id='description']")
	WebElement Description;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement InitialBalance;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	WebElement AccountNumber;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement ContactPerson;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
	WebElement Phone;
	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']")
	WebElement BankingURL;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement Submit;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]")
	WebElement accountCreateSuccessfully;

	public void clickBankCash() {
		BankCash.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void clickNewAccount() {
		NewAccount.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void enterAccountTitle(String accountTitle) {
		AccountTitle.sendKeys(accountTitle  );
	      try {
	    	  Thread.sleep(3000);
	      }catch(InterruptedException e) {
	    	  e.printStackTrace();
	      }
		}
	
	public void enterDescription(String description) {
		Description.sendKeys(description  );
	      try {
	    	  Thread.sleep(3000);
	      }catch(InterruptedException e) {
	    	  e.printStackTrace();
	      }
		}
	
	public void enterInitialBalance(String initialBalance) {
		InitialBalance.sendKeys(initialBalance  );
	      try {
	    	  Thread.sleep(3000);
	      }catch(InterruptedException e) {
	    	  e.printStackTrace();
	      }
		}
	
	public void enterAccountNumber(String accountNumber) {
		AccountNumber.sendKeys(accountNumber);
	      try {
	    	  Thread.sleep(3000);
	      }catch(InterruptedException e) {
	    	  e.printStackTrace();
	      }
		}
	
	
	public void enterContactPerson(String contactPerson) {
		ContactPerson.sendKeys(contactPerson  );
	      try {
	    	  Thread.sleep(3000);
	      }catch(InterruptedException e) {
	    	  e.printStackTrace();
	      }
		}
	
	
	public void enterPhone(String phone) {
		Phone.sendKeys(phone  );
	      try {
	    	  Thread.sleep(3000);
	      }catch(InterruptedException e) {
	    	  e.printStackTrace();
	      }
		}
	
	public void enterBankingURL(String bankingURL) {
		BankingURL.sendKeys(bankingURL  );
	      try {
	    	  Thread.sleep(3000);
	      }catch(InterruptedException e) {
	    	  e.printStackTrace();
	      }
		}
	public void clickSubmit() {
		Submit.click();
		try {
			Thread.sleep(3000);
		}catch(InterruptedException e) {
			  e.printStackTrace();
		}
	}
	
	public boolean isDisplay() {
		accountCreateSuccessfully.isDisplayed();
		return true;
	}
	
	
}
