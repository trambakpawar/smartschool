/// <reference types="Cypress" />
const examtab = '#sibe-box > ul.sidebar-menu.verttop > li:nth-child(8) > a'
const exammenu = ".active > .treeview-menu > :nth-child(1) > a"
const addbutton = "#route > div.box-header.ptbnull > button"
const examtitle = "#exam"
const examstart = "#exam_from"
const examend = "#exam_to"
const duration = "#duration"
const attempt = "#attempt"
const passing = "#passing_percentage"
const publishexam = "#formsubject > div.modal-body > div > div:nth-child(5) > div > label:nth-child(1) > input"
const publishresult = "#formsubject > div.modal-body > div > div:nth-child(5) > div > label:nth-child(2) > input"
const question = "body > p"
const savebutton = "#load"

const edata = require("../../../fixtures/onlineexam.json")
export class exam {
    examtab() {
        cy.get(examtab).click()

    }

    addexam() {
        cy.get(exammenu).click()
        cy.viewport(1200, 800)
        cy.get(addbutton).click()
        cy.wait(1000)
        cy.get(examtitle).type(edata.title)
        cy.get(examstart).clear()
        cy.get(examstart).type(edata.examstart)
        cy.get(examend).clear()
        cy.get(examend).type(edata.examend)
        cy.get(duration).clear()
        cy.get(duration).type('01:00:00')
        cy.get(attempt).click()
        cy.get(attempt).type(edata.attempt)
        cy.get(passing).type(edata.passing)
        cy.get(publishexam).check()
        cy.get(publishresult).check()

        cy.get('.cke_wysiwyg_frame').then(($iframe) => {
            const iframecontent = $iframe.contents().find('body')
            cy.wrap(iframecontent)
                .click()
                .type(edata.question)
        })


        /*   const iframe = cy.get('.cke_wysiwyg_frame').its('.cke_editable cke_editable_themed cke_contents_ltr cke_show_borders').should("be.visible").then(cy.wrap)
          iframe.click({ force: true }).type(edata.question)
   */
        cy.get(savebutton).click()
    }
}