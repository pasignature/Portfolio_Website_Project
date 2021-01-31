package Tests;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import Configs.TestBase;
import PageObjects.HomeSection;

import static org.testng.Assert.assertEquals;

public class TestAboutMeSection {

	private WebDriver driver;
	private String testURL;
	private String introText;

	@BeforeTest
	public void setUp(){
		driver = TestBase.getBrowserDriver();
		testURL = TestBase.TestURL();
	}

	@Test
	public void VeryHomeSectionIsLoadingFine(){

		// Login credentials
		//String UserName = TestData().getData(0,2,0);
		//String Password = TestData().getData(0,2,1);

		driver.get(testURL);

		// Logging in to facebook
		//HomeSection fbl = new HomeSection(driver);
		//fbl.loginToFacebook(UserName, Password);

		// Creating facebook status post
		//FacebookStatusPostPage fbp = new FacebookStatusPostPage(driver);
		//String statusMessage = fbp.postStatusMessage(fbPostString);

		// Verifying Home Section is loading fine
		assertEquals(TestBase.HomeSectionAssertString(), introText);
	}

	@AfterTest
	public void tearDown(){
		driver.close();
	}

}
