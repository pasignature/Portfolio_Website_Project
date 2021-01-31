package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class AboutMeSection {

	WebDriver driver;
	WebDriverWait wait;

	static By introText = By.xpath("//h1[@class='vc_custom_heading vc_custom_1542126455341']");
	By userNameTextBox = By.id("email");
	By passwordTextBox = By.id("pass");

	/**
	 * parameterized constructor to initialize instance variables
	 *
	 * @param driver browser driver of type WebDriver interface
	 */
	public AboutMeSection(WebDriver driver){
		this.driver = driver;
		wait = new WebDriverWait(driver, 20);
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
		//driver.findElement(loginButton).click();
	}

	/**
	 * Gets intro text
	 * @return String
	 */
	public String getIntroText(){
		wait.until(webDriver -> ExpectedConditions
			.visibilityOfElementLocated(introText).apply(webDriver));

		return driver.findElement(introText).getText();
	}

	/**
	 * invokes member methods
	 */
	public void loginToFacebook(String fullname, String email, String msg){

		//this.setUserName(strUserName);

		//this.setPassword(strPassword);

		this.clickLoginButton();
	}

}
