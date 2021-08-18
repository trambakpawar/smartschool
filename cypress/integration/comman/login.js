/// <reference types="Cypress" />
const superadmin = "div.col-md-4.col-lg-3.col-sm-6.wow.fadeInRight.col-md-offset-1.animated > div > ul > li:nth-child(1) > a"
const username = "#email"
const password = "#password"
const signin = "body > div > div > div > div > div > div.col-lg-4.col-md-4.col-sm-12.nopadding > div > div.form-bottom > form > button"
const ldata = require("../../fixtures/login.json")
export class login {

    login() {
        cy.visit(ldata.baseurl)
        cy.viewport(800, 600)
        cy.get(superadmin).invoke('removeAttr', 'target').click()
        cy.wait(1000)
        cy.get(username).type(ldata.username)
        cy.get(password).type(ldata.password)
        cy.get(signin).click()

    }

}

