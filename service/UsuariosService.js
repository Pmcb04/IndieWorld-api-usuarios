'use strict';


/**
 * Actualizar un usuario por ID
 *
 * body Usuario 
 * id_usuario Long ID del usuario a consultar, actualizar o eliminar
 * returns Usuario
 **/
exports.actualizarUsuarioPorId = function(body,id_usuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_usuario" : "id_usuario",
  "nombre" : "nombre",
  "email" : "",
  "contraseña" : "contraseña"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Eliminar un usuario por ID
 *
 * id_usuario Long ID del usuario a consultar, actualizar o eliminar
 * no response value expected for this operation
 **/
exports.eliminarUsuarioPorId = function(id_usuario) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Iniciar sesión de usuario
 *
 * body Usuarios_login_body 
 * no response value expected for this operation
 **/
exports.iniciarSesionUsuario = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obtener estadísticas de juego de un usuario por ID
 * Retorna las estadísticas de juego del usuario especificado por su ID.
 *
 * id_usuario Long ID del usuario cuyas estadísticas de juego se desean obtener
 * returns Estadisticas_juego
 **/
exports.obtenerEstadisticasJuegoUsuarioPorId = function(id_usuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tiempo_jugado" : 5.637376656633329,
  "partidas_ganadas" : 6,
  "partidas_perdidas" : 1,
  "logros" : [ "logros", "logros" ],
  "partidas_jugadas" : 0,
  "puntuacion_maxima" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener información privada de un usuario por ID
 * Retorna la información privada del usuario, incluyendo la cuenta bancaria y la dirección.
 *
 * id_usuario Long ID del usuario cuya información privada se desea obtener
 * returns Usuario_privado
 **/
exports.obtenerInfoPrivadaUsuarioPorId = function(id_usuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "id_usuario" : "id_usuario",
  "direccion" : {
    "codigo_postal" : "codigo_postal",
    "ciudad" : "ciudad",
    "calle" : "calle"
  },
  "tipo_subscripcion" : "normal",
  "metodo_pago" : "metodo_pago",
  "nombre" : "nombre",
  "email" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener todos los usuarios
 *
 * no response value expected for this operation
 **/
exports.obtenerTodosUsuarios = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obtener un usuario por ID
 *
 * id_usuario Long ID del usuario a consultar, actualizar o eliminar
 * returns Usuario
 **/
exports.obtenerUsuarioPorId = function(id_usuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_usuario" : "id_usuario",
  "nombre" : "nombre",
  "email" : "",
  "contraseña" : "contraseña"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Registrar un nuevo usuario
 *
 * body Usuario 
 * no response value expected for this operation
 **/
exports.registrarUsuario = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

