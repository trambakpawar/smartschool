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
const searchincome = "#sibe-box > ul.sidebar-menu.verttop > li.treeview.active > ul > li:nth-child(2) > a"
const searchtype = "#search_type"
const search = "#search_text"
const searchbutton = "#form1 > div > div:nth-child(1) > div > div.col-sm-12 > div > button"
const searchbutton1 = "#form1 > div > div:nth-child(2) > div > div:nth-child(3) > div > button"
const savebutton = "#form1 > div.box-footer > button"
const savebutton1 = ".box-footer > .btn"
const headtab = "#sibe-box > ul.sidebar-menu.verttop > li.treeview.active > ul > li:nth-child(3) > a"
const headname = "#incomehead"


const idata = require("../../../fixtures/income.json")

export class income {

    incomepage() {

        cy.get(incometab).click()

    }

    addincome() {
        cy.get(addincome).click()
        cy.wait(1000)
        cy.viewport(1200, 600)
        cy.get(head).select(idata.haed)
        cy.get(name).type(idata.name)
        cy.get(invoiceno).type(idata.invoice)
        cy.get(date).click()
        cy.get('.datepicker-days > .table > tbody > :nth-child(3) > :nth-child(4)').click()
        cy.get(amount).type(idata.amount)
        cy.get(file).attachFile(image)
        cy.get(desc).type(idata.desc)
        cy.get(savebutton).click()
    }

    searchincome() {
        cy.get(searchincome).click()
        if (cy.get(searchtype).select("Last Week")) {
            cy.get(searchbutton).click()
        }
        else (cy.get(search).type(idata.name))
        {
            cy.get(searchbutton1).click()
        }
    }



    
    incomehead() {
        cy.get(headtab).click()
        cy.get(headname).type(idata.head1)
        cy.get(desc).type(idata.desc)
        cy.get(savebutton1).click()
    }

    deleteincome() {
        cy.get(addincome).click()
        cy.viewport(1200, 600)
        cy.contains('td', idata.name).siblings().find('a').eq(2).click()
    }
}