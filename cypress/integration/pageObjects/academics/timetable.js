const academcistab = "#sibe-box > ul.sidebar-menu.verttop > li:nth-child(10) > a"
const timetablepage = "#sibe-box > ul.sidebar-menu.verttop > li.treeview.active > ul > li:nth-child(1) > a"
const addbutton = "body > div.wrapper > div.content-wrapper > section.content > div > div > div > div > div > a"
const classid = "#class_id"
const sectionid = "#section_id"
const subject = "#subject_group_id"
const searchbutton = "body > div.wrapper > div.content-wrapper > section.content > div > div > div > form > div.box-footer > button"
const addrow = "#add_row"
const sub = "#subject_id"
const teacher = "#staff_id_5"
const timefrom = "#time_from_5"
const timeto = "#time_to_5"
const roomno = "#room_no_5"
const savebutton = ".btn btn-primary btn-sm pull-right"
const adata = require("../../../fixtures/academics.json")
export class timetable {

    academcistab() {
        cy.get(academcistab).click()
    }

    addtimetable() {
        cy.get(timetablepage).click()
        cy.viewport(1200., 800)
        cy.get(addbutton).click()
        cy.get(classid).select(adata.class)
        cy.get(sectionid).select(adata.section)
        cy.get(subject).select(adata.subject)
        cy.get(searchbutton).click()
        cy.get(addrow).click()
        cy.get(':nth-child(9) > :nth-child(1) > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').click()
        cy.get(sub).select(adata.sub, { force: true })
        cy.get(':nth-child(9) > :nth-child(2) > .select2 > .selection > .select2-selection > .select2-selection__arrow').click()
        cy.get(teacher).select(adata.teacher, { force: true })
        cy.get(timefrom).type(adata.timefrom)
        cy.get(timeto).type(adata.timeto)
        cy.get(roomno).type(adata.roomno)
        cy.get(savebutton).click()
    }
}