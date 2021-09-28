const academcistab = "#sibe-box > ul.sidebar-menu.verttop > li:nth-child(10) > a"
const promotetab = "#sibe-box > ul.sidebar-menu.verttop > li.treeview.active > ul > li:nth-child(4) > a"
const selectclass = "#class_id"
const selectsection = "#section_id"
const sessionid = "#session_id"
const classid = "#class_promote_id"
const sectionid = "#section_promote_id"
const searchbutton = "#form1 > div.box-footer > button"
const body = ".box > :nth-child(4)"
const promote = "body > div.wrapper > div.content-wrapper > section.content > div > div > div > div.box-footer.clearfix > a"
const savebutton = ".modal-content > .modal-footer > .btn"
const adata = require("../../../fixtures/academics.json")
export class student {
    academcistab() {
        cy.get(academcistab).click()
    }




    

    promotestudent() {
        cy.get(promotetab).click()
        cy.get(selectclass).select(adata.class)
        cy.get(selectsection).select(adata.section)
        cy.get(sessionid).select(adata.session)
        cy.get(classid).select(adata.class1)
        cy.get(sectionid).select(adata.section1)
        cy.get(searchbutton).click()
        cy.get(body).find('.checkbox').check()
        cy.get(promote).click()
        cy.get(savebutton).click()

    }
}