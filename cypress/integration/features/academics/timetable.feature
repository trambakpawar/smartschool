Feature: Check the Academics Page

Scenario: Assign class teacher
  Given I login into system
  When I click on Academics and add classroom timetable
  Then Timetable is get added to school


