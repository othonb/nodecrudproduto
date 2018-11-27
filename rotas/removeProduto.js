var conexaoBD = require ('../config/conexao_bd');

var transacaoBD = require ('../config/transacao_bd');

var trataOptions = require ('../config/trata_options');

module.exports = function (app) {

  app.options ('/insereProduto', function (requisicao, resposta) {

    var options = trataOptions (resposta);

  });

  app.post ('/insereProduto', function (requisicao, resposta) {

    var produtoCodigo = requisicao.body.produtoCodigo;

    var consultaSQL = 'DELETE FROM produto ' +
                    'WHERE codigo = ' +
                    produtoCodigo + 
                    ';';

    var msg = 'Remoção de produto concluída!\n' + consultaSQL;

    var conexao = conexaoBD ();

    var executaTransacao = transacaoBD (conexao, consultaSQL, msg, resposta);

  });

};
