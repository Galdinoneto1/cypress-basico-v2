Cypress.Commands.add('fillMandatoryFieldsAndSubimit', function() {
     cy.get('#firstName').type('Galdino')
     cy.get('#lastName').type('Neto')
     cy.get('#email').type('galdino.neto1@gmail.com')
     cy.get('#open-text-area').type('Teste')
     cy.get('button[type="submit"]').click()
})  