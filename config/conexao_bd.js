/*
 Modulo de conexao com o banco de dados mysql
*/

var mysql = require ( 'mysql');
var config_bd = require ('./config_bd')

module.exports = function (consultaSQL, msg) {

  return mysql.createConnection (config_bd);

};
