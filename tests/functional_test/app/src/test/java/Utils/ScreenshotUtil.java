package Utils;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class ScreenshotUtil{

	WebDriver driver;

	/**
	 * parameterized constructor to initialize instance variables
	 *
	 * @param driver browser driver of type WebDriver interface
	 */
	public ScreenshotUtil(WebDriver driver){
		this.driver = driver;
	}

	/**
	 *
	 *
	 * @param driver browser driver of type WebDriver interface
	 */
	public static void grabScreen(WebDriver driver){

		// Building file path and name
		String ts = new SimpleDateFormat("yyyyMMddHHmmss")
			.format(new Date());

		// Setting file path from system property
		String projectPath = System.getProperty("user.dir");
		String filepath = projectPath + "/src/test/Screenshots/"+ts+".png";

		try {
			File fileDir = new File(filepath);
			FileUtils.copyFile(((TakesScreenshot) driver)
				.getScreenshotAs(OutputType.FILE), fileDir);
		} catch (IOException ioe) {
			throw new RuntimeException(ioe);
		}
	}
}
