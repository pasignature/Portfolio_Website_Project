package Utils;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class ExcelSheetUtil {

	XSSFWorkbook wb;
	XSSFSheet sheet;
	File excelFile;
	String data;

	/**
	 * parameterized constructor to initialize instance variables
	 *
	 * @param excelPath path to excel file containing test data
	 */
	public ExcelSheetUtil(String excelPath){

		this.excelFile = new File(excelPath);
		try{
			FileInputStream fis = new FileInputStream(excelFile);
			this.wb = new XSSFWorkbook(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * Extracts test data from the excel file passed to class constructor
	 *
	 * @param sheetNum  excel workbook sheet number
	 * @param rowNum    excel workbook row number
	 * @param columnNum excel workbook column number
	 * @return          String value of the target cell
	 */
	public String getData(int sheetNum, int rowNum, int columnNum){

		sheet = wb.getSheetAt(sheetNum);
		data = sheet.getRow(rowNum).getCell(columnNum).getStringCellValue();
		return data;
	}

}