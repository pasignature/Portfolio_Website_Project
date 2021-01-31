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
	private String introText;

	@BeforeTest
	public void setUp(){
		driver = TestBase.getBrowserDriver();
		testURL = TestBase.TestURL();
		introText = HomeSection.getIntroText();
	}

	@Test
	public void VeryHomeSectionIsLoadingFine(){

		driver.get(testURL);

		// Verifying Home Section is loading fine
		assertEquals(TestBase.HomeSectionAssertString(), introText);
	}

	@AfterTest
	public void tearDown(){
		driver.close();
	}

}
