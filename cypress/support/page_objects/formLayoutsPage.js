export class FormLayoutsPage {
  submitInlineFormwithNameAndEmail(name = 'test', email = 'test@test.com') {
    cy.contains('nb-card', 'Inline form')
      .find('form')
      .then((form) => {
        cy.wrap(form).find('[placeholder="Jane Doe"]').type(name);
        cy.wrap(form).find('[placeholder="Email"]').type(email);
        cy.wrap(form).find('[type="checkbox"]').check({ force: true });
        cy.wrap(form).submit();
      });
  }

  submitBasicFormWithEmailAndPassword(
    email = 'test@test.com',
    password = '123456789'
  ) {
    cy.contains('nb-card', 'Basic form')
      .find('form')
      .then((form) => {
        cy.wrap(form).find('[type="email"]').type(email);
        cy.wrap(form).find('[type="password"]').type(password);
        cy.wrap(form).find('[type="checkbox"]').check({ force: true });
        cy.wrap(form).submit();
      });
  }
}

export const onFormLayoutsPage = new FormLayoutsPage();
