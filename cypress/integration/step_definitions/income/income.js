import { login } from "../../comman/login"
import { income } from "../../pageObjects/income/income"

const lp = new login()
const ic = new income()
const idata = require("../../../fixtures/income.json")

Given(/^I login into system as superadmin$/, function () {
    lp.login()
    cy.viewport(1200, 1200)
    ic.incomepage()
});

When(/^I click on add income in income tab and fill the data$/, function () {
    ic.addincome()
});

Then(/^New income is get added to school$/, function () {
    cy.get('.box > .box-body').contains(idata.name).should('be.visible')
    cy.screenshot()
});


When(/^I click on search income in income tab$/, function () {
    ic.searchincome()
});

Then(/^Income should get displayed in result$/, function () {
    cy.get('#exp > .box-body').contains(idata.name).should('be.visible')
    cy.screenshot()
});


When(/^I click on income head in income tab and fill the data$/, function () {
    ic.incomehead()
});

Then(/^Income head should get displayed in result$/, function () {
    cy.get('#exphead > .box-body').contains(idata.head1).should('be.visible')
    cy.screenshot()
});


When(/^I find the income and delete it$/, function () {
    ic.deleteincome()
});

Then(/^Income should get deleted from result$/, function () {
    cy.get('.box > .box-body').contains(idata.name).should('not.exist')
    cy.screenshot()
});