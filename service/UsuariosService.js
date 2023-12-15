'use strict';

// Simulación de datos de usuario
const usuarios = [
  { id_usuario: 1, nombre: 'pedro', email: 'pedro@unex.com', contraseña: 'pedro' },
  { id_usuario: 2, nombre: 'fer', email: 'fer@unex.com', contraseña: 'fer' },
  { id_usuario: 3, nombre: 'carlos', email: 'carlos@unex.com', contraseña: 'carlos' }
];

var subscriptionTypes = ["Básica", "Estándar", "Premium"]; // Ejemplo de tipos de suscripción



/**
 * Actualizar un usuario por ID
 *
 * @param {Object} body - Datos del usuario a actualizar
 * @param {number} id_usuario - ID del usuario a actualizar
 * @returns {Promise} - Promise que contiene el usuario actualizado o un mensaje de error
 **/
exports.actualizarUsuarioPorId = function(body, id_usuario) {
  return new Promise(function(resolve, reject) {
    // Genera un número aleatorio entre 0 y 99
    const randomNum = Math.floor(Math.random() * 100);

    // Comprueba si el número aleatorio está en el rango del 0 al 19 (20%)
    if (randomNum < 20) {
      // Simulación de error: Actualización fallida
      reject({ status: 500, message: "Error al actualizar el usuario" });
    } else {
      // Simulación de actualización exitosa del usuario
      const usuarioActualizado = {
        id_usuario: id_usuario,
        nombre: body.nombre ,
        email: body.email,
        contraseña: body.contraseña
      };

      resolve({ status: 200, usuario: usuarioActualizado });
    }
  });
}

/**
 * Eliminar un usuario por ID
 *
 * @param {number} id_usuario - ID del usuario a eliminar
 * @returns {Promise} - Promise que indica si se ha eliminado correctamente o un mensaje de error
 **/
exports.eliminarUsuarioPorId = function(id_usuario) {
  return new Promise(function(resolve, reject) {
    // Aquí se realizaría la lógica para eliminar el usuario con el ID proporcionado

    const randomNum = Math.floor(Math.random() * 100);

    // Ejemplo: Simulación de eliminación del usuario
    const usuarioEliminado = randomNum < 20;

    if (usuarioEliminado) {
      usuarios = usuarios.filter(usuario => usuario.id !== id_usuario);
      resolve({ status: 200, message: "Usuario eliminado correctamente" });
      // Devuelve un código de estado 200 y un mensaje de éxito al eliminar el usuario
    } else {
      reject({ status: 404, message: "No se pudo eliminar el usuario" });
      // Devuelve un mensaje de error indicando que no se pudo eliminar el usuario
    }
  });
}


/**
 * Iniciar sesión de usuario
 *
 * body Usuarios_login_body 
 * @returns {Promise} - Promise que contiene el token de autenticación o un mensaje de error
 **/
exports.iniciarSesionUsuario = function(body) {
  return new Promise(function(resolve, reject) {
    // Simulación de verificación de credenciales
    const credencialesValidas = Math.random() < 0.8; // 80% de probabilidad de credenciales válidas

    // Función auxiliar para generar un token de autenticación (ejemplo básico)
    function generarToken() {
      return Math.random().toString(36).substr(2); // Ejemplo: Generación de un token aleatorio
    }

    if (credencialesValidas) {
      const token = generarToken(); // Genera un token de autenticación
      resolve({ status: 200, token: token }); // Devuelve el token si las credenciales son "válidas"
    } else {
      reject({ status: 401, message: "Credenciales inválidas" }); // Devuelve un mensaje de error si las credenciales son inválidas
    }
  });
}


/**
 * Obtener estadísticas de juego de un usuario por ID
 * Retorna las estadísticas de juego del usuario especificado por su ID.
 *
 * id_usuario Long ID del usuario cuyas estadísticas de juego se desean obtener
 * @returns {Promise} - Promise que contiene las estadísticas de juego del usuario o un mensaje de error
 **/
exports.obtenerEstadisticasJuegoUsuarioPorId = function(id_usuario) {
  return new Promise(function(resolve, reject) {
    // Función para generar tiempo jugado aleatorio
    function generarTiempoJugado() {
      return Math.random() * 10; // Tiempo jugado entre 0 y 10 horas (ejemplo)
    }

    // Función para generar partidas ganadas aleatorias
    function generarPartidasGanadas() {
      return Math.floor(Math.random() * 20); // Número de partidas ganadas entre 0 y 20 (ejemplo)
    }

    // Función para generar partidas perdidas aleatorias
    function generarPartidasPerdidas() {
      return Math.floor(Math.random() * 10); // Número de partidas perdidas entre 0 y 10 (ejemplo)
    }

    // Función para generar logros aleatorios
    function generarLogros() {
      const logrosPosibles = ["Logro 1", "Logro 2", "Logro 3", "Logro 4", "Logro 5"];
      const cantidadLogros = Math.floor(Math.random() * 5); // Máximo 5 logros (ejemplo)
      let logros = [];

      for (let i = 0; i < cantidadLogros; i++) {
        logros.push(logrosPosibles[Math.floor(Math.random() * logrosPosibles.length)]);
      }

      return logros;
    }

    // Función para generar partidas jugadas aleatorias
    function generarPartidasJugadas() {
      return Math.floor(Math.random() * 30); // Número de partidas jugadas entre 0 y 30 (ejemplo)
    }

    // Función para generar puntuación máxima aleatoria
    function generarPuntuacionMaxima() {
      return Math.floor(Math.random() * 10); // Puntuación máxima entre 0 y 10 (ejemplo)
    }

    // Generar estadísticas de juego aleatorias para el usuario
    const estadisticasJuego = {
      tiempo_jugado: generarTiempoJugado(),
      partidas_ganadas: generarPartidasGanadas(),
      partidas_perdidas: generarPartidasPerdidas(),
      logros: generarLogros(),
      partidas_jugadas: generarPartidasJugadas(),
      puntuacion_maxima: generarPuntuacionMaxima()
    };

    // Devolver las estadísticas de juego generadas
    resolve({ status: 200, estadisticas_juego: estadisticasJuego });
  });
}


/**
 * Obtener información privada de un usuario por ID
 * Retorna la información privada del usuario, incluyendo la cuenta bancaria y la dirección.
 *
 * id_usuario Long ID del usuario cuya información privada se desea obtener
 * @returns {Promise} - Promise que contiene la información privada del usuario o un mensaje de error
 **/
exports.obtenerInfoPrivadaUsuarioPorId = function(id_usuario) {
  return new Promise(function(resolve, reject) {
    // Simulación de generación de información privada aleatoria para usuarios

    // Generar información privada aleatoria para un número determinado de usuarios
    let infoPrivadaUsuario = {};

    // Función para generar un nombre aleatorio
    function generarNombre() {
      const nombres = ["Juan", "María", "Carlos", "Laura", "Pedro", "Ana", "Diego", "Sofía"];
      return nombres[Math.floor(Math.random() * nombres.length)];
    }

    // Función para generar un email aleatorio
    function generarEmail() {
      const dominios = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
      const nombre = generarNombre().toLowerCase();
      const dominio = dominios[Math.floor(Math.random() * dominios.length)];
      return `${nombre}@${dominio}`;
    }

    // Función para generar una contraseña aleatoria
    function generarContraseña() {
      return Math.random().toString(36).slice(2); // Genera una cadena aleatoria
    }

    // Función para generar una dirección aleatoria
    function generarDireccion() {
      const codigosPostales = ["12345", "54321", "67890", "98765"];
      const ciudades = ["Ciudad Ejemplo", "Otra Ciudad", "Nueva Ciudad"];
      const calles = ["Calle Ejemplo", "Otra Calle", "Avenida Principal"];
      return {
        codigo_postal: codigosPostales[Math.floor(Math.random() * codigosPostales.length)],
        ciudad: ciudades[Math.floor(Math.random() * ciudades.length)],
        calle: calles[Math.floor(Math.random() * calles.length)]
      };
    }

    // Función para obtener un tipo de suscripción aleatorio 
    function getRandomSubscriptionType() {
      var randomIndex = Math.floor(Math.random() * subscriptionTypes.length);
      return subscriptionTypes[randomIndex];
    }


    // Función para generar un método de pago aleatorio
    function generarMetodoPago() {
      const metodos = ["tarjeta", "transferencia", "paypal"];
      return metodos[Math.floor(Math.random() * metodos.length)];
    }

    infoPrivadaUsuario = {
      id_usuario: id_usuario,
      nombre: generarNombre(),
      email: generarEmail(),
      contraseña: generarContraseña(),
      direccion: generarDireccion(),
      tipo_subscripcion: getRandomSubscriptionType(),
      metodo_pago: generarMetodoPago()
    };
  

    // Verificar si el usuario existe en los datos simulados
    if (infoPrivadaUsuario) {
      resolve({ status: 200, usuario: infoPrivadaUsuario });
      // Devuelve un código de estado 200 y la información privada del usuario si se encuentra
    } else {
      reject({ status: 404, message: "No se encontró la información privada del usuario" });
      // Devuelve un mensaje de error indicando que no se encontró la información privada del usuario
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
    if (usuarios.length > 0) {
      resolve({ status: 200, usuarios: usuarios });
      // Devuelve un código de estado 200 y la lista de usuarios si existen usuarios en la lista
    } else {
      resolve({ status: 200, message: "No se encontraron usuarios" });
      // Devuelve un código de estado 200 con un mensaje indicando que no se encontraron usuarios
    }
  });
}


/**
 * Obtener un usuario por ID
 *
 * id_usuario Long ID del usuario a consultar, actualizar o eliminar
 * @returns {Promise} - Promise que contiene la información del usuario o un mensaje de error
 **/
exports.obtenerUsuarioPorId = function(id_usuario) {
  return new Promise(function(resolve, reject) {
    // Aquí normalmente se realizaría una consulta a una base de datos o a algún almacenamiento para obtener los datos del usuario.
    // En esta simulación, se genera un usuario aleatorio solo con fines demostrativos.

    // Buscar el usuario por ID
    const usuarioEncontrado = usuarios.find(usuario => usuario.id_usuario === id_usuario);

    if (usuarioEncontrado) {
      resolve(usuarioEncontrado); // Devuelve la información del usuario si se encuentra
    } else {
      reject({ status: 404, message: "Usuario no encontrado" }); // Devuelve un mensaje de error si el usuario no se encuentra
    }
  });
}

/**
 * Registrar un nuevo usuario
 *
 * body Usuario 
 * @returns {Promise} - Promise que indica el éxito del registro o un mensaje de error
 **/
exports.registrarUsuario = function(body) {
  return new Promise(function(resolve, reject) {
    // Simulación de un número aleatorio para determinar si el registro tendrá éxito o fallará
    const probabilidadExito = Math.random();

    if (probabilidadExito < 0.8) {
      // Simulación de éxito: 80% de probabilidad de que el registro sea exitoso

      // Aquí normalmente se guardarían los datos del nuevo usuario en una base de datos.
      // En esta simulación, se asume que se añade el nuevo usuario a una lista de usuarios.

      // Simulación de generar un nuevo ID para el usuario (en una base de datos real, el ID sería generado automáticamente)
      const nuevoIdUsuario = usuarios.length + 1;

      // Crear un nuevo usuario con los datos proporcionados en el cuerpo de la solicitud
      const nuevoUsuario = {
        id_usuario: nuevoIdUsuario,
        nombre: body.nombre,
        email: body.email,
        contraseña: body.contraseña
      };

      // Simulación de guardar el nuevo usuario en la lista (o base de datos)
      usuarios.push(nuevoUsuario);

      resolve({ status: 201, message: "Usuario registrado correctamente", usuario: nuevoUsuario });
      // Devuelve un mensaje indicando que el usuario se registró correctamente junto con los datos del nuevo usuario.
    } else {
      // Simulación de fracaso: 20% de probabilidad de que el registro falle
      reject({ status: 500, message: "Error al registrar el usuario" });
      // Devuelve un mensaje de error indicando que el registro falló
    }
  });
}


const Prometheus = require('prom-client');

/**
 * getMetrics
 * Endpoint to retrieve Prometheus metrics
 * @returns {Promise} Promise object represents the handling of the metrics endpoint
 **/
exports.getMetrics = function() {
  return new Promise(function(resolve, reject) {
    resolve(Prometheus.register.metrics())
  });
};