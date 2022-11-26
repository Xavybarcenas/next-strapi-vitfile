'use strict';

/**
 * estado-paciente service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::estado-paciente.estado-paciente');
