package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomeSection {

	WebDriver driver;
	WebDriverWait wait;

	By introText = By.xpath("//h1[@class='vc_custom_heading vc_custom_1542126455341']");

	/**
	 * parameterized constructor to initialize instance variables
	 *
	 * @param driver browser driver of type WebDriver interface
	 */
	public HomeSection(WebDriver driver){
		this.driver = driver;
		wait = new WebDriverWait(driver, 20);
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
	 *  @param strUserName facebook account username
	 * @param strPassword account password
	 * @return String
	 */
	/*public String loginToFacebook(String fullname, String email, String msg){

		this.setUserName(strUserName);

		this.setPassword(strPassword);

		this.clickLoginButton();
	}*/

}
