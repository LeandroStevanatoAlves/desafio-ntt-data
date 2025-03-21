/// <reference types="cypress" />
import { API_URL } from "../../constants/constants";

describe('API - Endpoint /usuarios', () => {
    it('Cadastra um usuário com sucesso', () => {
        cy.novoUsuario().then((usuario) => {
            cy.request('POST', `${API_URL}/usuarios`, usuario).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.message).to.eq('Cadastro realizado com sucesso');
                expect(response.body._id).to.not.be.null;

                // Limpeza dos dados - Exclui o novo usuário cadastrado
                cy.request('DELETE', `${API_URL}/usuarios/${response.body._id}`).then((deleteResponse) => {
                    expect(deleteResponse.status).to.eq(200);
                    expect(deleteResponse.body.message).to.eq('Registro excluído com sucesso');
                });
            });
        });
    });

    it('Tenta cadastrar um usuário com email em branco', () => {
        cy.novoUsuario().then((usuario) => {
            usuario.email = '';
            cy.request({
                method: 'POST',
                url: `${API_URL}/usuarios`,
                body: usuario,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400);
                expect(response.body.email).to.eq('email não pode ficar em branco');
            });
        });
    });
});
