import { login } from "../../comman/login"
import { income } from "../../pageObjects/income/income"

const lp = new login()
const ic = new income()

Given(/^I login into system as superadmin$/, function () {
    lp.login()
    cy.viewport(1200, 1200)
    ic.incomepage()

});

When(/^I click on add income in income tab and fill the data$/, function () {
    ic.addincome()
});

Then(/^New income is get added to school$/, function () {
    cy.screenshot()
});
