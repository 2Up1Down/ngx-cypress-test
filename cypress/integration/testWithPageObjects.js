import { onDatepickerPage } from '../support/page_objects/datepickerPage';
import { onFormLayoutsPage } from '../support/page_objects/formLayoutsPage';
import { navigateTo } from '../support/page_objects/navigationPage';

describe('Test with Page Objects', () => {
  beforeEach('open application', () => {
    cy.openHomePage();
  });

  it('verify navigations across the pages', () => {
    navigateTo.formLayoutsPage();
    navigateTo.datepickerPage();
    navigateTo.smartTablePage();
    navigateTo.tooltipPage();
    navigateTo.toasterPage();
  });

  it.only('should submit Inline and Basic form and select tomorrow date in the calendar', () => {
    navigateTo.formLayoutsPage();
    onFormLayoutsPage.submitInlineFormwithNameAndEmail(
      'Adam',
      'testing@testing.com'
    );
    onFormLayoutsPage.submitBasicFormWithEmailAndPassword(
      'ws@ws.ws',
      'password1234'
    );
    navigateTo.datepickerPage();
    onDatepickerPage.selectCommonDatepickerDateFromToday(2);
  });
});
