var conexaoBD = require ('../config/conexao_bd');

var transacaoBD = require ('../config/transacao_bd');

var trataOptions = require ('../config/trata_options');

module.exports = function (app) {

  app.options ('/insereProduto', function (requisicao, resposta) {

    var options = trataOptions (resposta);

  });

  app.post ('/insereProduto', function (requisicao, resposta) {

    var produtoDescricao = requisicao.body.produtoDescricao;

    var produtoQuantidade = requisicao.body.produtoQuantidade;

    var produtoPrecoCompra = requisicao.body.produtoPrecoCompra;

    var produtoPrecoVenda = requisicao.body.produtoPrecoVenda;

    var consultaSQL = 'INSERT INTO produto' +
                    '(descricao, quantidade, preco_compra, preco_venda) ' +
                    'VALUES (' +
                    '"' + produtoDescricao + '", ' + 
                    produtoQuantidade + ', ' + 
                    produtoPrecoCompra + ', ' +
                    produtoPrecoVenda + 
                    ');';

    var msg = 'Inserção de produto concluída!\n' + consultaSQL;

    var conexao = conexaoBD ();

    var executaTransacao = transacaoBD (conexao, consultaSQL, msg, resposta);

  });

};
