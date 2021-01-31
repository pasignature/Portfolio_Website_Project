package Tests;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import Configs.TestBase;
import PageObjects.HomeSection;

import static org.testng.Assert.assertEquals;

public class TestHomeSection {

	private WebDriver driver;
	private String testURL;

	@BeforeTest
	public void setUp(){
		driver = TestBase.getBrowserDriver();
		testURL = TestBase.TestURL();
	}

	@Test
	public void VeryHomeSectionIsLoadingFine(){

		driver.get(testURL);

		HomeSection intro = new HomeSection(driver);
		String introText = intro.getIntroText();

		// Verifying Home Section is loading fine
		assertEquals(TestBase.HomeSectionAssertString(), introText);
	}

	@AfterTest
	public void tearDown(){
		driver.quit();
	}

}
