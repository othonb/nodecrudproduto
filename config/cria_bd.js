/*
 Modulo de criação do banco de dados mysql
*/

var mysql = require ('mysql');

var conexao = mysql.createConnection ({
    host : '127.0.0.1',
    user : 'root',
    password : 'senha',
    multipleStatements : true
});

// Cria o banco de dados e abre para uso
var consultaSQL = "CREATE SCHEMA IF NOT EXISTS `teste` DEFAULT CHARACTER SET utf8;";
consultaSQL += "USE `teste`;"

// Cria a tabela de produtos
consultaSQL += "CREATE TABLE IF NOT EXISTS `teste`.`produto` (";
consultaSQL += "`codigo` INT(11) NOT NULL AUTO_INCREMENT,";
consultaSQL += "`descricao` VARCHAR(30) NOT NULL,";
consultaSQL += "`quantidade` INT(11) NOT NULL,";
consultaSQL += "`preco_compra` DOUBLE NOT NULL,";
consultaSQL += "`preco_venda` DOUBLE NOT NULL,";
consultaSQL += "PRIMARY KEY (`codigo`));";


var msg =  "Banco de dados, tabelas, funções e procedimentos armazenados criadas com sucesso";

module.exports = function () {

  conexao.beginTransaction (function (erro) {
    if (erro) {throw erro;}

    conexao.query (consultaSQL, function (erro, resultadoConsultaSQL) {
      if (erro) {throw erro;}
    }); // conexao.query

    conexao.commit (function (erro) {
      if (erro) {
        conexao.rollback (function (erro) {
          throw erro;
        }); // conexao.rollback
      }

      console.log (msg);

      conexao.end ();
    }); // conexao.commit
  }); // conexao.beginTransaction

};
