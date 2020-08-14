package TestCucumber;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Assert;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef {

	WebDriver driver;
	WebElement element;
	JavascriptExecutor js;
	String[] al = { "World's Best Bank 2019", "Bank of the Year 2018", "Best Bank in the World 2018",
			"Awards For Excellence", "World's Best Banks", "World's Best Investment Banks and Derivatives Providers",
			"World's Best Treasury and Cash Management Banks and Providers",
			"Trade Finance and Supply Chain Finance Awards", "Best Sub-Custodian Banks",
			"World's Best Private Bank Awards", "Treasury, Trade, Sustainable Supply Chain and Risk Management Awards",
			"Private Banking Awards", "Digital Awards", "Digital Awards", "Foreign Exchange Awards",
			"Trade Finance and Supply Chain Finance Awards", "World's Best Private Bank Awards", "The Innovators",
			"World's Best Private Bank Awards", "Gender Equality Index", "Awards for Excellence",
			"World's Best Investment Banks and Derivatives Providers" };
	String[] as = { "Euromoney", "The Banker", "Global Finance", "Euromoney", "Global Finance", "Global Finance",
			"Global Finance", "Global Finance", "Global Finance", "Global Finance", "The Asset", "Asiamoney",
			"Hackett Group", "Hackett Group", "Global Finance", "Global Finance", "Global Finance", "Global Finance",
			"Global Finance", "Bloomberg", "Euromoney", "Global Finance" };

	private Scenario scenario;

	@Before
	public void before(Scenario scenario) {
		this.scenario = scenario;
	}

	@Given("^user navigates to url \"([^\"]*)\"$")
	public void user_navigates_to_url(String arg1) throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"C:/Users/Bhupesh/eclipse-workspace/myapp/src/test/resources/chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("start-maximized");
		driver = new ChromeDriver(options);
		driver.get(arg1);
	}

	@When("^user clicks on Learn more button$")
	public void user_clicks_on_Learn_more_button() throws Throwable {
		element = driver.findElement(By.xpath("//*[@id=\"dbsgroup\"]/div[3]/p[3]/a/button"));
		element.click();
	}

	@And("^user navigates to Singapore on left pane$")
	public void user_navigates_to_Singapore_on_left_pane() throws Throwable {
		element = driver.findElement(By.xpath("//*[@id=\"sideNav\"]/ul/li[3]/a"));
		scrolltoElement(element);
		element.click();
	}

	@And("^user read and write the table to excel$")
	public void user_read_and_write_the_table_to_excel() throws Throwable {
		String[][] sa = null;
		String s;
		List<WebElement> rowele = driver.findElements(
				By.xpath("//*[@id=\"bodywrapper\"]/div[2]/section/div[1]/div[2]/div/div[5]/table/tbody/tr"));
		List<WebElement> colele = driver.findElements(
				By.xpath("//*[@id=\"bodywrapper\"]/div[2]/section/div[1]/div[2]/div/div[5]/table/tbody/tr/td"));
		sa = new String[rowele.size()][colele.size() / rowele.size()];
		for (int i = 1; i <= rowele.size(); i++) {
			for (int j = 1; j <= colele.size() / rowele.size(); j++) {
				List<WebElement> size = driver.findElements(
						By.xpath("//*[@id=\"bodywrapper\"]/div[2]/section/div[1]/div[2]/div/div[5]/table/tbody/tr[" + i
								+ "]/td[" + j + "]/p"));
				if (size.size() > 0) {
					s = driver.findElement(
							By.xpath("//*[@id=\"bodywrapper\"]/div[2]/section/div[1]/div[2]/div/div[5]/table/tbody/tr["
									+ i + "]/td[" + j + "]/p"))
							.getText();
					sa[i - 1][j - 1] = s;
				}
			}
		}
		for (String[] sb : sa) {
			for (String k : sb) {
				if(k!=null)
					System.out.println(k);
			}
		}
		writeToExcel(sa);
	}

	@And("^user navigates to About header tabs$")
	public void user_navigates_to_About_header_tabs() throws Throwable {
		element = driver.findElement(By.xpath("//*[@id=\"flpHeader\"]/header/div/div[2]/ul/li[1]/a"));
		element.click();
	}

	@And("^user navigates to Who we are tab$")
	public void user_navigates_to_Who_we_are_tab() throws Throwable {
		element = driver.findElement(By.xpath("//*[@id=\"bodywrapper\"]/div[1]/div[1]/div/ul/li[2]/a"));
		element.click();
	}

	@And("^user navigates to Our Awards and Accolades$")
	public void user_navigates_to_Our_Awards_Accolades() throws Throwable {
		js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,1000)");
		Thread.sleep(5000);
		element = driver.findElement(By.xpath("//*[@id=\"bodywrapper\"]/div[2]/section/div[1]/div[4]/div/div[2]/h3/a"));
		element.click();
	}

	@Then("^user verify that total no of awards are (\\d+)$")
	public void user_verify_that_total_no_of_awards_are(int arg1) throws Throwable {
		List<WebElement> elements = driver.findElements(By.xpath("//div/img"));
		Assert.assertEquals(elements.size(), arg1, "Total no of awards matched.");
	}

	@Then("^user verify all the awards names$")
	public void user_verify_all_the_awards_names() throws Throwable {
		List<WebElement> elements = driver.findElements(By.xpath("//h3/strong"));
		js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,1000)");
		for (int i = 1; i <= elements.size(); i++) {
			Assert.assertEquals(driver.findElement(By.xpath("(//h3/strong)[" + i + "]")).getText(), as[i - 1],
					"verified award " + as[i - 1] + " succesfully");
		}
	}

	@Then("^user verify all the caption of the awards$")
	public void user_verify_all_the_caption_of_the_awards() throws Throwable {
		List<WebElement> elements = driver.findElements(By.xpath("//h3//strong/..//following-sibling::p"));
		js = (JavascriptExecutor) driver;
		for (int i = 1; i <= elements.size(); i++) {
			Assert.assertEquals(
					driver.findElement(By.xpath("(//h3//strong/..//following-sibling::p)[" + i + "]")).getText(),
					al[i - 1], "verified award " + al[i - 1] + " succesfully");
		}
	}

	@Then("^print report in table$")
	public void print_report_in_table() throws Throwable {
		for(int i=0;i<as.length;i++) {
			scenario.write(as[i]+"\t");
			scenario.write(al[i]+"\n");
			}
	}

	public void writeToExcel(String[][] dataToWrite) throws IOException {
		File file = new File("src//test//resources//writedata.xls");
		if (!file.exists()) {
			file.createNewFile();
		}
		FileInputStream is = new FileInputStream(file);
		Workbook wb = null;
		wb = new HSSFWorkbook(is);
		Sheet sht = wb.getSheetAt(0);
		int i = 0;
		for (String[] a : dataToWrite) {
			Row row = sht.createRow(i);
			int j = 0;
			for (String b : a) {
				Cell cell = row.createCell(j);
				cell.setCellValue(b);
				j++;
			}
			i++;
		}
		is.close();
		FileOutputStream os = new FileOutputStream(file);
		wb.write(os);
		wb.close();
		os.close();
	}

	public void scrolltoElement(WebElement element) {
		js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView(true);", element);
	}

	@After
	public void embedScreenshot(Scenario scenario) {
		if (scenario.isFailed()) {
			try {
				scenario.write("Current Page URL is " + driver.getCurrentUrl());
				byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png");
			} catch (WebDriverException somePlatformsDontSupportScreenshots) {
				System.err.println(somePlatformsDontSupportScreenshots.getMessage());
			}
		}
		driver.quit();
	}
}
