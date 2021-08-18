# The Cypress with Cucumber Framework

## 1. Installation of  Node in Windows System
    1. Download the Node.js MSI Installer for your system
    https://nodejs.org/en/download/
    2. Create the Cypress Project directory
    3. Open CMD
    4. Type “npm install”
    5. Type  “npm install cypress –save-dev”
    6. Type “npx cypress open”


## 2. Folder Strcture
    1. Fixture
    2. Integration
    3. logs
    4. plugins
    5. reports
    6. screenshots
    7. support
    8. videos


## 3. For Intelligent Code Completion
    /// <reference types="Cypress" /> in few page of sripts

## 4. For Cucumber Plugin
  ```sh  npm install --save-dev cypress-cucumber-preprocessor```


## 5. For report generation
        https://www.youtube.com/watch?v=3Gl7YKX6P3I

        Add the code to package.json
          "cucumberJson": {
                  "generate": true,
              }

	npm run cy:report
## 6. File Upload:
       npm install --save-dev cypress-file-upload

	If you are using TypeScript, ensure your tsconfig.json contains commands' types:
      	"compilerOptions": {
        "types": ["cypress", "cypress-file-upload"]
      }
      To be able to use any custom command you need to add it to cypress/support/commands.js like this:
      import 'cypress-file-upload';
      Then, make sure this commands.js is imported in cypress/support/index.js (it might be commented):
      // Import commands.js using ES2015 syntax:
      import './commands';

## 7. Run All Test Features in headless browser
    npx cypress run

## 8. Run Test Features one by one
    npx cypress open

## 9. Comman Step definition
        Given('I open login page', function () {
            lp.visit1()
        });

        When('I submit {string} and {string}', function (username, password) {
            lp.setusername(username)
            cy.wait(1000)
            lp.setpassword(password)
        });

        When('Click on login button', function () {
            lp.loginbutton()
        });

        Then('Login Sucess Dashboard window should displayed.', function () {
            cy.get("#menu_dashboard_index > b").should('have.text', 'Dashboard')
        });

## 10. Comman Page Object
        login() {
            cy.visit(logindata.url).then(() => {
                cy.get(username).type(logindata.username)
                })
                .then(() => {
                    cy.get(password).type(logindata.password)
                    })
                    .then(() => {
                        cy.get(loginbutton).click()
                    })
                cy.log("Login Successful")
            }
        }

## 11. GitIgnore file
    This will ingore the unwanted files which are listed inide the .gitignore file while uploading the project files to git repository.
    node_modules
    cypress/report
    cypress/screenshots
    cypress/videos
    cypress/cucumber-json
    cypress/downloads

## 12. For Dynamic Web Elemnets
        cy.get('.dropdown').children().first().click().then(() => {
            cy.get("li").contains("Edit").click({ force: true })
        })

## 13. For retry the failed test cases
     "retries": {
     "runMode": 2,
  }

# Folder Structure:-

## 1. Fixtures:

     Add user related fixtures to cypress/fixtures/data.json folder

## 2. Page Objects:
     All page objects files should be added under cypress/pageobjects/ pagename folder

## 3. Integration:
      All the files are stored in cypress/Integration folder.

## 4. Step definitions:
      All feature files with scenarios should be added under cypress/steps/ folder

## 5. Cucumber Feature Files:
         All feature files with scenarios should be added under cypress/integration/feature_name .feature folder

## 6. Package.json:
       After adding your command to Makefile you should add the relevant script in package.json on root folder

## 7. ScreensShots:
        All the screenshots are stored into cypress/screenshots folder

## 8. Reports:
        All the reports are stored into the cypress/report folder




# Links for support
    1. JavaScript [here] (https://www.w3schools.com/js/default.asp)
    2. Cypress [here] (https://www.cypress.io/)
    3. Cucumber [here] (https://cucumber.io/docs/cucumber/)
