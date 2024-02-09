describe("connect wallet", () => {
  it("visit localhost3000", () => {
    cy.visit("http://localhost:3000/");
  });

  it("connect wallet", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#button").click();
  });
});
