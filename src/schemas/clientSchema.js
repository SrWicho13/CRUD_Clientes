const { gql } = require('apollo-server-express');

const clientTypeDefs = gql`
  type Cliente {
    id: String!
    nombreCompleto: String!
    email: String!
    password: String!
    direccion: String
    telefono: String
    fechaRegistro: String
    tipoUsuario: String
    metodoPagoPreferido: [String]
  }

  type Query {
    obtenerClientes: [Cliente]
    obtenerClientePorID(id: String!): Cliente
  }

  input CreateClientInput {
    nombreCompleto: String!
    email: String!
    password: String!
    direccion: String
    telefono: String
    tipoUsuario: String
    metodoPagoPreferido: [String]
  }

  input UpdateClientInput {
    nombreCompleto: String
    email: String
    password: String
    direccion: String
    telefono: String
    tipoUsuario: String
    metodoPagoPreferido: [String]
  }

  type Mutation {
    crearCliente(input: CreateClientInput!): Cliente
    actualizarCliente(id: String!, input: UpdateClientInput!): Cliente
    eliminarCliente(id: String!): String
  }
`;

module.exports = clientTypeDefs;
