package Configs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import Utils.ExcelSheetUtil;

public class TestBase {

	/**
	 * Creates a public WebDriver interface and defines a reference variable(driver)
	 * whose type is interface, then assigns an object or instance of a target browser
	 * class that implement the interface
	 *
	 * @return browser driver
	 */
	public static WebDriver getBrowserDriver(){

		WebDriver driver;

		//disable notifications & maximize browser
		ChromeOptions chromeOptions = new ChromeOptions();
		chromeOptions.addArguments("--disable-notifications");
		chromeOptions.addArguments("--start-maximized");
		System.setProperty("webdriver.chrome.driver", "selenium_java_win32chromedriver.exe");
		driver = new ChromeDriver(chromeOptions);
		return driver;
	}

	/**
	 * Creates an instance of ExcelSheetUtil class,
	 * passing the excel file path to its constructor
	 *
	 * @return ExcelSheetUtil Object
	 */
	public static ExcelSheetUtil TestData(){

		final String projectPath = System.getProperty("user.dir");

		return new ExcelSheetUtil("TestData/data.xlsx");
	}

	public static String TestURL(){
		return "https://andrew-godwin.com/";
	}

	public static String HomeSectionAssertString(){

		return "Hi, my name is Andrew Godwin.";
	}

}
