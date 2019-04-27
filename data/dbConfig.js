const knex = require('knex');
const environment = process.env.DB_ENV || "development";
const config = require('../knexfile.js');

const knexConfig = (config[environment])

module.exports = knex(knexConfig);
