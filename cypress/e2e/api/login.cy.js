/// <reference types="cypress" />
import { API_URL } from "../../constants/constants";

describe('API - Endpoint /login', () => {
  it('Loga com um usuario válido', () => {
    cy.loginUsuarioValido().then((usuario) => {
      cy.request({
        method: 'POST',
        url: `${API_URL}/login`,
        body: usuario,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('Login realizado com sucesso');
        expect(response.body.authorization).to.not.be.null;
      });
    });
  });

  it('Tenta logar com usuario invalido', () => {
    cy.loginUsuarioInvalido().then((usuario) => {
      cy.request({
        method: 'POST',
        url: `${API_URL}/login`,
        body: usuario,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body.message).to.eq('Email e/ou senha inválidos');
      });
    });
  });
});
