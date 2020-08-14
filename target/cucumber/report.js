$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/dbs.feature");
formatter.feature({
  "line": 1,
  "name": "DBS awards and accolades",
  "description": "",
  "id": "dbs-awards-and-accolades",
  "keyword": "Feature"
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
  "duration": 22794496000,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_Learn_more_button()"
});
formatter.result({
  "duration": 22634491400,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_navigates_to_Singapore_on_left_pane()"
});
formatter.result({
  "duration": 5247804901,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_read_and_write_the_table_to_excel()"
});
formatter.result({
  "duration": 12823278900,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_navigates_to_About_header_tabs()"
});
formatter.result({
  "duration": 15063229100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_navigates_to_Who_we_are_tab()"
});
formatter.result({
  "duration": 2074626999,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_navigates_to_Our_Awards_Accolades()"
});
formatter.result({
  "duration": 14437456600,
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
  "duration": 2647919199,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_verify_all_the_awards_names()"
});
formatter.result({
  "duration": 4243034600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_verify_all_the_caption_of_the_awards()"
});
formatter.result({
  "duration": 3680879400,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.print_report_in_table()"
});
formatter.result({
  "duration": 92400,
  "status": "passed"
});
});