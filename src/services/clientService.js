const Cliente = require('../models/clientModel');

const ClientService = {
  // Obtener todos los clientes
  getAllClients: async () => {
    return await Cliente.find();
  },

  // Obtener un cliente por ID
  getClientById: async (id) => {
    return await Cliente.findById(id);
  },

  // Crear un nuevo cliente
  createClient: async (input) => {
    const newClient = new Cliente(input);
    return await newClient.save();
  },

  // Actualizar un cliente existente
  updateClient: async (id, input) => {
    return await Cliente.findByIdAndUpdate(id, input, { new: true });
  },

  // Eliminar un cliente
  deleteClient: async (id) => {
    return await Cliente.findByIdAndDelete(id);
  },
};

module.exports = ClientService;
