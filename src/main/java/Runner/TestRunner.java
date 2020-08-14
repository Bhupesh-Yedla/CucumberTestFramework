package Runner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber-reports"},
		features = {"src/test/resources/dbs.feature"},
		glue={"TestCucumber"},
		monochrome = true		
	 )
public class TestRunner {
}
