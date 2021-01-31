package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage {

	WebDriver driver;
	WebDriverWait wait;

	By userNameTextBox = By.id("email");
	By passwordTextBox = By.id("pass");
	By loginButton = By.name("login");
	By statusTextBox = By.xpath("//span[contains(text(),\"What's on your mind\")]");

	/**
	 * parameterized constructor to initialize instance variables
	 *
	 * @param driver browser driver of type WebDriver interface
	 */
	public HomePage(WebDriver driver){
		this.driver = driver;
		this.wait = new WebDriverWait(driver, 20);
	}

	public void setUserName(String strUserName){
		driver.findElement(userNameTextBox).sendKeys(strUserName);
	}

	public void setPassword(String strPassword){
		driver.findElement(passwordTextBox).sendKeys(strPassword);
	}

	/**
	 * Clicks on login button
	 */
	public void clickLoginButton(){
		driver.findElement(loginButton).click();
	}

	/**
	 * Gets the placeholder text of status message text box
	 */
	public void getPlaceholderTitle(){
		wait.until(webDriver -> ExpectedConditions
			.visibilityOfElementLocated(statusTextBox).apply(webDriver));

		driver.findElement(statusTextBox).getText();
	}

	/**
	 * invokes member methods to login to facebook
	 *
	 * @param strUserName facebook account username
	 * @param strPassword account password
	 */
	public void loginToFacebook(String strUserName, String strPassword){

		this.setUserName(strUserName);

		this.setPassword(strPassword);

		this.clickLoginButton();

		this.getPlaceholderTitle();
	}

}
