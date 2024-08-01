describe('Table Test', () => {
    it('should verify nested tables and content', () => {
        cy.get('table').should('have.length', 5);

        cy.get('table').each(($table, index) => {
            if (index === 1) {
                cy.wrap($table).find('th').eq(0).should('contain', 'Nested Table 2');
                cy.wrap($table).find('th').eq(1).should('contain', 'Column 1');
                cy.wrap($table).find('th').eq(2).should('contain', 'Column 2');
            }

            if (index === 3) {
                cy.wrap($table).find('th').eq(0).should('contain', 'Nested Table 3');
                cy.wrap($table).find('td').contains('Nested Table').should('exist');
            }

            if (index === 4) {
                cy.wrap($table).find('th').eq(0).should('contain', 'Nested Table 4');
                cy.wrap($table).find('td').contains('HTML').should('have.css', 'background-color', 'rgb(0, 0, 0)');
            }
        });
    });
});
