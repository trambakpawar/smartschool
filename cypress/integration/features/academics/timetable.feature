Feature: Check the Academics Page

Scenario: Add classroom timetable
 Given I login into system
  When I click on Academics and add classroom timetable
  Then Timetable is get added to school