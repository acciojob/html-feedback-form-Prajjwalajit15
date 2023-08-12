it("should validate form elements", () => {
  cy.visit(baseUrl + "/main.html");
  cy.contains("Feedback Form");
  
  cy.get("form").within(() => {
    cy.get("input#name")
      .should("have.attr", "minlength", "3")
      .should("have.attr", "maxlength", "50");
      
    cy.get("label[for='name']");
    
    cy.get("input#portfolio[type='url']")
      .should("be.required");
      
    cy.get("label[for='portfolio']");
    
    cy.get("input#favColor[type='color']");
    cy.get("label[for='favColor']");
    
    cy.get("input#likeness[type='range']")
      .should("have.attr", "min", "1")
      .should("have.attr", "max", "100");
      
    cy.get("label[for='likeness']");
  });
});

