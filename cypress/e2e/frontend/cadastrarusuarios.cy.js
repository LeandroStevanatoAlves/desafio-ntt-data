/// <reference types="cypress" />
import { FRONTEND_URL } from "../../constants/constants";

describe('Frontend - Tela de Cadastro de Usuários', () => {
    it('Cadastra um usuário com sucesso', () => {
        cy.novoUsuario().then((usuario) => {
            cy.visit(FRONTEND_URL);
            cy.contains('Cadastre-se').click();

            cy.get('[data-testid="nome"]').type(usuario.nome);
            cy.get('[data-testid="email"]').type(usuario.email);
            cy.get('[data-testid="password"]').type(usuario.password);
            if (usuario.administrador) {
                cy.get('[data-testid="checkbox"]').click();
            }
            cy.get('[data-testid="cadastrar"]').click();
            cy.get('.alert > :nth-child(2)').should('have.text', 'Cadastro realizado com sucesso');
        });
    });

    it('Tenta cadastrar um usuário com email em branco', () => {
        cy.novoUsuario().then((usuario) => {
            cy.visit(FRONTEND_URL);
            cy.contains('Cadastre-se').click();

            cy.get('[data-testid="nome"]').type(usuario.nome);
            cy.get('[data-testid="password"]').type(usuario.password);
            if (usuario.administrador) {
                cy.get('[data-testid="checkbox"]').click();
            }
            cy.get('[data-testid="cadastrar"]').click();
            cy.get('.alert > :nth-child(2)').should('have.text', 'Email é obrigatório');
        });
    });
});
