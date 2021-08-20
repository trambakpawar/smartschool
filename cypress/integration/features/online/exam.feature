Feature: Check the online exam page

Scenario: Create online exam
 Given I login into system
  When I click on add exam and fill the exam data
  Then Exam is get added to school