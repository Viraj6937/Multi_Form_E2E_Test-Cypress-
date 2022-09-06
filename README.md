# Multi_Form_E2E_Test-Cypress-
<b>E2E Test Case</b>

1. For Profile Tab
   - verify the user is redirected to site url
   - verify meta tag of charset attribute is set to utf-8
   - verify profile tab is selected
   - verify profile form is filled with valid credentials and click on next profile submit
   
2. For Interest Tab
   - verify user is redirected to site url
   - verify interest tab is selected
   - verify user selects I like XBOX radio option and click on next profile submit
   
3. For Payment tab
   - verify user is redirected to site url
   - verify profile tab is selected
   - verify payment feedback and click on submit
   
<b>To Run Test Case </b>
   - Clone the project into  workspace from Github
   - open project into any editor
   - open terminal of editor
   - first run "npm i" (it will install all required dependencies)
   - then run npm test (it will start running test in headless mode)
   - (to run the test from runner) - npx cypress open
