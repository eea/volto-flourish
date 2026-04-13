import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Flourish Block: View Mode Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('Flourish Block: Add and save', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Flourish Test');
    cy.get('.documentFirstHeading').contains('Flourish Test');

    cy.getSlate().click();

    // Add flourish block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Data Visualizations').click();
    cy.get('.content.active.data_visualizations .button.embed_flourish_visualization')
      .click({ force: true });

    // Save
    cy.get('#toolbar-save').click();
    cy.contains('Flourish Test');
  });
});