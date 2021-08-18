/// <reference types="Cypress" />
const incometab = ".sidebar-menu > :nth-child(4)"
const addincome = "#sibe-box > ul.sidebar-menu.verttop > li.treeview.active > ul > li:nth-child(1) > a"
const head = "#inc_head_id"
const name = "#name"
const invoiceno = "#invoice_no"
const date = "#date"
const amount = "#amount"
const desc = "#description"
const file = "#documents"
const image = "goku.png"
const savebutton = "#form1 > div.box-footer > button"
const idata = require("../../../fixtures/income.json")

export class income {

    incomepage() {

        cy.get(incometab).click()

    }

    addincome() {
        cy.get(addincome).click()
        cy.wait(1000)
        cy.get(head).select(idata.haed)
        cy.get(name).type(idata.name)
        cy.get(invoiceno).type(idata.invoice)
        cy.get(date).type(idata.date)
        cy.get('#form1 > div.box-body > div:nth-child(6) > label').click()
        cy.get(amount).type(idata.amount)
        cy.get(file).attachFile(image)
        cy.get(desc).type(idata.desc)
        cy.get(savebutton).click()
    }
}