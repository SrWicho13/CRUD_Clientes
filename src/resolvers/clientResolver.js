const Cliente = require('../models/clientModel');

const clientResolvers = {
  Query: {
    obtenerClientes: async () => {
      try {
        return await Cliente.find();
      } catch (error) {
        throw new Error(error);
      }
    },
    obtenerClientePorID: async (_, { id }) => {
      try {
        return await Cliente.findById(id);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    crearCliente: async (_, { input }) => {
      try {
        const nuevoCliente = new Cliente(input);
        return await nuevoCliente.save();
      } catch (error) {
        throw new Error(error);
      }
    },
    actualizarCliente: async (_, { id, input }) => {
      try {
        return await Cliente.findByIdAndUpdate(id, input, { new: true });
      } catch (error) {
        throw new Error(error);
      }
    },
    eliminarCliente: async (_, { id }) => {
      try {
        await Cliente.findByIdAndDelete(id);
        return "Cliente eliminado con éxito";
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = clientResolvers;
