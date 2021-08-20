import { login } from "../../comman/login"
import { exam } from "../../pageObjects/online/exam"

const lp = new login()
const ex = new exam()
const edata = require("../../../fixtures/onlineexam.json")

Given(/^I login into system$/, function () {
    lp.login()
    cy.viewport(1200, 1200)
    ex.examtab()
});

When(/^I click on add exam and fill the exam data$/, function () {
    ex.addexam()
});

Then(/^Exam is get added to school$/, function () {
    cy.get('#route > div.box-body').contains(edata.title).should("be.visible")
    cy.screenshot()
});
