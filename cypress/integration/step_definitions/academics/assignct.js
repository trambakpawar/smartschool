import { login } from "../../comman/login"
import { classteacher } from "../../pageObjects/academics/assignct"

const lp = new login()
const ct = new classteacher()
const adata = require("../../../fixtures/academics.json")

Given(/^I login into system$/, function () {
    lp.login()
    cy.viewport(1200, 1200)
    ct.academcistab()
});

When(/^I click on Academics and assign class teacher$/, function () {
    ct.assignclass()
});




Then(/^Teacher get added to class$/, function () {
    cy.get('.box > .box-body').contains(adata.teacher).should("be.visible")
    cy.screenshot()
});





