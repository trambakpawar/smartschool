import { login } from "../../comman/login"
import { student } from "../../pageObjects/academics/promote"

const lp = new login()
const st = new student()
const adata = require("../../../fixtures/academics.json")

Given(/^I login into system$/, function () {
    lp.login()
    cy.viewport(1200, 1200)
    st.academcistab()
});

When(/^I click on promote students and fill the data$/, function () {
    st.promotestudent()
});

Then(/^Students get promoted to next class$/, function () {
    cy.get('.box > .box-body').contains(adata.teacher).should("be.visible")
    cy.screenshot()
});

