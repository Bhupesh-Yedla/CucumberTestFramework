$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/dbs.feature");
formatter.feature({
  "line": 1,
  "name": "DBS awards and accolades",
  "description": "",
  "id": "dbs-awards-and-accolades",
  "keyword": "Feature"
});
formatter.before({
  "duration": 284501,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Validate awards",
  "description": "",
  "id": "dbs-awards-and-accolades;validate-awards",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user navigates to url \"https://www.dbs.com.sg/index/default.page\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on Learn more button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user navigates to Singapore on left pane",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user read and write the table to excel",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user navigates to About header tabs",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user navigates to Who we are tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user navigates to Our Awards and Accolades",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user verify that total no of awards are 22",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user verify all the awards names",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user verify all the caption of the awards",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "print report in table",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.dbs.com.sg/index/default.page",
      "offset": 23
    }
  ],
  "location": "StepDef.user_navigates_to_url(String)"
});
formatter.result({
  "duration": 10006717999,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_Learn_more_button()"
});
formatter.result({
  "duration": 6015509400,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_navigates_to_Singapore_on_left_pane()"
});
formatter.result({
  "duration": 2258712201,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_read_and_write_the_table_to_excel()"
});
formatter.result({
  "duration": 2882701700,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_navigates_to_About_header_tabs()"
});
formatter.result({
  "duration": 3427818600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_navigates_to_Who_we_are_tab()"
});
formatter.result({
  "duration": 868657700,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_navigates_to_Our_Awards_Accolades()"
});
formatter.result({
  "duration": 7894717499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 40
    }
  ],
  "location": "StepDef.user_verify_that_total_no_of_awards_are(int)"
});
formatter.result({
  "duration": 954280800,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_verify_all_the_awards_names()"
});
formatter.result({
  "duration": 1390091600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_verify_all_the_caption_of_the_awards()"
});
formatter.result({
  "duration": 1037313199,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.print_report_in_table()"
});
formatter.write("Euromoney\t");
formatter.write("World\u0027s Best Bank 2019\n");
formatter.write("The Banker\t");
formatter.write("Bank of the Year 2018\n");
formatter.write("Global Finance\t");
formatter.write("Best Bank in the World 2018\n");
formatter.write("Euromoney\t");
formatter.write("Awards For Excellence\n");
formatter.write("Global Finance\t");
formatter.write("World\u0027s Best Banks\n");
formatter.write("Global Finance\t");
formatter.write("World\u0027s Best Investment Banks and Derivatives Providers\n");
formatter.write("Global Finance\t");
formatter.write("World\u0027s Best Treasury and Cash Management Banks and Providers\n");
formatter.write("Global Finance\t");
formatter.write("Trade Finance and Supply Chain Finance Awards\n");
formatter.write("Global Finance\t");
formatter.write("Best Sub-Custodian Banks\n");
formatter.write("Global Finance\t");
formatter.write("World\u0027s Best Private Bank Awards\n");
formatter.write("The Asset\t");
formatter.write("Treasury, Trade, Sustainable Supply Chain and Risk Management Awards\n");
formatter.write("Asiamoney\t");
formatter.write("Private Banking Awards\n");
formatter.write("Hackett Group\t");
formatter.write("Digital Awards\n");
formatter.write("Hackett Group\t");
formatter.write("Digital Awards\n");
formatter.write("Global Finance\t");
formatter.write("Foreign Exchange Awards\n");
formatter.write("Global Finance\t");
formatter.write("Trade Finance and Supply Chain Finance Awards\n");
formatter.write("Global Finance\t");
formatter.write("World\u0027s Best Private Bank Awards\n");
formatter.write("Global Finance\t");
formatter.write("The Innovators\n");
formatter.write("Global Finance\t");
formatter.write("World\u0027s Best Private Bank Awards\n");
formatter.write("Bloomberg\t");
formatter.write("Gender Equality Index\n");
formatter.write("Euromoney\t");
formatter.write("Awards for Excellence\n");
formatter.write("Global Finance\t");
formatter.write("World\u0027s Best Investment Banks and Derivatives Providers\n");
formatter.result({
  "duration": 14576499,
  "status": "passed"
});
formatter.after({
  "duration": 1212740499,
  "status": "passed"
});
});