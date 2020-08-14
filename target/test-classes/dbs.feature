Feature: DBS awards and accolades

Scenario: Validate awards
	Given user navigates to url "https://www.dbs.com.sg/index/default.page"
	When user clicks on Learn more button
	And user navigates to Singapore on left pane
	And user read and write the table to excel
	And user navigates to About header tabs
	And user navigates to Who we are tab
	And user navigates to Our Awards and Accolades
	Then user verify that total no of awards are 22
	Then user verify all the awards names
	Then user verify all the caption of the awards
	Then print report in table
