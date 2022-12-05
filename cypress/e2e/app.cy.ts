/// <reference types="cypress" />
describe('<App/>', () => {
	it('<App/> -  Verificar cabecera pantalla de inicio', () => {
		cy.visit('/');
		cy.contains('Todos los posts');
	});
	it('<App/> -  Verificar Cards minima cantidad y maxima cantidad', () => {
		cy.visit('/');
		cy.get('.container__cards');
		cy.get('.container__cards').should('have.length.at.least', 1);
		cy.get('.container__cards').should('have.length.of.at.most', 100);
	});
	it('<App/> -  Verificar usuario', () => {
		cy.visit('/');
		cy.get('.container__cards > :nth-child(1)').contains('Username');
	});
});

describe('<Conexion/>', () => {
	it('<App/> -  Verificar cabecera pantalla de conexion', () => {
		cy.visit('/conexion');
		cy.contains('Todos los posts paginados');
	});
});

describe('<Login/>', () => {
	it('<Login/> -  Verificar inicio de sesión', () => {
		cy.visit('/login');

		cy.get('[data-cy=form-login]').should('exist');
		cy.get('[data-cy=usuario-input]').should('exist');
		cy.get('[data-cy=password-input]').should('exist');
	});
});
