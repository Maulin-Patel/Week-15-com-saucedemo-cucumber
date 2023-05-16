$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginpage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page Test",
  "description": "",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5637106200,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "I am on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 4,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-page-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I enter email id in email field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see text Products",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iEnterEmailIdInEmailField()"
});
formatter.result({
  "duration": 828115600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 211607201,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 217278500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldSeeTextProducts()"
});
formatter.result({
  "duration": 148334399,
  "status": "passed"
});
formatter.after({
  "duration": 816604600,
  "status": "passed"
});
formatter.before({
  "duration": 3361218200,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "I am on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 11,
  "name": "User should see six products are displayed on homepage",
  "description": "",
  "id": "login-page-test;user-should-see-six-products-are-displayed-on-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter email id in email field",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see six products are displayed on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iEnterEmailIdInEmailField()"
});
formatter.result({
  "duration": 196709400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 196498700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 212065400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldSeeSixProductsAreDisplayedOnHomePage()"
});
formatter.result({
  "duration": 109083900,
  "status": "passed"
});
formatter.after({
  "duration": 823431100,
  "status": "passed"
});
});