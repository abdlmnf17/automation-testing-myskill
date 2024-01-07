// cypress/integration/myskill_test.spec.js

describe('MySkill Automation Test', () => {
    beforeEach(() => {
      cy.visit('/auth/login'); // Ganti dengan path atau URL yang sesuai
    });
  
    it('Should perform login and check profile', () => {
      cy.get('#email').type('abdlmnf17@gmail.com');
      cy.get('#password').type('your_password');
      cy.get('#submit').click();
  
      // Tambahkan langkah pengujian lainnya sesuai kebutuhan
      // Misalnya, verifikasi bahwa pengguna berhasil login dan melihat profilnya.
      cy.contains('Welcome, your_username').should('be.visible');
      cy.get('#dashboard').click();
      cy.url().should('include', '/profile');
    });
  
    // Tambahkan lebih banyak skenario pengujian jika diperlukan
  });
  