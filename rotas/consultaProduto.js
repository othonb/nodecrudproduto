var conexaoBD = require ('../config/conexao_bd');

var transacaoBD = require ('../config/transacao_bd');

var trataOptions = require ('../config/trata_options');

module.exports = function (app) {

  app.options ('/consultaProduto', function (requisicao, resposta) {

    var options = trataOptions (resposta);

  });

  // http://127.0.0.1:8080/consultaProduto

  app.post ('/consultaProduto', function (requisicao, resposta) {

    var produtoCodigo = requisicao.body.produtoCodigo;

    var consultaSQL = 'SELECT * FROM produto ' +
                      ' WHERE codigo = ' + produtoCodigo +
                      ';';

    var msg = 'Seleção de produto concluída!\n' + consultaSQL;

    var conexao = conexaoBD ();

    var executaTransacao = transacaoBD (conexao, consultaSQL, msg, resposta);

  });

};
