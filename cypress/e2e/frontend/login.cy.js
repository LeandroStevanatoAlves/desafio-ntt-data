/// <reference types="cypress" />
import { FRONTEND_URL } from "../../constants/constants";

describe('Frontend - Tela de login', () => {
    it('Loga com um usuario válido', () => {
        cy.loginUsuarioValido().then((usuario) => {
            cy.visit(FRONTEND_URL);
            cy.get('input[name=email]').type(usuario.email);
            cy.get('input[name=password]').type(usuario.password);
            cy.get('button').click();
            cy.get('.lead').should('have.text', 'Este é seu sistema para administrar seu ecommerce.');
            cy.title().should('eq', 'Front - ServeRest');
        });
    });

    it('Tenta logar com usuario invalido', () => {
        cy.loginUsuarioInvalido().then((usuario) => {
            cy.visit(FRONTEND_URL);
            cy.get('input[name=email]').type(usuario.email);
            cy.get('input[name=password]').type(usuario.password);
            cy.get('button').click();
            cy.get('.alert > :nth-child(2)').should('have.text', 'Email e/ou senha inválidos');
            cy.url().should('eq', `${FRONTEND_URL}/login`);
        });
    });
});
