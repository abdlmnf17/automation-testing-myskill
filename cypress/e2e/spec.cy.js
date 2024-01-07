describe('MySkill Automation Test', () => {
  beforeEach(function () {
    cy.visit('/auth/login');
    cy.fixture('user').as('userData');
  });

  it('Should perform login and check profile', function () {
    cy.get('[name="email"]').type(`${this.userData.email}`);
    cy.get('[name="password"]').type(`${this.userData.password}`);
    cy.get('[type="submit"]').click();
    cy.url().should('include', '/');
  });
});
