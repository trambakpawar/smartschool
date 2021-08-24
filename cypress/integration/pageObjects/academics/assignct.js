const academcistab = "#sibe-box > ul.sidebar-menu.verttop > li:nth-child(10) > a"
const assignclass = "#sibe-box > ul.sidebar-menu.verttop > li.treeview.active > ul > li:nth-child(3) > a"
const selectclass = "#class_id"
const selectsection = "#section_id"
const classcheck = "#form1 > div.box-body > div:nth-child(4) > div:nth-child(4) > label > input[type=checkbox]"
const savebutton = "#form1 > div.box-footer > button"

const adata = require("../../../fixtures/academics.json")
export class classteacher {
    academcistab() {
        cy.get(academcistab).click()
    }



    assignclass() {
        cy.get(assignclass).click()
        cy.get(selectclass).select(adata.class1)
        cy.get(selectsection).select(adata.section1)
        cy.get(classcheck).check()
        cy.get(savebutton).click()
    }
}