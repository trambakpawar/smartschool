Feature: Check the income page

Scenario: Add income to school
 Given I login into system as superadmin
  When I click on add income in income tab and fill the data
  Then New income is get added to school

Scenario: Search income in school
 Given I login into system as superadmin
  When I click on search income in income tab
  Then Income should get displayed in result


Scenario: Add income haed in school
 Given I login into system as superadmin
  When I click on income head in income tab and fill the data
  Then Income head should get displayed in result

@focus
Scenario: Delete income from school
 Given I login into system as superadmin
  When I find the income and delete it
  Then Income should get deleted from result
