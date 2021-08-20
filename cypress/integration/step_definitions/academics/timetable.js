import { login } from "../../comman/login"
import { timetable } from "../../pageObjects/academics/timetable"

const lp = new login()
const tt = new timetable()
const edata = require("../../../fixtures/academics.json")

Given(/^I login into system$/, function () {
    lp.login()
    cy.viewport(1200, 1200)
    tt.academcistab()
});

When(/^I click on Academics and add classroom timetable$/, function () {
    tt.addtimetable()
});

Then(/^Timetable is get added to school$/, function () {
    cy.get('#route > div.box-body').contains(edata.title).should("be.visible")
    cy.screenshot()
});
