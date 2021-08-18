Feature: Check the income page

Scenario: Add income to school
 Given I login into system as superadmin
  When I click on add income in income tab and fill the data
  Then New income is get added to school

