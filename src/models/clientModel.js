const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  nombreCompleto: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    trim: true
  },
  telefono: {
    type: String,
    trim: true
  },
  fechaRegistro: {
    type: Date,
    default: Date.now
  },
  tipoUsuario: {
    type: String,
    trim: true
  },
  metodoPagoPreferido: [{
    type: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Cliente', clientSchema);
