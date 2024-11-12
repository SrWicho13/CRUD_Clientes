const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

// Importaciones de esquemas y resolvers de clientes
const clientTypeDefs = require('./schemas/clientSchema');
const clientResolvers = require('./resolvers/clientResolver');

const app = express();

// Agregar solo el esquema y resolver de clientes
const typeDefs = clientTypeDefs;
const resolvers = clientResolvers;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  server.applyMiddleware({ app });

  // Conectar a MongoDB (actualiza 'your-db-name' con el nombre de tu base de datos)
  mongoose.connect('mongodb://localhost:27017/your-db-name', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to MongoDB');
      app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
      );
    })
    .catch(err => {
      console.error('Error connecting to MongoDB', err);
    });
});
