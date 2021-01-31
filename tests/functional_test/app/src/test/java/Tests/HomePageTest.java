package Tests;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import Configs.TestBase;
import PageObjects.HomePage;

import static Configs.TestBase.TestData;
import static org.testng.Assert.assertEquals;

public class HomePageTest {

	private WebDriver driver;
	private String testURL;
	private String fbPostString;

	@BeforeTest
	public void setUp(){
		driver = TestBase.getBrowserDriver();
		testURL = TestBase.FacebookTestURL();
		fbPostString = TestBase.FacebookPostString();
	}

	@Test
	public void VerifyUserCanPostStatusMessageOnFacebook(){

		// Login credentials
		String UserName = TestData().getData(0,2,0);
		String Password = TestData().getData(0,2,1);

		driver.get(testURL);

		// Logging in to facebook
		HomePage fbl = new HomePage(driver);
		fbl.loginToFacebook(UserName, Password);

		// Creating facebook status post
		FacebookStatusPostPage fbp = new FacebookStatusPostPage(driver);
		String statusMessage = fbp.postStatusMessage(fbPostString);

		// Verifying Post
		assertEquals(statusMessage, fbPostString);
	}

	@AfterTest
	public void tearDown(){
		driver.close();
	}

}
