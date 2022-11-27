it("Procura no google", () => {
    cy.visit('http://google.com.br');
    cy.get('[name="q"]').type('Cypress Automation');
    cy.get('[role="search"]').submit();
    cy.get('a[href="https://www.cypress.io/how-it-works/"]').should("contain", "End to End Testing Framework | cypress.io testing tools");
});