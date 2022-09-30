$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechfiosBC.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Accout Funchtionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-accout-funchtionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should be able to login with valid creadentials and open a new accout",
  "description": "",
  "id": "techfios-bank-and-cash-new-accout-funchtionality;user-should-be-able-to-login-with-valid-creadentials-and-open-a-new-accout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on singin button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters accountTitle\"\u003caccountTitle\u003e\"in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters description \"\u003cdescription\u003e\"in a account page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters initialBalance \"\u003cinitialBalance\u003e\"in a account page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters accountNumber \"\u003caccountNumber\u003e\"in a account page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters contactPerson \"\u003ccontactPerson\u003e\"in a account page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters phone \"\u003cphone\u003e\"in a account page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters inernatBankURL \"\u003cinernatBankURL\u003e\"in a account page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on submitButton",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-accout-funchtionality;user-should-be-able-to-login-with-valid-creadentials-and-open-a-new-accout;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phone",
        "inernatBankURL"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-accout-funchtionality;user-should-be-able-to-login-with-valid-creadentials-and-open-a-new-accout;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Farhana420",
        "New Account",
        "$ 100.00",
        "sa123456",
        "ME",
        "54312345",
        "https:tectfios.com"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-accout-funchtionality;user-should-be-able-to-login-with-valid-creadentials-and-open-a-new-accout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2247703200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to login with valid creadentials and open a new accout",
  "description": "",
  "id": "techfios-bank-and-cash-new-accout-funchtionality;user-should-be-able-to-login-with-valid-creadentials-and-open-a-new-accout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on singin button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters accountTitle\"Farhana420\"in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters description \"New Account\"in a account page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters initialBalance \"$ 100.00\"in a account page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters accountNumber \"sa123456\"in a account page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters contactPerson \"ME\"in a account page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters phone \"54312345\"in a account page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters inernatBankURL \"https:tectfios.com\"in a account page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on submitButton",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionHM.user_is_on_techfios_the_login_page()"
});
formatter.result({
  "duration": 1437905100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 22
    }
  ],
  "location": "StepDefinitionHM.user_enters_username(String)"
});
formatter.result({
  "duration": 3082998900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 22
    }
  ],
  "location": "StepDefinitionHM.user_enters_password(String)"
});
formatter.result({
  "duration": 3085630700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionHM.user_clicks_on_singin_button()"
});
formatter.result({
  "duration": 4342828700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionHM.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 450008000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionHM.user_clicks_on()"
});
formatter.result({
  "duration": 3103020300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionHM.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 3512333200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Farhana420",
      "offset": 25
    }
  ],
  "location": "StepDefinitionHM.user_enters_accountTitle_in_accounts_page(String)"
});
formatter.result({
  "duration": 3474270200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Account",
      "offset": 25
    }
  ],
  "location": "StepDefinitionHM.user_enters_description_in_a_account_page(String)"
});
formatter.result({
  "duration": 3111333400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$ 100.00",
      "offset": 28
    }
  ],
  "location": "StepDefinitionHM.user_enters_initialBalance_in_a_account_page(String)"
});
formatter.result({
  "duration": 3118564200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sa123456",
      "offset": 27
    }
  ],
  "location": "StepDefinitionHM.user_enters_accountNumber_in_a_account_page(String)"
});
formatter.result({
  "duration": 3109852000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ME",
      "offset": 27
    }
  ],
  "location": "StepDefinitionHM.user_enters_contactPerson_in_a_account_page(String)"
});
formatter.result({
  "duration": 3110784700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "54312345",
      "offset": 19
    }
  ],
  "location": "StepDefinitionHM.user_enters_phone_in_a_account_page(String)"
});
formatter.result({
  "duration": 3106555300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https:tectfios.com",
      "offset": 28
    }
  ],
  "location": "StepDefinitionHM.user_enters_inernatBankURL_in_a_account_page(String)"
});
formatter.result({
  "duration": 3102097900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionHM.user_clicks_on_submitButton()"
});
formatter.result({
  "duration": 4408913400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionHM.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 65749100,
  "status": "passed"
});
formatter.after({
  "duration": 682831700,
  "status": "passed"
});
});