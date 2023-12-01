'use strict';

var utils = require('../utils/writer.js');
var Usuarios = require('../service/UsuariosService');

module.exports.actualizarUsuarioPorId = function actualizarUsuarioPorId (req, res, next, body, id_usuario) {
  Usuarios.actualizarUsuarioPorId(body, id_usuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eliminarUsuarioPorId = function eliminarUsuarioPorId (req, res, next, id_usuario) {
  Usuarios.eliminarUsuarioPorId(id_usuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.iniciarSesionUsuario = function iniciarSesionUsuario (req, res, next, body) {
  Usuarios.iniciarSesionUsuario(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obtenerEstadisticasJuegoUsuarioPorId = function obtenerEstadisticasJuegoUsuarioPorId (req, res, next, id_usuario) {
  Usuarios.obtenerEstadisticasJuegoUsuarioPorId(id_usuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obtenerInfoPrivadaUsuarioPorId = function obtenerInfoPrivadaUsuarioPorId (req, res, next, id_usuario) {
  Usuarios.obtenerInfoPrivadaUsuarioPorId(id_usuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obtenerTodosUsuarios = function obtenerTodosUsuarios (req, res, next) {
  Usuarios.obtenerTodosUsuarios()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obtenerUsuarioPorId = function obtenerUsuarioPorId (req, res, next, id_usuario) {
  Usuarios.obtenerUsuarioPorId(id_usuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registrarUsuario = function registrarUsuario (req, res, next, body) {
  Usuarios.registrarUsuario(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
