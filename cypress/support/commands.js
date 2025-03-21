import { fakerPT_BR as faker } from '@faker-js/faker'
import { API_URL } from "../constants/constants";

Cypress.Commands.add('novoUsuario', () => {
  return cy.wrap({
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: 'true'
  });
});

Cypress.Commands.add('loginUsuarioInvalido', () => {
    return cy.wrap({
      email: faker.internet.email(),
      password: faker.internet.password()
    });
  });

  Cypress.Commands.add('loginUsuarioValido', () => {
    return cy.request({
        method: 'GET',
        url: `${API_URL}/usuarios`,
        failOnStatusCode: false
      }).then((response) => {
        const usuarios = response.body.usuarios; // Acessa a lista de usuários
        if (usuarios && usuarios.length > 0) {
          const primeiroUsuario = usuarios[0]; // Obtém o primeiro usuário da lista
          return {
            email: primeiroUsuario.email,
            password: primeiroUsuario.password
          }; // Retorna email e password
        } else {
          throw new Error('Nenhum usuário encontrado!');
        }
      });
  });