var conexaoBD = require ('../config/conexao_bd');

var transacaoBD = require ('../config/transacao_bd');

var trataOptions = require ('../config/trata_options');

module.exports = function (app) {

  app.options ('/insereProduto', function (requisicao, resposta) {

    var options = trataOptions (resposta);

  });

  app.post ('/insereProduto', function (requisicao, resposta) {

    var produtoCodigo = requisicao.body.produtoCodigo;

    var produtoDescricao = requisicao.body.produtoDescricao;

    var produtoQuantidade = requisicao.body.produtoQuantidade;

    var produtoPrecoCompra = requisicao.body.produtoPrecoCompra;

    var produtoPrecoVenda = requisicao.body.produtoPrecoVenda;

    var consultaSQL = 'UPDATE cliente SET senha = "' + senha + '" WHERE id = ' + id + ';';

    var consultaSQL = 'UPDATE produto ' +
                    'SET descricao = ' + produtoDescricao + ', ' +
                    'quantidade = ' + produtoQuantidade + ', ' +
                    'preco_compra = ' + produtoPrecoCompra + ', ' +
                    'preco_venda = ' + produtoPrecoVenda + ' ' +
                    'WHERE codigo = ' + produtoCodigo;


    var msg = 'Inserção de produto concluída!\n' + consultaSQL;

    var conexao = conexaoBD ();

    var executaTransacao = transacaoBD (conexao, consultaSQL, msg, resposta);

  });

};
